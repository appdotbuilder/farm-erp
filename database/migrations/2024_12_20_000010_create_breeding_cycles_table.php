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
            $table->string('cycle_number', 20)->unique();
            $table->string('strain')->nullable();
            $table->integer('initial_doc_ps_quantity')->default(0);
            $table->decimal('initial_doc_ps_cost', 15, 4)->default(0);
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->enum('status', ['active', 'completed', 'closed'])->default('active');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index(['business_unit_id', 'status']);
            $table->index('cycle_number');
            $table->index('start_date');
            $table->index('status');
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