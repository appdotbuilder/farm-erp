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
        Schema::create('chart_of_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('account_code', 20)->unique();
            $table->string('name');
            $table->enum('type', ['asset', 'liability', 'equity', 'income', 'expense']);
            $table->foreignId('parent_account_id')->nullable()->constrained('chart_of_accounts')->onDelete('set null');
            $table->integer('hierarchy_level')->default(1);
            $table->boolean('active')->default(true);
            $table->timestamps();
            
            $table->index('account_code');
            $table->index('type');
            $table->index(['parent_account_id', 'hierarchy_level']);
            $table->index('active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chart_of_accounts');
    }
};