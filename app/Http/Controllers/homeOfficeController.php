<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class homeOfficeController extends Controller
{
    public function index()
    {
    return Inertia::render('homeOffice');
    }
    public function index1()
    {
    return Inertia::render('Products');
    }
    public function index2()
    {
    return Inertia::render('PrivacyPolicy');
    }
    public function index3()
    {
    return Inertia::render('ContactUs');
    }
    public function index4()
    {
    return Inertia::render('ProductDetails');
    }
    public function index5()
    {
    return Inertia::render('CalendarContact');
    }
}
