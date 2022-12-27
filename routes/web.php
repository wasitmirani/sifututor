<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\BackendController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/', function () {
    return redirect()->route('login');
});
require __DIR__.'/auth.php';

//
Route::get('/logout',[AuthenticatedSessionController::class,'destroy']);
Route::get('/unauthorized/user',function(){
    return abort(401,'Unauthorized User');
});
Route::get('/{any?}',[BackendController::class,'index'])
    //    ->middleware('auth')
       ->name('dashboard')
       ->where('any', '[\/\w\.-]*');



