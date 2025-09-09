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
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->comment('Account code');
            $table->string('name')->comment('Account name');
            $table->enum('type', ['asset', 'liability', 'equity', 'income', 'expense'])->comment('Account type');
            $table->foreignId('parent_id')->nullable()->constrained('accounts')->onDelete('set null');
            $table->integer('level')->default(1)->comment('Account hierarchy level');
            $table->boolean('is_active')->default(true)->comment('Active status');
            $table->timestamps();
            
            $table->index('code');
            $table->index('type');
            $table->index('is_active');
            $table->index(['type', 'level']);
            $table->index('parent_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};