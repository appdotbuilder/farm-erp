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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->comment('Customer code');
            $table->string('name')->comment('Customer name');
            $table->string('company')->nullable()->comment('Company name');
            $table->text('address')->nullable()->comment('Customer address');
            $table->string('phone')->nullable()->comment('Contact phone number');
            $table->string('email')->nullable()->comment('Contact email');
            $table->string('tax_id')->nullable()->comment('Tax identification number');
            $table->enum('payment_terms', ['cash', 'net_7', 'net_15', 'net_30', 'net_45', 'net_60'])->default('net_30')->comment('Payment terms');
            $table->decimal('credit_limit', 15, 2)->default(0)->comment('Credit limit amount');
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
        Schema::dropIfExists('customers');
    }
};