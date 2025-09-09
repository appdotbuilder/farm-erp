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
        Schema::create('layer_cycles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_unit_id')->constrained()->onDelete('cascade');
            $table->string('cycle_number', 20)->unique();
            $table->integer('initial_quantity')->default(0);
            $table->integer('current_quantity')->default(0);
            $table->decimal('total_eggs_produced', 12, 0)->default(0);
            $table->decimal('total_culled', 8, 0)->default(0);
            $table->decimal('total_mortality', 8, 0)->default(0);
            $table->decimal('production_rate', 5, 2)->default(0); // percentage
            $table->decimal('total_cost', 15, 4)->default(0);
            $table->date('placement_date');
            $table->date('first_egg_date')->nullable();
            $table->date('end_date')->nullable();
            $table->enum('status', ['rearing', 'production', 'completed'])->default('rearing');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index(['business_unit_id', 'status']);
            $table->index('cycle_number');
            $table->index('placement_date');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('layer_cycles');
    }
};