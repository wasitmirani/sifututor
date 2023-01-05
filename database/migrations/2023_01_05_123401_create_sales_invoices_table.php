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
        Schema::create('sales_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->string('slug');
            $table->string('reference_no');
            $table->string('invoice_date');
            $table->string('payer_name');
            $table->string('payer_email');
            $table->string('payer_phone');
            $table->string('total_price');
            $table->json('invoice_items')->nullable();
            $table->json('invoice_deductions')->nullable();
            $table->string('remarks');
            $table->boolean('status');
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
        Schema::dropIfExists('sales_invoices');
    }
};
