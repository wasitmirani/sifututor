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
        Schema::create('tutor_reports', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->string('slug');
            $table->foreignId('tutor_id')->nullable()->constrained('tutors');
            $table->string('report_type');
            $table->foreignId('student_id')->nullable()->constrained('students');
            $table->dateTime('first_class_date');
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
        Schema::dropIfExists('tutor_reports');
    }
};
