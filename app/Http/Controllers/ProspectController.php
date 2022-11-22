<?php
namespace App\Http\Controllers;


use Illuminate\Support\Facades\Hash;
use App\Models\Prospect;
use App\Models\Client;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProspectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prospects = Prospect::all();
        return Inertia::render('Prospects',[
            'prospects'=>$prospects,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $request->validate([
            'nom'=> 'required',
            // 'société'=> 'required',
            // 'fonction'=> 'required',
            'email'=> 'required',
            // 'téléphone'=> 'required',
            // 'addresse'=> 'required',
            // 'site_web'=> 'required',
            // 'Status'=> 'required',
            // 'Source'=> 'required',
        ]
        );

        $newProspect = new Prospect();
        
        $newProspect->nom = $request->nom;
        $newProspect->prenom = $request->prenom ;
        $newProspect->société = $request->société;
        $newProspect->fonction = $request->fonction;
        $newProspect->email = $request->email;
        $newProspect->téléphone =  $request->téléphone;
        $newProspect->adresse = $request->adresse;
        $newProspect->site_web = $request->site_web;
        $newProspect->Statut = $request->Statut;
        $newProspect->Source = $request->Source;

        $newProspect->save();

        /*$query = Prospect::create([
            'nom'=> $request->nom,
            'prenom'=>$request->prenom, 
            'société'=> 'hamiddz', 
            'fonction'=>'said', 
            'email' => $request->email, 
            'téléphone'=>'0555924416', 
            'adresse'=>'hai al rahma', 
            'site_web'=>'facook.com', 
            'Status'=>'froid', 
            'Source'=>'socialmedia'
        ]);*/
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prospect  $prospect
     * @return \Illuminate\Http\Response
     */
    public function show(Prospect $prospect)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prospect  $prospect
     * @return \Illuminate\Http\Response
     */
    public function edit(Prospect $prospect)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Prospect  $prospect
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prospect $prospect)
    {
        //
    }

    public function conversion($id){
        $prospect = Prospect::find($id);

        $client = new Client();

        
/*         $client->société= $prospect->société;
        $client->téléphone=$prospect->téléphone; 
        $client->adresse=$prospect->adresse; 
        $client->site_web=$prospect->site_web;
        $client->prospects_id=$prospect->id;
        $client->save(); */
        

        $client = Client::create([
            'société'=> $prospect->société, 
            'téléphone'=>$prospect->téléphone, 
            'adresse'=>$prospect->adresse, 
            'site_web'=>$prospect->site_web, 
            'prospects_id'=>$prospect->id,
        ]);
 

         $contact = Contact::create([
            'nom'=> $prospect->nom,
            'prenom'=>$prospect->prenom, 
            'fonction'=>$prospect->fonction, 
            'email' => $prospect->email, 
            'telephone'=>$prospect->téléphone, 
            'password'=>Hash::make('123456789'), 
            'Client_id'=> $client->id,
        ]);

        
    }

   public function delete($id)
   {
    $prospect = Prospect::whereIn('id',[$id])->delete();
   }
}
