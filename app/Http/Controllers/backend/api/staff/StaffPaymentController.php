<?php

namespace App\Http\Controllers\backend\api\staff;

use App\Models\StaffPayment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StaffPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        $request->validate([
            'payment_date'=>'required',
            'salary_month'=>'required',
            'salary_year'=>'required',
            'basic_salary_description'=>'required',
            'basic_salary'=>'required|integer',
            'bounus_amount'=>'required',
            'overtime_amount_perhour'=>'required',
            'overtime_hour'=>'required',
            'no_unpaid_leave'=>'integer',
            'deduction'=>'integer',
            'paying_account'=>'required',
            'remark'=>'required|min:10',

        ]);
        $staff_payment = StaffPayment::create([
                'payment_date'=>$request->payment_date,
                'salary_month'=>$request->salary_month,
                'salary_year'=>$request->salary_year,
                'basic_salary_description'=>$request->basic_salary_description,
                'basic_salary'=>$request->basic_salary,
                'bonus_amount'=>$request->bonus_amount,
                'overtime_amount_perhour'=>$request->overtime_amount_perhour,
                'overtime_hour'=>$request->overtime_hour,
                'no_unpaid_leave'=>$request->no_unpaid_leave,
                'deduction'=>$request->deduction,
                'paying_account'=>$request->paying_account,
                'remark'=>$request->remark,
        ]);

        return response()->json(['message' => 'staff payment has been created successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
