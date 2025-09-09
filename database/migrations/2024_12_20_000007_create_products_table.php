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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('code', 50)->unique();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('category')->nullable();
            $table->string('unit_of_measure', 10);
            $table->decimal('unit_cost', 12, 4)->default(0);
            $table->decimal('selling_price', 12, 4)->default(0);
            $table->integer('minimum_stock')->default(0);
            $table->boolean('active')->default(true);
            $table->timestamps();
            
            $table->index('code');
            $table->index('category');
            $table->index('active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};