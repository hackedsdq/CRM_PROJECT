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
    public function test(){
        return Inertia::render('Contact');
    }
}
