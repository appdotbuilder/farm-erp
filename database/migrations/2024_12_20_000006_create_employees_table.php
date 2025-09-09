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
            $table->string('employee_id', 20)->unique();
            $table->string('name');
            $table->string('position')->nullable();
            $table->string('department')->nullable();
            $table->string('email')->nullable();
            $table->string('phone', 20)->nullable();
            $table->date('hire_date');
            $table->decimal('base_salary', 12, 2)->default(0);
            $table->boolean('active')->default(true);
            $table->timestamps();
            
            $table->index(['business_unit_id', 'active']);
            $table->index('employee_id');
            $table->index('hire_date');
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