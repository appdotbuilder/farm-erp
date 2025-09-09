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
        Schema::create('business_units', function (Blueprint $table) {
            $table->id();
            $table->foreignId('head_office_id')->constrained()->onDelete('cascade');
            $table->string('code', 20)->unique();
            $table->string('name');
            $table->enum('type', ['breeding', 'hatchery', 'broiler', 'layer', 'rpa', 'ho'])->default('breeding');
            $table->text('address')->nullable();
            $table->string('phone', 20)->nullable();
            $table->string('email')->nullable();
            $table->boolean('active')->default(true);
            $table->timestamps();
            
            $table->index(['head_office_id', 'active']);
            $table->index('code');
            $table->index('type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('business_units');
    }
};