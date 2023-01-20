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
Route::get('/login', [\App\Http\Controllers\ContactsAuthController::class, 'login'])->name('contacts.login');
Route::post('login/', [\App\Http\Controllers\ContactsAuthController::class, 'handleLogin'])->name('contacts.handleLogin');
Route::get('/logout', [\App\Http\Controllers\ContactsAuthController::class, 'handlelogout'])->name('contacts.logout');

Route::get('opportunities/',[\App\Http\Controllers\OpportunitiesContactController::class, 'index'])->name('contacts.opportunities')->middleware('auth:web');;
Route::get('calendar/',[\App\Http\Controllers\CalendarContactController::class, 'index'])->name('contacts.calendar')->middleware('auth:web');;
Route::get('Profile/',[\App\Http\Controllers\ContactsAuthController::class, 'index'])->name('contacts.profile')->middleware('auth:web');
// end of contacts route





// admins and commercials routes
Route::get('adcom/', [\App\Http\Controllers\AdminCommercialAuthController::class, 'index'])->name('adcom.home')->middleware('auth:webadcom');
Route::get('adcom/login', [\App\Http\Controllers\AdminCommercialAuthController::class, 'login'])->name('adcom.login');
Route::post('adcom/login', [\App\Http\Controllers\AdminCommercialAuthController::class, 'handleLogin'])->name('adcom.handleLogin');
Route::post('adcom/logout', [\App\Http\Controllers\AdminCommercialAuthController::class, 'handleLogout'])->name('adcom.logout');


Route::get('adcom/prospects',[\App\Http\Controllers\ProspectController::class, 'index'])->name('adcom.prospects')->middleware('auth:webadcom');;
Route::get('adcom/clients',[\App\Http\Controllers\ClientController::class, 'index'])->name('adcom.clients')->middleware('auth:webadcom');;
Route::get('adcom/opportunities',[\App\Http\Controllers\OpportunitiesController::class, 'index'])->name('adcom.opportunities')->middleware('auth:webadcom');;
Route::get('adcom/contacts',[\App\Http\Controllers\ContactController::class, 'index'])->name('adcom.contacts')->middleware('auth:webadcom');;
Route::get('adcom/users',[\App\Http\Controllers\UserController::class, 'index'])->name('adcom.users')->middleware('auth:webadcom');;
Route::get('adcom/calendar',[\App\Http\Controllers\CalendarController::class, 'index'])->name('adcom.calendar')->middleware('auth:webadcom');;
Route::get('adcom/produits',[\App\Http\Controllers\ProduitController::class, 'index'])->name('adcom.produits')->middleware('auth:webadcom');;
// end of admins and commercials routes


// auth middlewares
// Route::get('/', [\App\Http\Controllers\ContactsAuthController::class, 'index'])->name('home.profile')->middleware('auth:web');

//log
// Route::get('/logout', [\App\Http\Controllers\ContactsAuthController::class, 'handlelogout'])->name('contacts.logout');

// add prospect
Route::post('/adcom/prospects',[\App\Http\Controllers\ProspectController::class, 'create'])->middleware('auth:webadcom');
// convert prospect
Route::post('/adcom/prospects/{id}',[\App\Http\Controllers\ProspectController::class, 'conversion'])->middleware('auth:webadcom');
//delete prospect
Route::delete('/adcom/prospects/{id}',[\App\Http\Controllers\ProspectController::class, 'delete'])->middleware('auth:webadcom');

// get edit prospect page
Route::get('/adcom/prospects/edit/{id}',[\App\Http\Controllers\ProspectController::class, 'editIndex'])->middleware('auth:webadcom');
// get prospect with master details
Route::get('/adcom/prospects/show/{id}',[\App\Http\Controllers\ProspectController::class, 'showIndex'])->middleware('auth:webadcom');
// update prospect data  
Route::post('/adcom/prospects/update/{id}',[\App\Http\Controllers\ProspectController::class, 'update'])->middleware('auth:webadcom');
// post 
Route::post('/adcom/prospects/update/{id}',[\App\Http\Controllers\ProspectController::class, 'update'])->middleware('auth:webadcom');
 
 
// get edit clients page
Route::get('/adcom/clients/edit/{id}',[\App\Http\Controllers\ClientController::class, 'editIndex'])->middleware('auth:webadcom');
// get clients with master details
Route::get('/adcom/clients/show/{id}',[\App\Http\Controllers\ClientController::class, 'showIndex'])->middleware('auth:webadcom');
// update clients data  
Route::post('/adcom/clients/update/{id}',[\App\Http\Controllers\ClientController::class, 'update'])->middleware('auth:webadcom');
// update clients data
Route::post('/adcom/clients/update/{id}',[\App\Http\Controllers\ClientController::class, 'update'])->middleware('auth:webadcom');
// delete clients
Route::delete('/adcom/clients/{id}',[\App\Http\Controllers\ClientController::class, 'delete'])->middleware('auth:webadcom');



