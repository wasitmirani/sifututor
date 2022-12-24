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
        Schema::create('job_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->string('slug')->nullable();
            $table->date('register_date');
            $table->string('admin_charge');
            $table->integer('estimate_commission')->default(0);
            $table->json('students')->nullable();
            $table->json('student_address')->nullable();
            $table->string('payment_attachment')->nullable();
            $table->date('fee_payment_date');
            $table->string('status')->default('open');
            $table->string('application_status')->default('incomplete');
            $table->string('receiving_account')->nullable();
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
        Schema::dropIfExists('job_tickets');
    }
};
