<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Contact;
use App\Models\Opportunities;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;

class ContactsAuthController extends Controller
{
    public function index(Request $req)
    {
        $contact_id= Auth::user()->id;
        $contact= Contact::find($contact_id);
        $client = Client::find($contact->client_id);
        $opportun= Opportunities::where('client_id', 'like', $contact->client_id)->get();
        return Inertia::render('Profil',[
            'contact'=>$contact,
            'client' => $client,
            'opportunity' => $opportun
        ]);
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

    public function handlelogout()
    {
        Auth::guard()->logout();
       
        return redirect()->route('home.contact');
    }
}
