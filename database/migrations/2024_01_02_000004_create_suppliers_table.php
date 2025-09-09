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
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->comment('Supplier code');
            $table->string('name')->comment('Supplier name');
            $table->string('company')->nullable()->comment('Company name');
            $table->text('address')->nullable()->comment('Supplier address');
            $table->string('phone')->nullable()->comment('Contact phone number');
            $table->string('email')->nullable()->comment('Contact email');
            $table->string('tax_id')->nullable()->comment('Tax identification number');
            $table->enum('payment_terms', ['cash', 'net_7', 'net_15', 'net_30', 'net_45', 'net_60'])->default('net_30')->comment('Payment terms');
            $table->boolean('is_active')->default(true)->comment('Active status');
            $table->timestamps();
            
            $table->index('code');
            $table->index('name');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('suppliers');
    }
};