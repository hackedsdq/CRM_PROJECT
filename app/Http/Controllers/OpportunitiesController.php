<?php

namespace App\Http\Controllers;

use App\Models\Opportunities;
use App\Models\Client;
use App\Models\Produit;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;
class OpportunitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auth_id = Auth::guard('webadcom')->user()->id;
    //$contact_id = Auth::guard()->contacts()->id;
        //$contacts = Contact::all();
         $opportunities = DB::table('opportunities')
                            ->Join('clients', 'clients.id', '=' , 'opportunities.client_id')
                            ->Join('users', 'users.id' ,'=' , 'clients.user_id')
                            ->where('users.id', '=', $auth_id)
                            ->where('opportunities.deleted_at', '=', null)
                            ->select('opportunities.id', 'opportunities.nom', 'opportunities.montant', 'opportunities.étape' , 'opportunities.date_de_clôture')
                            ->get(); 
        //return $opportunities;
        //return $opportunities;

        $opportunities_one = array();
        $opportunities_two = array();
        $opportunities_three = array();
        $opportunities_four = array();
        
        foreach($opportunities as $e){
            if($e->étape == 'one')
            array_push($opportunities_one, $e);
            else if($e->étape == 'two')
            array_push($opportunities_two, $e);
            else if($e->étape == 'three')
            array_push($opportunities_three, $e);
            else if($e->étape == 'four')
            array_push($opportunities_four, $e);
        }


        //return $opportunities_one;
        return Inertia::render('Opportunities',[
            'opportunities_one'=> $opportunities_one,
            'opportunities_two'=> $opportunities_two,
            'opportunities_three'=> $opportunities_three,
            'opportunities_four'=> $opportunities_four,
            'opportunities'=> $opportunities,
        ]);
    }

    public function editIndex($id){
        $opportunity = Opportunities::find($id);
        $client = Client::find($opportunity->client_id);
        //$opportunity->produits();
        $opportunityProducts = $opportunity->produits;
        return Inertia::render('ShowEditOpportunity',[
            'opportunity'=>$opportunity,
            'type'=>'edit',
            'client' => $client,
            'opportunityProducts'=>$opportunityProducts
        ]);
    }

    public function showIndex($id){
        $opportunity = Opportunities::find($id);
        $opportunityProducts = $opportunity->produits;
        $client = Client:: find($opportunity->client_id);
        return Inertia::render('ShowEditOpportunity',[
            'opportunity'=>$opportunity,
            'type'=>'show',
            'client' => $client,
            'opportunityProducts'=>$opportunityProducts

        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $request->validate([
        'nom'=> ['required','regex:/^[a-zA-Z]+$/'],
       //'montant'=> 'required|min:3',
         'date_de_clôture'=> 'required|date',
         'client_id'=> 'required|integer',
    ]
    );
        
        //return $request;
        $newOpportunity= Opportunities::create([
            'nom'=> $request->nom,
            'montant'=>'0',
            'date_de_clôture'=>$request->date_de_clôture,
            'client_id'=>$request->client_id,
        ]);
        //return redirect()->back();
    }

    public function searchClients(Request $request){
        $client_name = $request->client;
        $clients = Client::where('société', 'like', $client_name.'%')->get();
        //return $id=Auth::id();  
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
        $request->validate([
             'quantité'=> 'required|integer'
        ]
        );
        $opportunity = Opportunities::find($opport);
        $product = Produit::find($request->product_id);
       // return $product->opportunities;
        $product->opportunities()->attach($opport, ["quantité"=>$request->quantité]);
            $montant = (($product->prix)*($request->quantité))+($opportunity->montant);
            //return $montant;
            $opportunity->montant = $montant;
            $opportunity->save();

        
      
        //$product->user()->newPivotStatementForId($contact->user->find(1)->pivot->user_id)->where("id",$request->id)->update(["Date"=>$request->Date,"compte_rendu"=>$request->compte_rendu,"heure"=>$request->heure]);
        
        /*         return Inertia::render("ShowEditOpportunity",[
            'opportunityProducts' => "41"
        ]); */
    }

    public function deleteProduit(Request $request, $opport){
        
        $opportunity = Opportunities::find($opport);
        $product = Produit::find($request->product_id);
       // return $product->opportunities;
        $product->opportunities()->detach();
        
        return redirect()->back();
        //$product->user()->newPivotStatementForId($contact->user->find(1)->pivot->user_id)->where("id",$request->id)->update(["Date"=>$request->Date,"compte_rendu"=>$request->compte_rendu,"heure"=>$request->heure]);
        
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

        if(!isset($request->nom)){
            $opportunity->étape = $request->étape;
            $opportunity->save();
            return redirect()->route('adcom.opportunities');
        }

        $request->validate([
            'nom'=> ['required','regex:/^[a-zA-Z]+$/'],
           'montant'=> 'required|integer',
           'étape'=> 'required'
        ]
        );
        $opportunity->nom = $request->nom;
        //$opportunity->montant = $request->montant ;
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
    

    public function delete($id)
   {
    $opportunity = Opportunities::whereIn('id',[$id])->delete();
   }
}
