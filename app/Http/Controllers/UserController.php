<?php
namespace App\Http\Controllers;


use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;


use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $users = User::all();
        return Inertia::render('User',[
            'users'=>$users,
        ]);
    }

/*     public function editIndex($id){
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
    } */


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //return $request;
        $request->validate([
            'name'=> ['required','regex:/^[a-zA-Z]+$/'],
            'prenom'=> ['required','regex:/^[a-zA-Z]+$/'],
             'role'=> 'required',
             'email'=> ['required','email','unique:users'],
             'password'=> 'required',
             'photo'=> 'required',

        ]
        ); 

    User::create(['name'=>$request->name,
         'prenom'=>$request->prenom, 
         'role'=>"commercial", 
         'email'=>$request->email, 
         'password'=>Hash::make($request->password),
         'photo'=>$request->photo, 
        ]);

    return redirect()->back();
    }

    public function editIndex($id){
        $user = User::find($id);
        return Inertia::render('ShowEditUser',[
            'user'=>$user,
            'type'=>'edit',
        ]);
    }

    public function showIndex($id){
        $user = User::find($id);
        return Inertia::render('ShowEditUser',[
            'user'=>$user,
            'type'=>'show',
        ]);
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
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function show(Produit $produit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $User
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
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $request->validate([
            'name'=> ['required','regex:/^[a-zA-Z]+$/'],
            'prenom'=> ['required','regex:/^[a-zA-Z]+$/'],
            'email'=> ['required','email',Rule::unique('users')->ignore($id)],
            'photo'=> 'required',
        ]
        ); 

        //return $request;
        $user= User::find($id);
        $user->update([
            'name'=> $request->name,
            'prenom'=> $request->prenom,
            'photo'=> $request->photo,
            'email'=> $request->email,  
        ]);
        if(isset($request->password))
        $user->password = Hash::make($request->password);

        $user->save();

        return redirect()->route('adcom.users');        
    }

   

   public function delete($id)
   { 
    $ids = explode(",",$id);
    $user = User::whereIn('id',$ids)->delete();
    return redirect()->back();
   }
}
