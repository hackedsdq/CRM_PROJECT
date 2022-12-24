<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use App\Models\Contact;
use App\Models\User;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CalendarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      //return Inertia::render('Calendar');
       // $result = Calendar::all();
       // return $result;
    
        $user=User::find(1);
       $Events=$user->contacts;
      // return $Events;
       return Inertia::render("Calendar",['Events'=>$Events]);
    }

    public function add($id)
    {
        $contact=$id;
        return Inertia::render('Calendar');
       // $result = Calendar::all();
       // return compact('result','contact');

    
        
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $contact=Contact::find($request->contact_id);
        $contact->user()->attach($request->user_id,["Date"=>$request->Date,"compte_rendu"=>$request->compte_rendu,"heure"=>$request->heure]);
       
        //return Inertia::render("Calendar");
  
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
        return Inertia::render('Calendar',[
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
      
        $contact = Contact::find($request->contact_id);
       $contact->user()->newPivotStatementForId($contact->user->find(1)->pivot->user_id)->where("id",$request->id)->update(["Date"=>$request->Date,"compte_rendu"=>$request->compte_rendu,"heure"=>$request->heure]);
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
    public function destroy(Request $request)
    {
        return $request;
       // $contact=Contact::find($request->contact_id);
       // $contact->user()->where($request->id)->wherePivot()->detach();
        
      //  return $id;
    }

    public function index2()
    {
      //return Inertia::render('Calendar');
       // $result = Calendar::all();
       // return $result;
    
        $user=User::find(1);
       $Events=$user->contacts;
      // return $Events;
       return Inertia::render("CalendarContact",['Events'=>$Events]);
    }



    }

