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
            $table->foreignId('warehouse_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->enum('type', ['in', 'out', 'adjustment'])->comment('Transaction type');
            $table->decimal('quantity', 15, 3)->comment('Transaction quantity');
            $table->decimal('unit_cost', 15, 2)->default(0)->comment('Unit cost');
            $table->decimal('total_cost', 15, 2)->default(0)->comment('Total transaction cost');
            $table->string('source_type')->comment('Source document type');
            $table->unsignedBigInteger('source_id')->comment('Source document ID');
            $table->string('reference_number')->nullable()->comment('Reference document number');
            $table->text('notes')->nullable()->comment('Transaction notes');
            $table->timestamp('transaction_date')->comment('Transaction date');
            $table->timestamps();
            
            $table->index('warehouse_id');
            $table->index('product_id');
            $table->index('type');
            $table->index('source_type');
            $table->index(['source_type', 'source_id']);
            $table->index('transaction_date');
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