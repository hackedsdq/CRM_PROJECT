<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;

class ContactsAuthController extends Controller
{
    public function index(Request $req)
    {
        //$value = $req->user();
        $auth_id = Auth::user()->id;
        //return $auth_id;
        //return $value;
        return Inertia::render('Profile');
    }

    public function login()
    {
        return Inertia::render('SigninCostumer');
    }

    public function handleLogin(Request $req)
    {
        $req->validate([
            'email'=> 'required|email',
           'password'=> 'required', 
        ]
        );
        if(Auth::attempt($req->only(['email', 'password'])))
        {
            return redirect()->route('contacts.profile');
        }
        return redirect()->back()->with('error', 'Invalid Credentials');
    }

    public function logout()
    {
        //Auth::guard()->logout();

        return redirect()->route('contacts.login');
    }
}