//delete contact
Route::delete('/adcom/contacts/{id}',[\App\Http\Controllers\ContactController::class, 'delete'])->middleware('auth:webadcom');
// get edit contact page
Route::get('/adcom/contacts/edit/{id}',[\App\Http\Controllers\ContactController::class, 'editIndex'])->middleware('auth:webadcom');
// get contact with master details
Route::get('/adcom/contacts/show/{id}',[\App\Http\Controllers\ContactController::class, 'showIndex'])->middleware('auth:webadcom');
// update contact data  
Route::post('/adcom/contacts/update/{id}',[\App\Http\Controllers\ContactController::class, 'update'])->middleware('auth:webadcom');
//delete contact
Route::delete('/adcom/contacts/{id}',[\App\Http\Controllers\ContactController::class, 'delete'])->middleware('auth:webadcom');



// add produit
Route::post('/adcom/produits',[\App\Http\Controllers\ProduitController::class, 'create'])->middleware('auth:webadcom');
//delete produits
Route::delete('/adcom/produits/{id}',[\App\Http\Controllers\ProduitController::class, 'delete'])->middleware('auth:webadcom');
// get edit produits page
Route::get('/adcom/produits/edit/{id}',[\App\Http\Controllers\ProduitController::class, 'editIndex'])->middleware('auth:webadcom');
// get produits with master details
Route::get('/adcom/produits/show/{id}',[\App\Http\Controllers\ProduitController::class, 'showIndex'])->middleware('auth:webadcom');
// post 
Route::post('/adcom/produits/update/{id}',[\App\Http\Controllers\ProduitController::class, 'update'])->middleware('auth:webadcom');


//add user 
Route::post('/adcom/users', [\App\Http\Controllers\UserController::class, 'create'])->middleware('auth:webadcom');
// get edit users page
Route::get('/adcom/users/edit/{id}',[\App\Http\Controllers\UserController::class, 'editIndex'])->middleware('auth:webadcom');
// get show users page
Route::get('/adcom/users/show/{id}',[\App\Http\Controllers\UserController::class, 'showIndex'])->middleware('auth:webadcom');
// update user
Route::post('/adcom/users/update/{id}',[\App\Http\Controllers\UserController::class, 'update'])->middleware('auth:webadcom');
Route::delete('/adcom/users/{id}',[\App\Http\Controllers\UserController::class, 'delete'])->middleware('auth:webadcom');


// opportunities
Route::post('/adcom/opportunities',[\App\Http\Controllers\OpportunitiesController::class, 'searchClients'])->middleware('auth:webadcom');
Route::post('/adcom/opportunities/add',[\App\Http\Controllers\OpportunitiesController::class, 'create'])->middleware('auth:webadcom');
// get edit opportunities page
Route::get('/adcom/opportunities/edit/{id}',[\App\Http\Controllers\OpportunitiesController::class, 'editIndex'])->name('opportunity.edit')->middleware('auth:webadcom');
// get opportunities with master details
Route::get('/adcom/opportunities/show/{id}',[\App\Http\Controllers\OpportunitiesController::class, 'showIndex'])->middleware('auth:webadcom');

// search for products
Route::post('/adcom/opportunities/edit/{opp}',[\App\Http\Controllers\OpportunitiesController::class, 'searchProduits'])->middleware('auth:webadcom');

// assign product to an opportunity
Route::post('/adcom/opprtunities/edit/{opp}',[\App\Http\Controllers\OpportunitiesController::class, 'addProduit'])->middleware('auth:webadcom');
Route::post('/adcom/oportunities/edit/{product}',[\App\Http\Controllers\OpportunitiesController::class, 'deleteProduit'])->middleware('auth:webadcom');

// edit an opportunity infos 
Route::post('/adcom/opportunity/edit',[\App\Http\Controllers\OpportunitiesController::class, 'update'])->middleware('auth:webadcom');
// delete an opportunity  
Route::delete('/adcom/opprtunities/edit/{opp}',[\App\Http\Controllers\OpportunitiesController::class, 'delete'])->middleware('auth:webadcom');


Route::post('adcom/calendar/create',[\App\Http\Controllers\CalendarController::class, 'create'])->middleware('auth:webadcom');
Route::post('adcom/calendar/add',[\App\Http\Controllers\CalendarController::class, 'add'])->middleware('auth:webadcom');
Route::post('adcom/calendar/edit',[\App\Http\Controllers\CalendarController::class, 'edit'])->middleware('auth:webadcom');
Route::post('adcom/calendar',[\App\Http\Controllers\CalendarController::class, 'searchContacts'])->middleware('auth:webadcom');
Route::delete('adcom/calendar/{id}',[\App\Http\Controllers\CalendarController::class, 'delete'])->middleware('auth:webadcom');
//Front Office Routes
Route::get('/',[\App\Http\Controllers\homeOfficeController::class, 'index'])->name('home.contact');
Route::get('Products/',[\App\Http\Controllers\homeOfficeController::class, 'index1']);
Route::get('PrivacyPolicy/',[\App\Http\Controllers\homeOfficeController::class, 'index2']);
Route::get('ContactUs/',[\App\Http\Controllers\homeOfficeController::class, 'index3']);
Route::get('ProductDetails/{id}',[\App\Http\Controllers\homeOfficeController::class, 'index4']);
//profil
// Route::get('/home/profil',[\App\Http\Controllers\ProfilController::class, 'editIndex']); -->
Route::post('/Profile/{id}',[\App\Http\Controllers\ProfilController::class, 'update'])->middleware('auth:web');
Route::get('/Profile/show/{id}',[\App\Http\Controllers\ProfilController::class, 'showOpportun'])->middleware('auth:web');
