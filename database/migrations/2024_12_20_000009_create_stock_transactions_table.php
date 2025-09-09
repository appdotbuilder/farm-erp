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
        Schema::create('stock_transactions', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_number', 50)->unique();
            $table->foreignId('warehouse_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->enum('transaction_type', ['in', 'out', 'adjustment', 'transfer']);
            $table->decimal('quantity', 15, 4);
            $table->decimal('unit_cost', 12, 4)->default(0);
            $table->decimal('total_cost', 15, 4)->default(0);
            $table->string('reference_type', 50)->nullable(); // e.g., 'purchase_order', 'sales_order'
            $table->bigInteger('reference_id')->nullable();
            $table->text('notes')->nullable();
            $table->date('transaction_date');
            $table->timestamps();
            
            $table->index(['warehouse_id', 'product_id']);
            $table->index('transaction_number');
            $table->index('transaction_type');
            $table->index('transaction_date');
            $table->index(['reference_type', 'reference_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_transactions');
    }
};