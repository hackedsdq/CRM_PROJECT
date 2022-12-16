<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use App\Models\Contact;
use App\Models\User;
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
        /*$data=pivot_table_contact_user::create(
            [
                'Date'=>$request->Date,
                'heure'=>$request->heure,
                'compte_rendu'=>$request->compte_rendu,
                'contact_id'=>Contact::where($request->user()),
                'user_id'=>User::where($request->contacts())
            ]
            ); return response()->json($data);*/
            
          // $contact=Contact::find($request->contact_id);
          // $Events=$contact->user;
           //return Inertia::render("Calendar",['Events'=>$Events]);
    
        $contact=Contact::find($request->contact_id);
        $userid=(int)$request->user_id;
       $contact->user()->attach($userid,["Date"=>$request->Date,"compte_rendu"=>$request->compte_rendu,"heure"=>$request->heure]);
       return Inertia::render("Calendar");
}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $calendar = new Calendar();
        $calendar->Date = $request->Date;
        $calendar->heure = $request->heure;
        $calendar->compte_rendu = $request->compte_rendu;

        $calendar->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function show(Calendar $Date)
    {
        $calendar = Calendar::where('Date', '==', $Date)->orWhere('heure', '==', $heure)
        ->get();
        
        return $calendar;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function edit( $id)
    {
        $calendar = Calendar::find($id);
        return $calendar;
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
        $calendar = Calendar::find($id);
        $calendar->Date = $request->Date;
        $calendar->heure = $request->heure;
        $calendar->compte_rendu = $request->compte_rendu;
        
        $calendar->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $calendar = Calendar::find($id);
        $calendar->delete();
    }
}
