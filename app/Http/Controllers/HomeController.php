<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class HomeController extends Controller
{
    public function index(){
        return Inertia::render('Home',[
            'name'=> 'Hakim Abdallaoui'
        ]);
    }
    public function signin(){
        return Inertia::render('Signin');
    }
    public function signup(){
        return Inertia::render('Signup');
    }
<<<<<<< HEAD
   
    public function SigninCostumer(){
        return Inertia::render('SigninCostumer');
    }
    
    public function Profile(){
        return Inertia::render('Profile');
    }
    
=======
    public function prospects(){
        return Inertia::render('Prospects');
    }
    public function clients(){
        return Inertia::render('Clients');
    }
    public function opportunities(){
        return Inertia::render('Opportunities');
    }
    public function contacts(){
        return Inertia::render('Contacts');
    }
    public function users(){
        return Inertia::render('Utilisateur');
    }
    public function calendar(){
        return Inertia::render('Calendar');
    }
    
>>>>>>> d44b412accdd5d319bda7004b61196fe5c2821c0
}
