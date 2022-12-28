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


        $contact = Contact::find($id);
        $client = Client:: find($contact ->Client_id);   
       
        $contact->nom =$request->nom;
        $contact->prenom= $request->prenom;
        $contact->email =$request->email;
        $contact->fonction = $request->fonction;
        $contact->telephone =$request->telephone;
        

        $client->société = $request->societe;
        $client->save();
        $contact->save();
        return redirect()->back();
}

//  public function showOpportu ($id){
//     $opportunity= Opportunities::find($id);
//     $opportunityProducts = $opportunity->produits;
//     $client = Client:: find($opportunity->Client_id);
//     return Inertia::render('ShowOpportunity',[
//         'opportunity'=>$opportunity,
//             'type'=>'show',
//             'client' => $client,
//             'opportunityProducts'=>$opportunityProducts

//     ]);

//           }

      public function showOpportun ($id){
        $opportunity= Opportunities::find($id);
            $opportunityProducts = $opportunity->produits;
            $client = Client:: find($opportunity->Client_id);
           
            return Inertia::render('ShowOpportunity',[
                'opportunity'=>$opportunity,
                    'type'=>'show',
                    'client' => $client,
                    'opportunityProducts'=>$opportunityProducts
        
            ]);
      }     
        
}
