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
            $table->date('report_date')->comment('Report date');
            $table->integer('mortality')->default(0)->comment('Daily mortality count');
            $table->text('notes')->nullable()->comment('Daily notes');
            $table->timestamps();
            
            $table->unique(['breeding_cage_id', 'report_date']);
            $table->index('breeding_cage_id');
            $table->index('report_date');
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