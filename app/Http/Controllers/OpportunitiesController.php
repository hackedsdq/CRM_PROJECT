<?php

namespace App\Http\Controllers;

use App\Models\Opportunities;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OpportunitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $opportunities = Opportunities::all();
        return Inertia::render('Opportunities',[
            'opportunities'=>$opportunities,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        

        $opportunity = new Opportunities();
        
        $opportunity->nom = $request->nom;
        $opportunity->montant = $request->montant ;
        $opportunity->étape = $request->étape;
        $opportunity->date_de_clôture = $request->date_de_clôture;
        $opportunity->Client_id = $request->Client_id;
        
        $opportunity->save();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Opportunities  $opportunities
     * @return \Illuminate\Http\Response
     */
    public function show(Opportunities $opportunities)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Opportunities  $opportunities
     * @return \Illuminate\Http\Response
     */
    public function edit(Opportunities $opportunities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Opportunities  $opportunities
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        

        $opportunity = Opportunities::find($id);
        
        $opportunity->nom = $request->nom;
        $opportunity->montant = $request->montant ;
        $opportunity->étape = $request->étape;
        $opportunity->date_de_clôture = $request->date_de_clôture;
        $opportunity->Client_id = $request->Client_id;
        
        $opportunity->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Opportunities  $opportunities
     * @return \Illuminate\Http\Response
     */
    

    public function delete($id)
   {
    $opportunity = Opportunities::whereIn('id',[$id])->delete();
   }
}
