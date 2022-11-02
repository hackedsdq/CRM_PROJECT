<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

Route::get('/',[\App\Http\Controllers\HomeController::class, 'index']);
Route::get('/signin',[\App\Http\Controllers\HomeController::class, 'signin']);
Route::get('/signup',[\App\Http\Controllers\HomeController::class, 'signup']);
Route::get('/prospects',[\App\Http\Controllers\HomeController::class, 'prospects']);
Route::get('/clients',[\App\Http\Controllers\HomeController::class, 'clients']);
