<?php

use App\Models\Subject;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\api\job\TicketController;
use App\Http\Controllers\backend\api\layout\LayoutController;
use App\Http\Controllers\backend\api\student\StudentController;
use App\Http\Controllers\backend\api\subject\SubjectController;
use App\Http\Controllers\backend\api\customer\CustomerController;

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
Route::resource('student', StudentController::class);
Route::resource('customer', CustomerController::class);
Route::resource('job-ticket', TicketController::class);
Route::get('/student-list', [StudentController::class, 'getStudentList']);




});
