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
        Schema::create('expenditures', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->string('slug');
            $table->dateTime('occurance_date');
            $table->string('category');
            $table->string('description');
            $table->string('chart_of_account');
            $table->string('quantity');
            $table->string('cost_per_unit');
            $table->string('paying_account');
            $table->dateTime('payment_date');
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
        Schema::dropIfExists('expenditures');
    }
};
