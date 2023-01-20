<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use Mail;
use App\Mail\TestMail;

use App\Models\Prospect;
use App\Models\Client;
use App\Models\User;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use DB;
class ProspectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /*  @return \Illuminate\Http\Response
     /*index c la methode get()*/

    public function index(Request $request)
    {
      $auth_id = Auth::guard('webadcom')->user()->id;
    $prospects = User::find($auth_id)->prospects;
    //echo($prospects);
       /*  $prospects = DB::table('prospects')
                            ->Join('users', 'users.id', '=' , 'prospects.user_id')
                            ->where('users.id', '=', $auth_id)
                            ->select('prospects.nom', 'prospects.prenom', 'prospects.fonction' , 'prospects.téléphone','prospects.Statut', 'prospects.Source', 'prospects.id')
                            ->get();   */

       //$prospects = Prospect::all();
       //$session = $request->session()->get('key');
      // return $session;
        return Inertia::render('Prospects',[
            'prospects'=>$prospects,
        ]);
    }

    public function editIndex($id){

        $auth_id = Auth::guard('webadcom')->user()->id;

        $prospect = Prospect::find($id);

        //return $prospect;
        if((isset($prospect)) && ($prospect->user_id != $auth_id))
        return redirect()->route('adcom.prospects');   
        else if(!isset($prospect))
        return redirect()->route('adcom.prospects');   


        return Inertia::render('ShowEditProspect',[
            'prospect'=>$prospect,
            'type'=>'edit',
        ]);
    }

    public function showIndex($id){
        $auth_id = Auth::guard('webadcom')->user()->id;
        $prospect = Prospect::find($id);

        //return $prospect;
        if((isset($prospect)) && ($prospect->user_id != $auth_id))
        return redirect()->route('adcom.prospects');   
        else if(!isset($prospect))
        return redirect()->route('adcom.prospects');


        return Inertia::render('ShowEditProspect',[
            'prospect'=>$prospect,
            'type'=>'show',
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
            'nom'=> ['required','regex:/^[a-zA-Z]+$/'],
            'prenom'=> ['required','regex:/^[a-zA-Z]+$/'],
            'société'=> ['required','regex:/^[a-zA-Z]+$/'],
             'fonction'=> ['required','regex:/^[a-zA-Z]/'],
            'email'=> ['required','email','unique:prospects'],
            'téléphone'=> ['required','regex:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/'],
            'adresse'=> 'required',
            'site_web'=> ['required','url'],
            'Statut'=> 'required',
            'Source'=> 'required',
       ]
       ); 

       

        $newProspect = new Prospect();
        $user_id = Auth::guard('webadcom')->user()->id;

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
        $newProspect->logo = $request->logo;
        $newProspect->photo = $request->photo;
        $newProspect->user_id = $user_id;

        $newProspect->save();

        return redirect()->back()->with([
            'message' => 'Prospect créer avec succées 👌',
        ]);
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
    public function update(Request $request,$id)
    {
        $request->validate([
            'nom'=> ['required','regex:/^[a-zA-Z]+$/'],
            'prenom'=> ['required','regex:/^[a-zA-Z]+$/'],
            'société'=> ['required','regex:/^[a-zA-Z]+$/'],
             'fonction'=> ['required','regex:/^[a-zA-Z]/'],
            'email'=> ['required','email',Rule::unique('users')->ignore($id),'unique:prospects'],
            'téléphone'=> ['required','regex:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/'],
            'adresse'=> 'required',
            'site_web'=> ['required','url'],
            'Statut'=> 'required',
            'Source'=> 'required',
       ]
       ); 

       //return $request;
        $prospect = Prospect::find($id);
        $prospect->nom = $request->nom;
        $prospect->prenom = $request->prenom ;
        $prospect->société = $request->société;
        $prospect->fonction = $request->fonction;
        $prospect->email = $request->email;
        $prospect->téléphone =  $request->téléphone;
        $prospect->adresse = $request->adresse;
        $prospect->site_web = $request->site_web;
        $prospect->Source = $request->Source;
        $prospect->Statut = $request->Statut;
        $prospect->logo = $request->logo;
        $prospect->photo = $request->photo;

        $prospect->save();

        return redirect()->route('adcom.prospects');

    }

    public function conversion($id){
        $prospect = Prospect::find($id);
        
        
        //$client = new Client();

        
/*         $client->société= $prospect->société;
        $client->téléphone=$prospect->téléphone; 
        $client->adresse=$prospect->adresse; 
        $client->site_web=$prospect->site_web;
        $client->prospect_id=$prospect->id;
        $client->save(); */

 
        $existingClient = Client::where('société', $prospect->société)->get();
       // get id from the laravel_session of a default Auth
        // $user_id = Auth::guard('webadcom')->user()->id;
        // get id from the laravel_session of a guarded Auth
        $user_id = Auth::guard('webadcom')->user()->id;

        $generatedPassword = Str::random(10);
        // send email
        $data = [
            "subject"=>"Hyper Email",
            "email"=>"$prospect->email",
            "password"=>"$generatedPassword"
            ];
          // MailNotify class that is extend from Mailable class.
          try
          {
            Mail::to($prospect->email)->send(new TestMail($data));
          }
          catch(Exception $e)
          {
          }



        if(count($existingClient)==0){
            $client = Client::create([
                'société'=> $prospect->société, 
                'téléphone'=>$prospect->téléphone, 
                'adresse'=>$prospect->adresse, 
                'site_web'=>$prospect->site_web, 
                'prospect_id'=>$prospect->id,
                'logo'=>$prospect->logo,
                'user_id'=>$user_id
            ]);
            $contact = Contact::create([
                'nom'=> $prospect->nom,
                'prenom'=>$prospect->prenom, 
                'fonction'=>$prospect->fonction, 
                'email' => $prospect->email, 
                'telephone'=>$prospect->téléphone, 
                'photo'=>$prospect->photo,
                'password'=>Hash::make('123456789'), 
                'client_id'=> $client->id,
            ]);
        }
        else{
            $contact = Contact::create([
                'nom'=> $prospect->nom,
                'prenom'=>$prospect->prenom, 
                'fonction'=>$prospect->fonction, 
                'email' => $prospect->email,
                'photo'=>$prospect->photo,
                'telephone'=>$prospect->téléphone, 
                'password'=>Hash::make($generatedPassword), 
                'client_id'=> $existingClient['0']->id,
            ]);
            $existingClient[0]->contact;
        }

        $prospect->delete();
        return redirect()->back()->with('message', 'Something went wrong!');
        //return $existingClient[0];
    }

   public function delete($id)
   {
    $prospect = Prospect::whereIn('id',[$id])->delete();
   }
}
