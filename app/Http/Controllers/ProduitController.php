<?php
namespace App\Http\Controllers;


use Illuminate\Support\Facades\Hash;


use App\Models\Produit;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

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
    public function editIndex($id){

        
        $produits = Produit::find($id);
        return Inertia::render('ShowEditProduit',[
            'produits'=>$produits,
            'type'=>'edit',
        ]);
    }

    public function showIndex($id){
        $produits = Produit::find($id);
        return Inertia::render('ShowEditProduit',[
            'produits'=>$produits,
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
        $request->validate([
            'nom'=>['required','regex:/^[a-zA-Z]+$/'],
           'description'=> 'required|min:20',
             'prix'=> 'required|integer',
             'quantité'=> 'required|integer',
        ]
        );

        $newProduit = new Produit();
        $newProduit->nom = $request->nom;
        $newProduit->description = $request->description ;
        $newProduit->prix = $request->prix;
        $newProduit->quantité = $request->quantité;
        $newProduit->photo = $request->photo;

        $newProduit->save();
        return Redirect::route('adcom.produits');
    }
   


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prospect  $prospect
     * @return \Illuminate\Http\Response
     */
    public function show(Produit $produit)
    {
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prospect  $prospect
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
     * @param  \App\Models\Prospect  $prospect
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {$produits= Produit::find($id);
        $request->validate([
            'nom'=>['required','regex:/^[a-zA-Z]+$/'],
           'description'=> 'required|min:20',
             'prix'=> 'required|integer',
             'quantité'=> 'required|integer',
        ]
        );
        $produits->update([
            'nom'=> $request->nom,
            'description'=> $request->description,
            'prix'=> $request->prix,
            'quantité'=> $request->quantité,
            'photo'=> $request->photo,
            
        ]);
        $produits->save();
        return redirect()->route('adcom.produits');        
    }

   

   public function delete($id)
   { $produits = Produit::whereIn('id',[$id])->delete();
     
   }
}
