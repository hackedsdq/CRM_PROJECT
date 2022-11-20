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
        //return $value;
        return Inertia::render('Profile');
    }

    public function login()
    {
        return Inertia::render('SigninCostumer');
    }

    public function handleLogin(Request $req)
    {
        if(Auth::attempt($req->only(['email', 'password'])))
        {
            return redirect()->route('contacts.profile');
        }
        return redirect()->back()->with('error', 'Invalid Credentials');
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->route('contacts.login');
    }
}
