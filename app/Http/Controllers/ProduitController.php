<?php

namespace App\Http\Controllers;

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
    {   $produits= Produit::all();
        return Inertia::render('Produits', [ 'produits' => $produits]);
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
    {    $request->validate([
        'nom'=>'required',
       // 'description'=>'required',
        'photo'=>'required',
        'quantité'=>'required|integer',
        'prix'=>'required|double'
        
    ]);
       Produit::create([
        'nom'=> $request->nom,
        'description'=>$request->description,
        'photo'=>$request->photo,
        'quantité'=>$request->quantité,
        'prix'=>$request->prix
      
       ]);
       return Inertia::render('Produits');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Produit  $produit
     * @return \Illuminate\Http\Response
     */
    public function show(Produit $produit)
    {
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Produit  $produit
     * @return \Illuminate\Http\Response
     */
    public function edit(Produit $produit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Produit  $produit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Produit $produit)
    {   $request->validate([
        'nom'=>'required',
        'description'=>'required',
        'photo'=>'required',
        'quantité'=>'required|integer',
        'prix'=>'required|double'
        
    ]);
        $produit->update([
            'nom'=> $request->nom,
            'description'=>$request->description,
            'quantité'=>$request->quantité,
            'prix'=>$request->prix
        ]);
        return Inertia::render('Produits');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Produit  $produit
     * @return \Illuminate\Http\Response
     */
    public function destroy(Produit $produit)
    {
        $produit->delete();
        return Inertia::render('Produits');
    }
}
