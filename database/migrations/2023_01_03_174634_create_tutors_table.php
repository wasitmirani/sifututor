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
        Schema::create('tutors', function (Blueprint $table) {
            $table->id();
            $table->string('uid')->nullable();
            $table->string('slug')->nullable();
            $table->string('tutor_id')->nullable();
            $table->date('start_date');
            $table->string('full_name');
            $table->string('nick_name')->nullable();
            $table->string('gender')->default('male');
            $table->integer('age')->default(0);
            $table->date('dob');
            $table->string('nric')->nullable();
            $table->string('marital_status')->nullable();
            $table->date('training_date');
            $table->integer('shirt_size')->default(0);
            $table->string('bank_name');
            $table->json('address')->nullable();
            $table->string('remark')->nullable();
            $table->string('payment_attachment')->nullable();
            $table->date('fee_payment_date')->nullable();
            $table->string('receiving_account')->nullable();
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
        Schema::dropIfExists('tutors');
    }
};
