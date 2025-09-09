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
        Schema::create('breeding_daily_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('breeding_cage_id')->constrained()->onDelete('cascade');
            $table->date('report_date');
            $table->integer('mortality')->default(0);
            $table->integer('eggs_collected')->default(0);
            $table->decimal('feed_consumption', 10, 2)->default(0);
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->unique(['breeding_cage_id', 'report_date']);
            $table->index('report_date');
            $table->index('mortality');
            $table->index('eggs_collected');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('breeding_daily_reports');
    }
};