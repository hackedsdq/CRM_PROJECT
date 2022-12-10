<?php

namespace App\Http\Controllers;

use App\Models\Opportunities;
use App\Models\Client;
use App\Models\Produit;

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
        $opportunities_one = Opportunities::where('étape', 'one')->get();
        $opportunities_two = Opportunities::where('étape', 'two')->get();
        $opportunities_three = Opportunities::where('étape', 'three')->get();
        $opportunities_four = Opportunities::where('étape', 'four')->get();

        return Inertia::render('Opportunities',[
            'opportunities_one'=> $opportunities_one,
            'opportunities_two'=> $opportunities_two,
            'opportunities_three'=> $opportunities_three,
            'opportunities_four'=> $opportunities_four,
        ]);
    }

    public function editIndex($id){
        $opportunity = Opportunities::find($id);
        //$opportunity->produits();
        $opportunityProducts = $opportunity->produits;
        return Inertia::render('ShowEditOpportunity',[
            'opportunity'=>$opportunity,
            'type'=>'edit',
            'opportunityProducts'=>$opportunityProducts
        ]);
    }

    public function showIndex($id){
        $opportunity = Opportunities::find($id);
        return Inertia::render('ShowEditOpportunity',[
            'opportunity'=>$opportunity,
            'type'=>'show',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //return $request;
        $newOpportunity= Opportunities::create([
            'nom'=> $request->nom,
            'montant'=>$request->montant, 
            'date_de_clôture'=>$request->date_de_clôture,
            'Client_id'=>$request->Client_id,
        ]);
    }

    public function searchClients(Request $request){
        $client_name = $request->client;
        $clients = Client::where('société', 'like', $client_name.'%')->get();
          return Inertia::render('Opportunities',[
            'clients'=>$clients
        ]);
    }

    
    public function searchProduits(Request $request,$opp){
        $product_name = $request->product;
        $products = Produit::where('nom', 'like', $product_name.'%')->get();
           return Inertia::render('ShowEditOpportunity',[
            'products'=>$products,
            'type'=>'edit',
        ]); 
    }

    public function addProduit(Request $request, $opport){
        $opportunity = Opportunities::find($opport);
        $product = Produit::find($request->product_id);
        $product->opportunities()->attach($opport, ["quantité"=>$request->quantité]);
        /*         return Inertia::render("ShowEditOpportunity",[
            'opportunityProducts' => "41"
        ]); */
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
    public function update(Request $request)
    {
        $opportunity = Opportunities::find($request->opportunity_id);
        $opportunity->nom = $request->nom;
        $opportunity->montant = $request->montant ;
        $opportunity->étape = $request->étape;
        $opportunity->save();
        return redirect()->route('adcom.opportunities');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Opportunities  $opportunities
     * @return \Illuminate\Http\Response
     */
    public function destroy(Opportunities $opportunities)
    {
        //
    }
}
