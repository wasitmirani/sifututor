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
        Schema::create('student_lists', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->nullable();
            $table->string('uid')->nullable();
            $table->string('student_id')->nullable();
            $table->morphs('studentable');
            $table->string('fullname');
            $table->date('dob');
            $table->string('gender')->default('male');
            $table->string('nric')->nullable();
            $table->integer('age')->default(0);
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
        Schema::dropIfExists('student_lists');
    }
};
