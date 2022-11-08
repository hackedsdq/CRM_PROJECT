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
   
    public function SigninCostumer(){
        return Inertia::render('SigninCostumer');
    }
    
    public function Profile(){
        return Inertia::render('Profile');
    }
    
}
