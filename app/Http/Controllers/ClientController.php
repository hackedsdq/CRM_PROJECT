<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{

    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('adcom.clients.create');
    }

    public function index()
    {
        $client = Client::all();
        
        return Inertia::render('Clients',[
            'clients' => $client
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function editClient(Request $request, $id)
    {

        $request->validate([
            'Society'=>'required',
            'Adress'=>'required',
            'Telephone'=>'required | integer',
            'Website'=>'required'
        ]); 
        $client = Client::find($id);
        $client->Society =  $request->get('Society');
        $client->Adress = $request->get('Adress');
        $client->Telephone = $request->get('Telephone');
        $client->Website = $request->get('Website');
        $client->save();
 
        return redirect('adcom.clients');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    /* public function getAll(Client $client)
    {

        $index = Client::findOrFail($client);
        
        return Inertia::render('Clients',[
            'clients' => $client[$index]
        ]);
    } */
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function deleteClient($id)
    {
        $client->delete();
        return redirect('adcom.clients');
    }
}
