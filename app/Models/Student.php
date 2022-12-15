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
        'students'=>'array',
    ];
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'id', 'student_id');
    }
}
