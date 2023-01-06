<?php

namespace App\Models;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $dates = ['created_at', 'updated_at'];
    protected $casts = [
        'subjects' => 'array',
    ];

    public function students()
    {
        return $this->morphMany('App\Models\StudentList', 'studentable');
        // return $this->belongsTo(Customer::class, 'id', 'student_id');
    }

    public function customer()
    {
        return $this->morphOne('App\Models\Customer', 'customerable');
        // return $this->belongsTo(Customer::class, 'id', 'student_id');
    }
}
