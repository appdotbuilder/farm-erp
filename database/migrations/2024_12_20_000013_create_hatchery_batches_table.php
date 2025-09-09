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
        Schema::create('hatchery_batches', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_unit_id')->constrained()->onDelete('cascade');
            $table->string('batch_number', 20)->unique();
            $table->integer('eggs_received')->default(0);
            $table->integer('doc_produced')->default(0);
            $table->decimal('hatch_rate', 5, 2)->default(0); // percentage
            $table->decimal('total_cost', 15, 4)->default(0);
            $table->decimal('cost_per_doc', 10, 4)->default(0);
            $table->date('incubation_start_date');
            $table->date('hatch_date')->nullable();
            $table->enum('status', ['incubating', 'hatched', 'completed'])->default('incubating');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index(['business_unit_id', 'status']);
            $table->index('batch_number');
            $table->index('incubation_start_date');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hatchery_batches');
    }
};