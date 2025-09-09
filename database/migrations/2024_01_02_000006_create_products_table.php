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
            $table->string('code')->unique()->comment('Product code/SKU');
            $table->string('name')->comment('Product name');
            $table->enum('category', ['pakan', 'obat', 'vaksin', 'desinfektan', 'barang', 'asset_tetap', 'lainnya'])->comment('Product category');
            $table->string('unit')->comment('Unit of measurement');
            $table->text('description')->nullable()->comment('Product description');
            $table->decimal('standard_cost', 15, 2)->nullable()->comment('Standard cost per unit');
            $table->decimal('selling_price', 15, 2)->nullable()->comment('Standard selling price');
            $table->integer('minimum_stock')->default(0)->comment('Minimum stock level');
            $table->boolean('is_active')->default(true)->comment('Active status');
            $table->timestamps();
            
            $table->index('code');
            $table->index('name');
            $table->index('category');
            $table->index('is_active');
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