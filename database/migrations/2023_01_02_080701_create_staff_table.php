<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staffs', function (Blueprint $table) {
            $table->id();
            $table->string('uid')->nullable();
            $table->string('slug')->nullable();
            $table->date('start_date');
            $table->string('designation');
            $table->integer('basic_salary')->default(0);
            $table->string('type')->nullable();
            $table->string('full_name');
            $table->string('nick_name')->nullable();
            $table->string('gender')->default('male');
            $table->integer('age')->default(0);
            $table->date('dob');
            $table->string('nric')->nullable();
            $table->string('marital_status')->nullable();
            $table->integer('no_children')->default(0);
            $table->boolean('spouse_working')->default(0);
            $table->string('email')->unique();
            $table->string('phone')->unique();
            $table->json('address')->nullable();
            $table->string('remark')->nullable();
            $table->string('epf_no')->nullable();
            $table->string('tax_no')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staff');
    }
};
