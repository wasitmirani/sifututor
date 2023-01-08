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
        Schema::create('journal_ledgers', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->string('slug');
            $table->string('description');
            $table->dateTime('transaction_date');
            $table->dateTime('supporting_document_date');
            $table->json('chart_of_accounts');
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
        Schema::dropIfExists('journal_ledgers');
    }
};
