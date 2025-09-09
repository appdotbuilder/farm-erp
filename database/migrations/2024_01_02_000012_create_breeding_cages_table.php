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
        Schema::create('breeding_cages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('breeding_cycle_id')->constrained()->onDelete('cascade');
            $table->string('cage_number')->comment('Cage identification number');
            $table->integer('initial_population')->comment('Initial bird population');
            $table->integer('current_population')->comment('Current bird population');
            $table->boolean('is_active')->default(true)->comment('Active status');
            $table->timestamps();
            
            $table->unique(['breeding_cycle_id', 'cage_number']);
            $table->index('breeding_cycle_id');
            $table->index('cage_number');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('breeding_cages');
    }
};