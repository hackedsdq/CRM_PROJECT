<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilController extends Controller
{
    public function editIndex(){
        $contact = Contact::find(1);
        $client = Client:: find($contact ->Client_id);
       
        return Inertia::render('Profil',[
            'contact'=>$contact,
            'client' => $client
          
        ]);
    }
}
