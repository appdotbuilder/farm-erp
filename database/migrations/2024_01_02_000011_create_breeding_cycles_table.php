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
        Schema::create('breeding_cycles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_unit_id')->constrained()->onDelete('cascade');
            $table->string('cycle_number')->unique()->comment('Breeding cycle number');
            $table->string('strain')->comment('Chicken strain type');
            $table->integer('doc_ps_quantity')->comment('DOC PS quantity');
            $table->decimal('doc_ps_cost', 15, 2)->comment('DOC PS total cost');
            $table->date('start_date')->comment('Cycle start date');
            $table->date('end_date')->nullable()->comment('Cycle end date');
            $table->enum('status', ['active', 'closed', 'archived'])->default('active')->comment('Cycle status');
            $table->text('notes')->nullable()->comment('Cycle notes');
            $table->timestamps();
            
            $table->index('cycle_number');
            $table->index('business_unit_id');
            $table->index('status');
            $table->index('start_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('breeding_cycles');
    }
};