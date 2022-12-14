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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->string('slug')->nullable();
            $table->date('register_date');
            $table->string('admin_charge');
            $table->string('payment_attachment')->nullable();
            $table->date('fee_payment_date');
            $table->string('status')->default('active');
            $table->string('receiving_account')->nullable();
            $table->integer('hour_per_subject')->nullable();
            $table->string('subscription_duration')->nullable();
            $table->json('subjects')->nullable();
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
        Schema::dropIfExists('students');
    }
};
