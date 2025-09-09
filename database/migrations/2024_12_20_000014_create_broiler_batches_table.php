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
        Schema::create('broiler_batches', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_unit_id')->constrained()->onDelete('cascade');
            $table->string('batch_number', 20)->unique();
            $table->integer('initial_quantity')->default(0);
            $table->integer('current_quantity')->default(0);
            $table->decimal('average_weight', 8, 3)->default(0);
            $table->decimal('total_feed_consumed', 12, 2)->default(0);
            $table->decimal('total_mortality', 8, 0)->default(0);
            $table->decimal('fcr', 6, 3)->default(0); // Feed Conversion Ratio
            $table->decimal('total_cost', 15, 4)->default(0);
            $table->decimal('cost_per_kg', 10, 4)->default(0);
            $table->date('placement_date');
            $table->date('target_harvest_date')->nullable();
            $table->enum('status', ['active', 'harvesting', 'completed'])->default('active');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index(['business_unit_id', 'status']);
            $table->index('batch_number');
            $table->index('placement_date');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('broiler_batches');
    }
};