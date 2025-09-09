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
        Schema::create('warehouses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_unit_id')->constrained()->onDelete('cascade');
            $table->string('code')->unique()->comment('Warehouse code');
            $table->string('name')->comment('Warehouse name');
            $table->text('location')->nullable()->comment('Warehouse location/address');
            $table->decimal('capacity', 12, 2)->nullable()->comment('Storage capacity');
            $table->string('capacity_unit')->nullable()->comment('Capacity measurement unit');
            $table->boolean('is_default')->default(false)->comment('Default warehouse flag');
            $table->boolean('is_active')->default(true)->comment('Active status');
            $table->timestamps();
            
            $table->index('code');
            $table->index('business_unit_id');
            $table->index('is_active');
            $table->index(['business_unit_id', 'is_default']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('warehouses');
    }
};