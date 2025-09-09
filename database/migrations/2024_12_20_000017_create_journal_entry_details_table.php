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
        Schema::create('journal_entry_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('journal_entry_id')->constrained()->onDelete('cascade');
            $table->foreignId('account_id')->constrained('chart_of_accounts')->onDelete('cascade');
            $table->string('description')->nullable();
            $table->decimal('debit_amount', 15, 4)->default(0);
            $table->decimal('credit_amount', 15, 4)->default(0);
            $table->timestamps();
            
            $table->index(['journal_entry_id', 'account_id']);
            $table->index('debit_amount');
            $table->index('credit_amount');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('journal_entry_details');
    }
};