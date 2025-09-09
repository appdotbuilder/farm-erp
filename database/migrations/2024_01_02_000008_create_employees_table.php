<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_unit_id')->constrained()->onDelete('cascade');
            $table->string('employee_id')->unique()->comment('Employee ID number');
            $table->string('name')->comment('Employee full name');
            $table->string('position')->comment('Job position');
            $table->string('department')->nullable()->comment('Department name');
            $table->string('email')->nullable()->comment('Employee email');
            $table->string('phone')->nullable()->comment('Employee phone');
            $table->date('hire_date')->comment('Date of hire');
            $table->decimal('base_salary', 12, 2)->comment('Base salary amount');
            $table->boolean('is_active')->default(true)->comment('Active status');
            $table->timestamps();
            
            $table->index('employee_id');
            $table->index('business_unit_id');
            $table->index('name');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};