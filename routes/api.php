<?php

use App\Models\Subject;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StateController;
use App\Http\Controllers\backend\api\role\RoleController;
use App\Http\Controllers\backend\api\user\UserController;
use App\Http\Controllers\backend\api\job\TicketController;
use App\Http\Controllers\backend\api\staff\StaffController;
use App\Http\Controllers\backend\api\tutor\TutorController;
use App\Http\Controllers\backend\api\layout\LayoutController;
use App\Http\Controllers\backend\api\product\ProductController;
use App\Http\Controllers\backend\api\role\PermissionController;
use App\Http\Controllers\backend\api\student\StudentController;
use App\Http\Controllers\backend\api\subject\SubjectController;
use App\Http\Controllers\backend\api\customer\CustomerController;
use App\Http\Controllers\backend\api\staff\StaffPaymentController;
use App\Http\Controllers\backend\api\student\StudentInvoiceController;
use App\Http\Controllers\backend\api\chartaccount\ChartAccountController;
use App\Http\Controllers\backend\api\creditorinvoice\CreditorInvoiceController;
use App\Http\Controllers\backend\api\expenditure\ExpenditureController;
use App\Http\Controllers\backend\api\journalledger\JournalLedgerController;
use App\Http\Controllers\backend\api\salesinvoice\SalesInvoiceController;
use App\Http\Controllers\backend\api\tutorReport\TutorReportController;
use App\Models\CreditorInvoice;
use App\Models\Expenditure;
use App\Models\JournalLedger;
use App\Models\SalesInvoice;
use App\Models\TutorReport;

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
//CASH FLOW SECTION

Route::resource('journal-ledger', JournalLedgerController::class);
Route::resource('expenditure', ExpenditureController::class);
Route::resource('sales-invoice', SalesInvoiceController::class);
Route::get('/sales-invoice-payments',[SalesInvoiceController::class,'salesInvoicePayments']);
Route::resource('creditor-invoice', CreditorInvoiceController::class);
Route::get('/creditor-invoice-payments',[CreditorInvoiceController::class,'creditorInvoicePayments']);
//END CASH FLOW

//TUTOR REPORTS
Route::resource('tutor-report', TutorReportController::class);
Route::get('/tutor-report-v2',[TutorReportController::class,'getTutorReportV2']);
//END TUTOR REPORTS
Route::resource('subject', SubjectController::class);
Route::get('/subject-list',[SubjectController::class,'getSubjectList']);
Route::resource('student', StudentController::class);
Route::resource('customer', CustomerController::class);
Route::resource('job-ticket', TicketController::class);
Route::get('/student-list', [StudentController::class, 'getStudentList']);
Route::get('/customer-list', [CustomerController::class, 'getCustomerList']);
Route::resource('user', UserController::class);
Route::post('/update-auth-user', [UserController::class, 'updateAuthUser']);
Route::resource('client', ClientController::class);
Route::resource('role', RoleController::class);
Route::resource('permission', PermissionController::class);
Route::get('roles', [RoleController::class, 'getRoles']);
Route::resource('product', ProductController::class);
Route::resource('student-invoice', StudentInvoiceController::class);
Route::resource('staff', StaffController::class);
Route::get('/staffs', [StaffController::class,'getStaffs']);
Route::get('/states', [StateController::class, 'getStates']);
Route::get('/cities/{state_id}', [StateController::class, 'getCityByState']);
Route::resource('tutor', TutorController::class);
Route::resource('staff-payment', StaffPaymentController::class);
Route::resource('chart-account', ChartAccountController::class);
Route::resource('sale-invoice', SalesInvoiceController::class);


});


Route::post('/import-state',[StateController::class, 'importState']);
