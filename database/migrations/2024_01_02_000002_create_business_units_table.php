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
            $table->string('code')->unique()->comment('Business unit code');
            $table->string('name')->comment('Business unit name');
            $table->enum('type', ['breeding', 'hatchery', 'broiler', 'layer', 'rpa', 'ho'])->comment('Business unit type');
            $table->text('address')->nullable()->comment('Business unit address');
            $table->string('phone')->nullable()->comment('Contact phone number');
            $table->string('email')->nullable()->comment('Contact email');
            $table->boolean('is_active')->default(true)->comment('Active status');
            $table->timestamps();
            
            $table->index('code');
            $table->index('type');
            $table->index('is_active');
            $table->index(['head_office_id', 'type']);
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