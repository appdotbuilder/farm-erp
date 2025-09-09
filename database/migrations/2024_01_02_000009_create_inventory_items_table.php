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
        Schema::create('inventory_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('warehouse_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->decimal('quantity', 15, 3)->default(0)->comment('Current stock quantity');
            $table->decimal('average_cost', 15, 2)->default(0)->comment('Average cost per unit');
            $table->decimal('total_value', 15, 2)->default(0)->comment('Total inventory value');
            $table->string('source_type')->nullable()->comment('Source document type');
            $table->unsignedBigInteger('source_id')->nullable()->comment('Source document ID');
            $table->timestamps();
            
            $table->unique(['warehouse_id', 'product_id', 'source_type', 'source_id']);
            $table->index('warehouse_id');
            $table->index('product_id');
            $table->index(['warehouse_id', 'product_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventory_items');
    }
};