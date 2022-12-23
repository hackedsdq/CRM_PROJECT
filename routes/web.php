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



// guest routes
Route::get('/signin',[\App\Http\Controllers\SigninController::class, 'index'])->name('guest.signin');
Route::get('/SigninCostumer',[\App\Http\Controllers\SiginCostumerController::class, 'index'])->name('guest.signincostumer');
// end of guest routes

// contact routes
Route::get('login/', [\App\Http\Controllers\ContactsAuthController::class, 'login'])->name('contacts.login');
Route::post('login/', [\App\Http\Controllers\ContactsAuthController::class, 'handleLogin'])->name('contacts.handleLogin');
Route::get('logout/', [\App\Http\Controllers\ContactsAuthController::class, 'index'])->name('contacts.logout');

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
Route::get('adcom/users',[\App\Http\Controllers\HomeController::class, 'users'])->name('adcom.users');
Route::get('adcom/calendar',[\App\Http\Controllers\CalendarController::class, 'index'])->name('adcom.calendar');
Route::get('adcom/produits',[\App\Http\Controllers\ProduitController::class, 'index'])->name('adcom.produits');
// end of admins and commercials routes


// auth middlewares
Route::get('adcom/', [\App\Http\Controllers\AdminCommercialAuthController::class, 'index'])->name('adcom.home')->middleware('auth:webadcom');
Route::get('/', [\App\Http\Controllers\ContactsAuthController::class, 'index'])->middleware('auth:web');



// add prospect
Route::post('/adcom/prospects',[\App\Http\Controllers\ProspectController::class, 'create']);
Route::post('/adcom/prospects/{id}',[\App\Http\Controllers\ProspectController::class, 'conversion']);

//delete prospect
Route::delete('/adcom/prospects/{id}',[\App\Http\Controllers\ProspectController::class, 'delete']);

// get edit prospect page
Route::get('/adcom/prospects/edit/{id}',[\App\Http\Controllers\ProspectController::class, 'editIndex']);
// get prospect with master details
Route::get('/adcom/prospects/show/{id}',[\App\Http\Controllers\ProspectController::class, 'showIndex']);
// post 
Route::post('/adcom/prospects/update/{id}',[\App\Http\Controllers\ProspectController::class, 'update']);

//delete contact
Route::delete('/adcom/contacts/{id}',[\App\Http\Controllers\ContactController::class, 'delete']);
// get edit contact page
Route::get('/adcom/contacts/edit/{id}',[\App\Http\Controllers\ContactController::class, 'editIndex']);
// get contact with master details
Route::get('/adcom/contacts/show/{id}',[\App\Http\Controllers\ContactController::class, 'showIndex']);
Route::post('/adcom/contacts/update/{id}',[\App\Http\Controllers\ContactController::class,'update']);
/*//add produits
Route::post('/adcom/produits',[\App\Http\Controllers\ProduitController::class, 'create']);
Route::delete('/adcom/produits/{id}',[\App\Http\Controllers\ProduitController::class, 'delete']);
Route::post('/adcom/produits/{id}',[\App\Http\Controllers\ProduitController::class, 'update']);
*/

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

Route::get('/adcom/clients/edit/{id}',[\App\Http\Controllers\ClientController::class, 'editIndex']);
// get clients with master details
Route::get('/adcom/clients/show/{id}',[\App\Http\Controllers\ClientController::class, 'showIndex']);
// update clients data  
Route::post('/adcom/clients/update/{id}',[\App\Http\Controllers\ClientController::class, 'update']);

Route::delete('/adcom/calendar/{id}',[\App\Http\Controllers\CalendarController::class, 'delete']);
Route::post('/adcom/calendar/store',[\App\Http\Controllers\CalendarController::class, 'store']);

Route::post('calendar/create',[\App\Http\Controllers\CalendarController::class, 'create']);
Route::post('calendar/add',[\App\Http\Controllers\CalendarController::class, 'add']);
Route::post('calendar/edit',[\App\Http\Controllers\CalendarController::class, 'edit']);
Route::post('calendar',[\App\Http\Controllers\CalendarController::class, 'searchContacts']);
//Route::delete('calendar',[\App\Http\Controllers\CalendarController::class, 'destroy']);
Route::get('homeOffice/',[\App\Http\Controllers\homeOfficeController::class, 'index']);
Route::get('Products/',[\App\Http\Controllers\homeOfficeController::class, 'index1']);
Route::get('PrivacyPolicy/',[\App\Http\Controllers\homeOfficeController::class, 'index2']);
Route::get('ContactUs/',[\App\Http\Controllers\homeOfficeController::class, 'index3']);
Route::get('ProductDetails/',[\App\Http\Controllers\homeOfficeController::class, 'index4']);