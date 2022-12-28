<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Contact;
use App\Models\Opportunities;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Profiler\Profile;

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
    public function update(Request $request,$id)
    {
    //    $request->validate([
    //         'nom'=>['required','regex:/^[a-zA-Z]+$/'],
    //         'prenom'=>['required','regex:/^[a-zA-Z]+$/'],
    //         'email'=>'required|email',
    //         'fonction'=>'required',
    //         'telephone'=>['required','regex:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/']
    //     ]);

        $contact = Contact::find($id);
       
        // $contact- = $request->nom;
        // $contact->prenom = $request->prenom ;
        // $contact->fonction = $request->fonction;
        // $contact->email = $request->email;
        // $contact->telephone =  $request->telephone;
        // $contact->save();
        $contact->nom =$request->nom;
        $contact->prenom= $request->prenom;
        $contact->email =$request->email;
        $contact->telephone =$request->telephone;
        $contact->save();
          }
        
}
