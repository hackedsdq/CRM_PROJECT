<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use App\Models\Contact;
use App\Models\User;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use DB;
use DateTime;
class CalendarContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      //return Inertia::render('CalendarContact');
       // $result = Calendar::all();
       // return $result;
       $auth_id = Auth::guard('web')->user()->id;
       $contact=Contact::find($auth_id);
       $events=$contact->user;
       $Events = array();
       
       foreach($events as $e){
        $date = $e->pivot->Date;
        $heure = $e->pivot->heure;

        $user = DB::table('contacts')
        ->Join('clients', 'clients.id', '=' , 'contacts.client_id')
        ->Join('users', 'users.id', '=' , 'clients.user_id')
        ->where('contacts.id', '=', $e->pivot->contact_id)
        ->where('clients.deleted_at', '=', null)
        ->select('users.id', 'users.name', 'users.prenom', 'users.photo', 'users.email')
        ->get(); 

        $event = array(
            "start"=> date('Y-m-d H:i:s', strtotime($date.''.$heure )),
            "heure"=> $e->pivot->heure ,
            "title" =>  $user[0]->name,
            "contact_id" => $e->pivot->contact_id ,
            "user" => $user ,
            "compte_rendu"=> $e->pivot->compte_rendu,
            "id" => $e->pivot->id
        );
        array_push($Events , $event);
       };


       return Inertia::render("CalendarContact",['Events'=>$Events]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
        $request->validate([
           'Date'=> ['required'],
           'heure'=> 'required',
           'compte_rendu'=> ['required','min:7'],
           'contact_id'=> ['required','integer']
        ]
        );


        $auth_id = Auth::guard('webadcom')->user()->id;

        $contact=Contact::find($request->contact_id);
        $contact->user()->attach($auth_id,["Date"=>$request->Date,"compte_rendu"=>$request->compte_rendu,"heure"=>$request->heure]);
       
        return redirect()->route('contacts.calendar');
}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function searchContacts(Request $request){
        $contact_name = $request->contact;
        $contacts = Contact::where('nom', 'like', $contact_name.'%')->get();
        //return $id=Auth::id();  
        return Inertia::render('CalendarContact',[
            'contacts'=>$contacts
        ]);
       
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function show(Calendar $Date)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {  
      

        $request->validate([
            'Date'=> ['required'],
            'heure'=> 'required',
            'compte_rendu'=> ['required','min:7'],
         ]
         );

        //return $request;
        
        $auth_id = Auth::guard('webadcom')->user()->id;
        $user=User::find($auth_id);

        //return  $user->contacts()->wherePivot('id', $request->id)->get();

        $user->contacts()->wherePivot('id', $request->id)->update(
        ["Date"=>$request->Date,
        "compte_rendu"=>$request->compte_rendu,
        "heure"=>$request->heure
        ]);

        return redirect()->route('contacts.calendar');
       //return Inertia::render('Calendar');
      //  $contact->user()->updateExistingPivot($request->user_id,["Date"=>$request->Date,"compte_rendu"=>$request->compte_rendu,"heure"=>$request->heure]);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {

        $auth_id = Auth::guard('webadcom')->user()->id;
        $user=User::find($auth_id);
        $user->contacts()->wherePivot('id', $id)->detach();

        return redirect()->route('contacts.calendar');
        
       // $contact=Contact::find($request->contact_id);
       // $contact->user()->where($request->id)->wherePivot()->detach();
        
      //  return $id;
    }

    public function index2()
    {
      //return Inertia::render('Calendar');
       // $result = Calendar::all();
       // return $result;
       $auth_id = Auth::guard('webadcom')->user()->id;

        $user=User::find($auth_id);
       $Events=$user->contacts;
      // return $Events;
       return Inertia::render("CalendarContact",['Events'=>$Events]);
    }



    }

