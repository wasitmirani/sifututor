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
        Schema::create('creditor_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->string('slug');
            $table->dateTime('occurance_date');
            $table->string('creditor_name');
            $table->string('description');
            $table->string('category');
            $table->string('quantity');
            $table->string('cost_price');
            $table->dateTime('payment_due_date');
            $table->string('attachment')->nullable();
            $table->longText('remarks');
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
        Schema::dropIfExists('creditor_invoices');
    }
};
