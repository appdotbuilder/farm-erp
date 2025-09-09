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
            $table->string('cage_number', 20);
            $table->integer('capacity')->default(0);
            $table->integer('current_population')->default(0);
            $table->boolean('active')->default(true);
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->unique(['breeding_cycle_id', 'cage_number']);
            $table->index('cage_number');
            $table->index('active');
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