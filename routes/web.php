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
Route::get('/signin',[\App\Http\Controllers\SigninController::class, 'index']);
Route::get('/signup',[\App\Http\Controllers\HomeController::class, 'signup']);
Route::get('/prospects',[\App\Http\Controllers\ProspectController::class, 'index']);
Route::get('/clients',[\App\Http\Controllers\ClientController::class, 'index']);
Route::get('/opportunities',[\App\Http\Controllers\OpportunitiesController::class, 'index']);
Route::get('/contacts',[\App\Http\Controllers\ContactController::class, 'index']);
Route::get('/users',[\App\Http\Controllers\HomeController::class, 'users']);
Route::get('/calendar',[\App\Http\Controllers\CalendarController::class, 'index']);
Route::get('/SigninCostumer',[\App\Http\Controllers\SiginCostumerController::class, 'index']);
Route::get('/Profile',[\App\Http\Controllers\HomeController::class, 'Profile']);
Route::get('/Produits',[\App\Http\Controllers\ProduitController::class, 'index']);
