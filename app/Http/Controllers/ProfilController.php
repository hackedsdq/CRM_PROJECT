<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilController extends Controller
{
    public function editIndex(){
        $contact = Contact::find(1);
        return Inertia::render('Profil',[
            'contact'=>$contact,
          
        ]);
    }
}
