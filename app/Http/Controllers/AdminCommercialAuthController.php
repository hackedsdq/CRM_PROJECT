<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AdminCommercialAuthController extends Controller
{
    public function index(Request $req)
    {
        $value = $req->user();
        //return $value;
        $user_pic = Auth::guard('webadcom')->user()->photo;
        $user_nom = Auth::guard('webadcom')->user()->name;
        $user_prenom = Auth::guard('webadcom')->user()->prenom;
        $user_role = Auth::guard('webadcom')->user()->role;
        $user_id = Auth::guard('webadcom')->user()->id;

        return Inertia::render('Home',[
            'user_pic'=>$user_pic,
            'user_nom'=>$user_nom,
            'user_prenom'=>$user_prenom,
            'user_role'=>$user_role,
            'user_id'=>$user_id,
        ]);
    }

    public function login()
    {
        return Inertia::render('Signin');
    }

    public function handleLogin(Request $req)
    {
        $req->validate([
            'email'=> 'required|email',
           'password'=> 'required'
        ]
        );
        if(Auth::guard('webadcom')->attempt($req->only(['email', 'password'])))
        {
            return redirect()->route('adcom.home');
        }
        return redirect()->back()->with('error', 'Invalid Credentials');
    }

    public function handleLogout(Request $req)
    {
        //return redirect()->route('adcom.login');
        Auth::guard('webadcom')->logout();
        return redirect()->route('adcom.login');
    }
}
