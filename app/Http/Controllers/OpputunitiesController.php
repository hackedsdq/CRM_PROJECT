<?php

namespace App\Http\Controllers;

use App\Models\Opputunities;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OpputunitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Opportunities');
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
     * @param  \App\Models\Opputunities  $opputunities
     * @return \Illuminate\Http\Response
     */
    public function show(Opputunities $opputunities)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Opputunities  $opputunities
     * @return \Illuminate\Http\Response
     */
    public function edit(Opputunities $opputunities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Opputunities  $opputunities
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Opputunities $opputunities)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Opputunities  $opputunities
     * @return \Illuminate\Http\Response
     */
    public function destroy(Opputunities $opputunities)
    {
        //
    }
}
