<?php

use App\Http\Controllers\backend\api\subject\SubjectController;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\api\layout\LayoutController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('backend')->group(function () {

Route::prefix('config')->group(function () {
    Route::get('/sidebar-menu',[LayoutController::class,'getSideBarMenu']);

});

Route::resource('subject', SubjectController::class);
Route::get('/subject-list',[SubjectController::class,'getSubjectList']);






});
