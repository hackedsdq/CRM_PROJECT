<?php
namespace App\Http\Controllers;


use Illuminate\Support\Facades\Hash;
use App\Models\Prospect;
use App\Models\Client;
use App\Models\Contact;
use App\Models\Produit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produits = Produit::all();
        return Inertia::render('Produits',[
            'produits'=>$produits,
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
            'nom'=> 'required',
            // 'description'=> 'required',
             'prix'=> 'required',
             'quantité'=> 'required',
        ]
        );

        $newProduit = new Produit();
        
        $newProduit->nom = $request->nom;
        $newProduit->description = $request->description ;
        $newProduit->prix = $request->prix;
        $newProduit->quantité = $request->quantité;
   
  

        $newProduit->save();

       
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
     * @param  \App\Models\Prospect  $prospect
     * @return \Illuminate\Http\Response
     */
    public function show(Prospect $prospect)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prospect  $prospect
     * @return \Illuminate\Http\Response
     */
    public function edit(Prospect $prospect)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Prospect  $prospect
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prospect $prospect)
    {
        //
    }

   

   public function delete($id)
   {
    $produits = Produit::whereIn('id',[$id])->delete();
   }
}
