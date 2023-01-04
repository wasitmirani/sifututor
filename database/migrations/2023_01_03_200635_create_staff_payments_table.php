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
        Schema::create('staff_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('staff_id')->nullable()->constrained('staffs');
            $table->string('uid');
            $table->string('slug');
            $table->date('payment_date');
            $table->string('salary_month');
            $table->string('salary_year');
            $table->string('basic_salary_description')->nullable();
            $table->integer('basic_salary');
            $table->integer('bounus_amount')->default(0);
            $table->integer('overtime_amount_perhour')->default(0);
            $table->integer('overtime_hour')->default(0);
            $table->string('claim')->nullable();
            $table->integer('no_unpaid_leave')->default(0);
            $table->integer('deduction')->default(0);
            $table->json('has_services')->nullable();
            $table->string('paying_account')->nullable();
            $table->string('remark')->nullable();
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
        Schema::dropIfExists('staff_payments');
    }
};
