<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use DB;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     
        $auth_id = Auth::guard('webadcom')->user()->id;

        //$contacts = Contact::all();
         $contacts = DB::table('contacts')
                            ->Join('clients', 'clients.id', '=' , 'contacts.client_id')
                            ->Join('users', 'users.id' ,'=' , 'clients.user_id')
                            ->where('users.id', '=', $auth_id)
                            ->where('contacts.deleted_at', '=', null)
                            ->select('contacts.nom', 'contacts.prenom', 'contacts.email', 'contacts.id' , 'contacts.fonction')
                            ->get(); 
        //$contacts = Client::find($clients[0]->user_id)-
        //return $clients;

        return Inertia::render('Contacts',['contacts'=>$contacts]);

    }
    public function editIndex($id){
        //$contact = Contact::find($id);

        $auth_id = Auth::guard('webadcom')->user()->id;

        //$contacts = Contact::all();
        //$contact = DB::table('contacts')
         $contact = DB::table('contacts')
                            ->Join('clients', 'clients.id', '=' , 'contacts.client_id')
                            ->Join('users', 'users.id' ,'=' , 'clients.user_id')
                            ->where('users.id', '=', $auth_id)
                            ->where('contacts.id', '=', $id)
                            ->where('contacts.deleted_at', '=', null)
                            ->select('contacts.nom', 'contacts.prenom', 'contacts.email', 'contacts.id' , 'contacts.fonction','contacts.photo', 'contacts.telephone')
                            ->get(); 

        if(count($contact)==0)
        return redirect()->route('adcom.contacts');

        return Inertia::render('ShowEditContact',[
            'contact'=>$contact[0],
            'type'=>'edit',
        ]);
    }

    public function showIndex($id){

        $auth_id = Auth::guard('webadcom')->user()->id;

        $contact = DB::table('contacts')
                ->Join('clients', 'clients.id', '=' , 'contacts.client_id')
                ->Join('users', 'users.id' ,'=' , 'clients.user_id')
                ->where('users.id', '=', $auth_id)
                ->where('contacts.id', '=', $id)
                ->where('contacts.deleted_at', '=', null)
                ->select('contacts.nom', 'contacts.prenom', 'contacts.email', 'contacts.id' , 'contacts.fonction','contacts.photo', 'contacts.telephone')
                ->get();


        if(count($contact)==0)
        return redirect()->route('adcom.contacts');


        return Inertia::render('ShowEditContact',[
            'contact'=>$contact[0],
            'type'=>'show',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
          //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        /*by soundouss*/

       $request->validate([
            'nom'=>['required','regex:/^[a-zA-Z]+$/'],
            'prenom'=>['required','regex:/^[a-zA-Z]+$/'],
            'email'=>'required|email',
            'fonction'=>'required',
            'telephone'=>['required','regex:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/']
        ]);

        $contact = Contact::find($id);
        $contact->nom = $request->nom;
        $contact->prenom = $request->prenom ;
        $contact->fonction = $request->fonction;
        $contact->email = $request->email;
        $contact->telephone =  $request->telephone;
        $contact->photo =  $request->photo;

        $contact->save();

        return redirect()->route('adcom.contacts');
    }
        
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $ids = explode(",",$id);

        $request=Contact::find($id);
        $request->delete();
        
       // return redirect()->route('adcom.contacts');
        
        //  $contact = Contact::whereIn('id',[$id])->delete();
    }
    
}
