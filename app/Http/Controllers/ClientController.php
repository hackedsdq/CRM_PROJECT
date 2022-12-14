<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Contact;
use App\Models\Opportunities;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clients = Client::all();
        return Inertia::render('Clients',[
            'clients' => $clients
        ]);
    }

    public function editIndex($id){
        $client = Client::find($id);
        $clientContacts = Contact::where('client_id', $id)->get();
        $clientOpportunities = Opportunities::where('client_id', $id)->get();
       // return $clientContacts;
 
        return Inertia::render('ShowEditClient',[
            'client'=>$client,
            'type'=>'edit',
            'clientContacts'=>$clientContacts,
            "clientOpportunities"=>$clientOpportunities
        ]); 
    }

    public function showIndex($id){
        $client = Client::find($id);
        $clientContacts = Contact::where('client_id', $id)->get();
        $clientOpportunities = Opportunities::where('client_id', $id)->get();

        return Inertia::render('ShowEditClient',[
            'client'=>$client,
            'type'=>'show',
            'clientContacts'=>$clientContacts,
            "clientOpportunities"=>$clientOpportunities
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $client = Client::find($id);
        $client->société =  $request->société;
        $client->adresse = $request->adresse;
        $client->téléphone = $request->téléphone;
        $client->site_web = $request->site_web;
        $client->save();

        return $client;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
             $client = Client::whereIn('id',[$id])->delete();
    }
}