<?php

use App\Http\Controllers\ProduitController;
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



// guest routes
Route::get('/signin',[\App\Http\Controllers\SigninController::class, 'index'])->name('guest.signin');
Route::get('/SigninCostumer',[\App\Http\Controllers\SiginCostumerController::class, 'index'])->name('guest.signincostumer');
// end of guest routes

// contact routes
Route::get('login/', [\App\Http\Controllers\ContactsAuthController::class, 'login'])->name('contacts.login');
Route::post('login/', [\App\Http\Controllers\ContactsAuthController::class, 'handleLogin'])->name('contacts.handleLogin');
Route::get('/logout', [\App\Http\Controllers\ContactsAuthController::class, 'handlelogout'])->name('contacts.logout');

Route::get('opportunities/',[\App\Http\Controllers\OpportunitiesController::class, 'index'])->name('contacts.opportunities');
Route::get('calendar/',[\App\Http\Controllers\CalendarController::class, 'index'])->name('contacts.calendar');
Route::get('Profile/',[\App\Http\Controllers\ContactsAuthController::class, 'index'])->name('contacts.profile');
// end of contacts route





// admins and commercials routes
Route::get('adcom/', [\App\Http\Controllers\AdminCommercialAuthController::class, 'index'])->name('adcom.home');
Route::get('adcom/login', [\App\Http\Controllers\AdminCommercialAuthController::class, 'login'])->name('adcom.login');
Route::post('adcom/login', [\App\Http\Controllers\AdminCommercialAuthController::class, 'handleLogin'])->name('adcom.handleLogin');
Route::get('adcom/logout', [\App\Http\Controllers\AdminCommercialAuthController::class, 'index'])->name('adcom.logout');


Route::get('adcom/prospects',[\App\Http\Controllers\ProspectController::class, 'index'])->name('adcom.prospects');
Route::get('adcom/clients',[\App\Http\Controllers\ClientController::class, 'index'])->name('adcom.clients');
Route::get('adcom/opportunities',[\App\Http\Controllers\OpportunitiesController::class, 'index'])->name('adcom.opportunities');
Route::get('adcom/contacts',[\App\Http\Controllers\ContactController::class, 'index'])->name('adcom.contacts');
Route::get('adcom/users',[\App\Http\Controllers\UserController::class, 'index'])->name('adcom.users');
Route::get('adcom/calendar',[\App\Http\Controllers\CalendarController::class, 'index'])->name('adcom.calendar');
Route::get('adcom/produits',[\App\Http\Controllers\ProduitController::class, 'index'])->name('adcom.produits');
// end of admins and commercials routes


// auth middlewares
Route::get('adcom/', [\App\Http\Controllers\AdminCommercialAuthController::class, 'index'])->name('adcom.home')->middleware('auth:webadcom');
// Route::get('/', [\App\Http\Controllers\ContactsAuthController::class, 'index'])->name('home.profile')->middleware('auth:web');

//log
// Route::get('/logout', [\App\Http\Controllers\ContactsAuthController::class, 'handlelogout'])->name('contacts.logout');

// add prospect
Route::post('/adcom/prospects',[\App\Http\Controllers\ProspectController::class, 'create']);
// convert prospect
Route::post('/adcom/prospects/{id}',[\App\Http\Controllers\ProspectController::class, 'conversion']);
//delete prospect
Route::delete('/adcom/prospects/{id}',[\App\Http\Controllers\ProspectController::class, 'delete']);

