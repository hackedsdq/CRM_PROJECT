<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Contact;
use App\Models\Opportunities;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilController extends Controller
{
    public function editIndex(){
        $contact = Contact::find(1);
        $client = Client:: find($contact ->Client_id);
        $opportun= Opportunities::where('client_id', 'like', $contact ->Client_id)->get();
              return Inertia::render('Profil',[
            'contact'=>$contact,
            'client' => $client,
            'opportunity' => $opportun
        ]);
    }
}
