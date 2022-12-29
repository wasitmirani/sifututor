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
        Schema::create('student_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('reference_no');
            $table->date('invoice_date');
            $table->string('status')->default('unpaid');
            $table->string('management_status');
            $table->string('payer_name');
            $table->string('payer_email');
            $table->string('payer_phone');
            $table->longText('remarks')->nullable();
            $table->json('invoice_items')->nullable();
            $table->json('deductions_items')->nullable();

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
        Schema::dropIfExists('student_invoices');
    }
};