// get edit prospect page
Route::get('/adcom/prospects/edit/{id}',[\App\Http\Controllers\ProspectController::class, 'editIndex']);
// get prospect with master details
Route::get('/adcom/prospects/show/{id}',[\App\Http\Controllers\ProspectController::class, 'showIndex']);
// update prospect data  
Route::post('/adcom/prospects/update/{id}',[\App\Http\Controllers\ProspectController::class, 'update']);
// post 
Route::post('/adcom/prospects/update/{id}',[\App\Http\Controllers\ProspectController::class, 'update']);
 
 
// get edit clients page
Route::get('/adcom/clients/edit/{id}',[\App\Http\Controllers\ClientController::class, 'editIndex']);
// get clients with master details
Route::get('/adcom/clients/show/{id}',[\App\Http\Controllers\ClientController::class, 'showIndex']);
// update clients data  
Route::post('/adcom/clients/update/{id}',[\App\Http\Controllers\ClientController::class, 'update']);
// update clients data
Route::post('/adcom/clients/update/{id}',[\App\Http\Controllers\ClientController::class, 'update']);
// delete clients
Route::delete('/adcom/clients/{id}',[\App\Http\Controllers\ClientController::class, 'delete']);



//delete contact
Route::delete('/adcom/contacts/{id}',[\App\Http\Controllers\ContactController::class, 'delete']);
// get edit contact page
Route::get('/adcom/contacts/edit/{id}',[\App\Http\Controllers\ContactController::class, 'editIndex']);
// get contact with master details
Route::get('/adcom/contacts/show/{id}',[\App\Http\Controllers\ContactController::class, 'showIndex']);
// update contact data  
Route::post('/adcom/contacts/update/{id}',[\App\Http\Controllers\ContactController::class, 'update']);
//delete contact
Route::delete('/adcom/contacts/{id}',[\App\Http\Controllers\ContactController::class, 'delete']);



// add produit
Route::post('/adcom/produits',[\App\Http\Controllers\ProduitController::class, 'create']);
//delete produits
Route::delete('/adcom/produits/{id}',[\App\Http\Controllers\ProduitController::class, 'delete']);
// get edit produits page
Route::get('/adcom/produits/edit/{id}',[\App\Http\Controllers\ProduitController::class, 'editIndex']);
// get produits with master details
Route::get('/adcom/produits/show/{id}',[\App\Http\Controllers\ProduitController::class, 'showIndex']);
// post 
Route::post('/adcom/produits/update/{id}',[\App\Http\Controllers\ProduitController::class, 'update']);


//add user 
Route::post('/adcom/users', [\App\Http\Controllers\UserController::class, 'create']);
// get edit users page
Route::get('/adcom/users/edit/{id}',[\App\Http\Controllers\UserController::class, 'editIndex']);
// get show users page
Route::get('/adcom/users/show/{id}',[\App\Http\Controllers\UserController::class, 'showIndex']);
// update user
Route::post('/adcom/users/update/{id}',[\App\Http\Controllers\UserController::class, 'update']);
Route::delete('/adcom/users/{id}',[\App\Http\Controllers\UserController::class, 'delete']);


// opportunities
Route::post('/adcom/opportunities',[\App\Http\Controllers\OpportunitiesController::class, 'searchClients']);
Route::post('/adcom/opportunities/add',[\App\Http\Controllers\OpportunitiesController::class, 'create']);
// get edit opportunities page
Route::get('/adcom/opportunities/edit/{id}',[\App\Http\Controllers\OpportunitiesController::class, 'editIndex'])->name('opportunity.edit');
// get opportunities with master details
Route::get('/adcom/opportunities/show/{id}',[\App\Http\Controllers\OpportunitiesController::class, 'showIndex']);

// search for products
Route::post('/adcom/opportunities/edit/{opp}',[\App\Http\Controllers\OpportunitiesController::class, 'searchProduits']);

// assign product to an opportunity
Route::post('/adcom/opprtunities/edit/{opp}',[\App\Http\Controllers\OpportunitiesController::class, 'addProduit']);

// edit an opportunity infos 
Route::post('/adcom/opportunity/edit',[\App\Http\Controllers\OpportunitiesController::class, 'update']);
//profil
// Route::get('/home/profil',[\App\Http\Controllers\ProfilController::class, 'editIndex']); -->
Route::post('/Profile/{id}',[\App\Http\Controllers\ProfilController::class, 'update']);
Route::get('/Profile/show/{id}',[\App\Http\Controllers\ProfilController::class, 'showOpportun']);