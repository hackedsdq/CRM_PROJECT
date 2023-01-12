<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Prospect;
use App\Models\Client;
use App\Models\Contact;
use App\Models\Opportunities;
use DB;

class AdminCommercialAuthController extends Controller
{
    public function index(Request $req)
    {
        $value = $req->user();
        //return $value;
        $user_pic = Auth::guard('webadcom')->user()->photo;
        $user_nom = Auth::guard('webadcom')->user()->name;
        $user_prenom = Auth::guard('webadcom')->user()->prenom;
        $user_role = Auth::guard('webadcom')->user()->role;
        $user_id = Auth::guard('webadcom')->user()->id;

        $perContacts = array();
        $recent_prospects = Prospect::latest()->where('user_id', $user_id)->take(10)->get(['nom', 'prenom', 'photo', 'Statut', 'email']);
        //$recent_contacts = Contact::all()->groupBy('client_id');
        $recent_contacts = Contact::groupBy('client_id')->selectRaw('count(*) as total,client_id')->orderBy('total','DESC')->take(5)->get();
        foreach ($recent_contacts as $e) {
            array_push($perContacts, strval($e['client_id']));
        };

        //$ids = explode(",", $perContacts);
        //echo(json_encode($perContacts));
        $clients = Client::WhereIn('id', $perContacts)->where('user_id', $user_id)->get();
        
        $opportunities = Opportunities::groupBy('étape')->selectRaw('count(*) as total,étape')
        ->Join('clients', 'clients.id', '=' , 'opportunities.client_id')
        ->Join('users', 'users.id' ,'=' , 'clients.user_id')
        ->where('users.id', '=', $user_id)
        ->get();

        $opportunitiesBenifits = Opportunities::select(DB::raw('sum(montant) as `montant`'), DB::raw("DATE_FORMAT(opportunities.created_at, '%m-%Y') new_date"),  DB::raw('YEAR(opportunities.created_at) year, MONTH(opportunities.created_at) month'))
        ->Join('clients', 'clients.id', '=' , 'opportunities.client_id')
        ->Join('users', 'users.id' ,'=' , 'clients.user_id')
        ->where('users.id', '=', $user_id)
        ->whereYear("opportunities.created_at", '2023')
        ->groupby('year','month')
        ->get();

       // return $opportunities;

        return Inertia::render('Home',[
            'user_pic'=>$user_pic,
            'user_nom'=>$user_nom,
            'user_prenom'=>$user_prenom,
            'user_role'=>$user_role,
            'user_id'=>$user_id,
            'totalContacts'=>$recent_contacts,
            'clients'=>$clients,
            'recent_prospects'=>$recent_prospects,
            'opportunities'=>$opportunities,
            'opportunitiesBenifits'=>$opportunitiesBenifits
        ]);
    }

    public function login()
    {
        return Inertia::render('Signin');
    }

    public function handleLogin(Request $req)
    {
        $req->validate([
            'email'=> 'required|email',
           'password'=> 'required'
        ]
        );
        if(Auth::guard('webadcom')->attempt($req->only(['email', 'password'])))
        {
            return redirect()->route('adcom.home');
        }
        return redirect()->back()->with('error', 'Invalid Credentials');
    }

    public function handleLogout(Request $req)
    {
        //return redirect()->route('adcom.login');
        Auth::guard('webadcom')->logout();
        //Auth::guard()->logout();
        return redirect()->route('adcom.login');
    }
}
