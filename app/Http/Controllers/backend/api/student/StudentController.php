<?php

namespace App\Http\Controllers\backend\api\student;

use Exception;
use App\Models\Student;
use App\Models\Subject;
use App\Models\Customer;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $q=!empty(request('query')) ? request('query') : '';
        $students = Student::latest()->with('customer')
                               ->paginate(env('PAR_PAGE'));

        return response()->json(['status' => true, 'students' => $students]);
    }
    public function getStudentList(Request $request){
        $students = Student::latest()->get()->pluck('students')->all();
        $students= array_filter( $students);
        $students = collect($students)->collapse();
        return response()->json(['status' => true,'students' => $students]);
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

        $request->validate([
            'register_date'=>'required',
            'admin_charge'=>'required',
            'payment_attachment'=>'file|max:5048',
            'fee_payment_date'=>'required',
            'receiving_account'=>'required|integer',
            'hour_per_subject'=>'required|integer',
            'subscription_duration'=>'required',
            'customer.full_name'=>'required',
            'customer.email'=>'required',
            'customer.phone'=>'required',
            'customer.address'=>'required|array',
            'customer.age'=>'required|integer',
            'customer.dob'=>'required',
            'customer.gender'=>'required',
            'customer.nric' =>'required',
            'subjects'=>'array',
            'students' =>'array',
        ]);
        if ($request->hasfile('payment_attachment')) {
            $name=Str::random(20);
            // dd($name);
            $name = $name . "-" . time() . '.' . $request->payment_attachment->extension();
            $request->payment_attachment->move(public_path('/student/paymentattacments'), $name);
        }
        else
            $name = "";


        DB::beginTransaction();

try {


    $student = Student::create([
        'register_date'=>$request->register_date,
        'admin_charge'=>$request->admin_charge,
        'slug' => Str::slug($request->admin_charge,'-'),
        'uid'=>Str::uuid(),

        'payment_attachment'=>$name ,
        'fee_payment_date'=>$request->fee_payment_date,
        'receiving_account'=>$request->receiving_account,
        'hour_per_subject'=>$request->hour_per_subject,
        'subscription_duration'=>$request->subscription_duration,
        'subjects'=>$request->subjects,
        'students'=>$request->students,
    ]);
            $customer =(object) $request->customer;

   $new_custormer= Customer::create([
        'full_name'=>$customer->full_name,
        'slug' => Str::slug($customer->full_name,'-'),
        'uid'=>Str::uuid(),
        'email'=>$customer->email,
        'phone'=>$customer->phone,
        'address'=>$customer->address,
        'age'=>$customer->age,
        'student_id'=>$student->id,
        'dob'=>$customer->dob,
        'gender'=>$customer->gender,
    ]);

    DB::commit();
    if($new_custormer){
        return response()->json([
           'status' => true,
            'message' =>'student has been created successfully']);
    }
    // all good
} catch (Exception $e) {
    DB::rollback();

    return response()->json(['message' => $e->getMessage(),'status' => false]);
    // something went wrong
}
        //
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
        $student=Student::where('uid',$id)->with('customer')->first();
        return response()->json(['status' => true,'student'=>$student]);
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
        $student=Student::where('uid',$id)->with('customer')->first();
        return response()->json(['status' => true,'student'=>$student]);
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
        $request->validate([
            'register_date'=>'required',
            'admin_charge'=>'required',
            'payment_attachment'=>'file|max:5048',
            'fee_payment_date'=>'required',
            'receiving_account'=>'required|integer',
            'hour_per_subject'=>'required|integer',
            'subscription_duration'=>'required',
            'customer.full_name'=>'required',
            'customer.email'=>'required',
            'customer.phone'=>'required',
            'customer.address'=>'required|array',
            'customer.age'=>'required|integer',
            'customer.dob'=>'required',
            'customer.gender'=>'required',
            'customer.nric' =>'required',
            'subjects'=>'array',
        ]);
        $student = Student::where('id', $id)->first();
        if ($request->hasfile('payment_attachment')) {
            $name=Str::random(20);
            // dd($name);
            $name = $name . "-" . time() . '.' . $request->payment_attachment->extension();
            $request->payment_attachment->move(public_path('/student/paymentattacments'), $name);
        }
        else
        {
            $name =  $student->payment_attachment;

        }


        DB::beginTransaction();

try {

    $update_student = Student::where('id',$id)->update([
        'register_date'=>$request->register_date,
        'admin_charge'=>$request->admin_charge,
        'slug' => Str::slug($request->admin_charge,'-'),
        'uid'=>Str::uuid(),
        'payment_attachment'=>$name ,
        'fee_payment_date'=>$request->fee_payment_date,
        'receiving_account'=>$request->receiving_account,
        'hour_per_subject'=>$request->hour_per_subject,
        'subscription_duration'=>$request->subscription_duration,
        'subjects'=>$request->subjects,
    ]);
            $customer =(object) $request->customer;

            Customer::where('student_id',$id)->delete();
   $new_custormer= Customer::create([
        'full_name'=>$customer->full_name,
        'slug' => Str::slug($customer->full_name,'-'),
        'student_id'=>$student->id,
        'uid'=>Str::uuid(),
        'email'=>$customer->email,
        'phone'=>$customer->phone,
        'address'=>$customer->address,
        'age'=>$customer->age,
        'dob'=>$customer->dob,
        'gender'=>$customer->gender,
    ]);

    DB::commit();
    if($new_custormer){
        return response()->json(['status' => true,'message' =>'student has been update successfully']);
    }
    // all good
} catch (Exception $e) {
    DB::rollback();

    return response()->json(['message' => $e->getMessage(),'status' => false]);
    // something went wrong
}

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
        $student=Student::where('id',$id)->first();
        $new_custormer= Customer::where('student_id',$id)->delete();
        $student->delete();
        return response()->json(['status' => true,'message' =>'student destroy has been successfully']);
    }
}
