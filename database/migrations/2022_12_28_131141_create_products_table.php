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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('uid')->nullable();
            $table->string('slug')->nullable();
            $table->string('code')->nullable();
            $table->string('brand');
            $table->string('category');
            $table->integer('cost');
            $table->integer('price');
            $table->longText('description')->nullable();
            $table->string('remarks')->nullable();
            $table->boolean('tuition_service')->default(false);
            $table->json('services')->nullable();
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
        Schema::dropIfExists('products');
    }
};
