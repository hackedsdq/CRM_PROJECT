<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     
        $contacts = Contact::all();
        return Inertia::render('Contacts',['contacts'=>$contacts]);

    }
    public function editIndex($id){
        $contact = Contact::find($id);
        return Inertia::render('ShowEditContact',[
            'contact'=>$contact,
            'type'=>'edit',
        ]);
    }

    public function showIndex($id){
        $contact = Contact::find($id);
        return Inertia::render('ShowEditContact',[
            'contact'=>$contact,
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
        $request->validate([
            'nom'=>'required',
            'prenom'=>'required',
            'email'=>'required|integer',
            'password'=>'required|integer',
            'fonction'=>'required',
            'telephone'=>'required|integer'
        ]);
        try{return response()->json([
            'message'=>'contact Created Successfully!!'
        ]);
    }catch(\Exception $e){
        \Log::error($e->getMessage());
        return response()->json([
            'message'=>'Something goes wrong while creating a contact!!'
        ],500);
    }
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
            'nom'=>'required|min:3|max:255',
            'prenom'=>'required|min:3|max:255',
            'email'=>'required',
            'fonction'=>'required',
            'telephone'=>'required'
        ]);

        $contact = Contact::find($id);
        $contact->nom = $request->nom;
        $contact->prenom = $request->prenom ;
        $contact->fonction = $request->fonction;
        $contact->email = $request->email;
        $contact->telephone =  $request->telephone;
        $contact->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $request=Contact::find($id);
        $request->delete();
        
        //  $contact = Contact::whereIn('id',[$id])->delete();
    }
    
}
