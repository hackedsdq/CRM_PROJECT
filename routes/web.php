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
Route::get('/clients',[\App\Http\Controllers\ClientController::class, 'index']);
Route::get('/opportunities',[\App\Http\Controllers\OpputunitiesController::class, 'index']);
Route::get('/contacts',[\App\Http\Controllers\ContactController::class, 'index']);
Route::get('/users',[\App\Http\Controllers\HomeController::class, 'users']);
<<<<<<< HEAD
Route::get('/SigninCostumer',[\App\Http\Controllers\HomeController::class, 'SigninCostumer']);
Route::get('/Profile',[\App\Http\Controllers\HomeController::class, 'Profile']);
Route::get('/Produits',[\App\Http\Controllers\ProduitController::class, 'index']);
Route::get('/calendar',[\App\Http\Controllers\HomeController::class, 'calendar']);

=======
Route::get('/calendar',[\App\Http\Controllers\HomeController::class, 'calendar']);
Route::get('/SigninCostumer',[\App\Http\Controllers\HomeController::class, 'SigninCostumer']);
Route::get('/Profile',[\App\Http\Controllers\HomeController::class, 'Profile']);
Route::get('/Produits',[\App\Http\Controllers\ProduitController::class, 'index']);
Route::get('/Utilisateur',[\App\Http\Controllers\UtilisateurController::class, 'index']);
>>>>>>> 7eb4c45225b1a2ee002bbce51c1f88b773263b8b
