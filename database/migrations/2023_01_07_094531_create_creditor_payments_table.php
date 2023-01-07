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
        Schema::create('creditor_payments', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->string('slug');
            $table->string('creditor_name');
            $table->string('payment_amount');
            $table->string('payment_date');
            $table->string('paying_account');
            $table->string('attachment')->nullable();
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
        Schema::dropIfExists('creditor_payments');
    }
};
