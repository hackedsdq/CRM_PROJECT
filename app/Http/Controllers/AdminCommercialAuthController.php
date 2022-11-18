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
        return Inertia::render('Home');
    }

    public function login()
    {
        return Inertia::render('Signin');
    }

    public function handleLogin(Request $req)
    {
        if(Auth::guard('webadcom')->attempt($req->only(['email', 'password'])))
        {
            return redirect()->route('adcom.home');
        }
        return redirect()->back()->with('error', 'Invalid Credentials');
    }

    public function logout()
    {
        Auth::guard('webadcom')->logout();

        return redirect()->route('adcom.login');
    }
}
