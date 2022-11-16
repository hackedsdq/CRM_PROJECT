<?php

namespace App\Http\Controllers;

use App\Models\SiginCostumer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiginCostumerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('SigninCostumer');
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
     * @param  \App\Models\SiginCostumer  $siginCostumer
     * @return \Illuminate\Http\Response
     */
    public function show(SiginCostumer $siginCostumer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SiginCostumer  $siginCostumer
     * @return \Illuminate\Http\Response
     */
    public function edit(SiginCostumer $siginCostumer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SiginCostumer  $siginCostumer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SiginCostumer $siginCostumer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SiginCostumer  $siginCostumer
     * @return \Illuminate\Http\Response
     */
    public function destroy(SiginCostumer $siginCostumer)
    {
        //
    }
}
