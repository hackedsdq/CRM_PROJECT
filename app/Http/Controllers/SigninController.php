<?php

namespace App\Http\Controllers;

use App\Models\Signin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SigninController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Signin');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Models\Signin  $signin
     * @return \Illuminate\Http\Response
     */
    public function show(Signin $signin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Signin  $signin
     * @return \Illuminate\Http\Response
     */
    public function edit(Signin $signin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Signin  $signin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Signin $signin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Signin  $signin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Signin $signin)
    {
        //
    }
}
