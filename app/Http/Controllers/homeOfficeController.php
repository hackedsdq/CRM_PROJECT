<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Produit;

class homeOfficeController extends Controller
{
    public function index()
    {
    return Inertia::render('homeOffice');
    }

    public function index1()
    {
    $products = Produit::latest()->take(10)->get();
    //return $products;
    return Inertia::render('Products',[
        'products'=>$products,
    ]);
    }

    public function index2()
    {
    return Inertia::render('PrivacyPolicy');
    }

    public function index3()
    {
    return Inertia::render('ContactUs');
    }
    
    public function index4($id)
    {
    $product = Produit::findOrFail($id);
    return Inertia::render('ProductDetails',[
        'product'=>$product
    ]);
    }
    public function index5()
    {
    return Inertia::render('CalendarContact');
    }
}
