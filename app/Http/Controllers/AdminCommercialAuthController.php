<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AdminCommercialAuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function login()
    {
        return Inertia::render('Signin');
    }

    public function handleLogin(Request $req)
    {
        if(Auth::guard('webadmin')->attempt($req->only(['email', 'password'])))
        {
            return redirect()->route('admin.home');
        }

        return redirect()->back()->with('error', 'Invalid Credentials');
    }

    public function logout()
    {
        Auth::guard('webadmin')->logout();

        return redirect()->route('admin.login');
    }
}
