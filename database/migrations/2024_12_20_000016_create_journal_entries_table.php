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
        Schema::create('journal_entries', function (Blueprint $table) {
            $table->id();
            $table->string('entry_number', 50)->unique();
            $table->date('entry_date');
            $table->string('description');
            $table->string('reference_type', 50)->nullable(); // e.g., 'sales_order', 'purchase_order'
            $table->bigInteger('reference_id')->nullable();
            $table->decimal('total_debit', 15, 4)->default(0);
            $table->decimal('total_credit', 15, 4)->default(0);
            $table->enum('status', ['draft', 'posted', 'reversed'])->default('draft');
            $table->timestamp('posted_at')->nullable();
            $table->foreignId('posted_by')->nullable()->constrained('users')->onDelete('set null');
            $table->timestamps();
            
            $table->index('entry_number');
            $table->index('entry_date');
            $table->index(['reference_type', 'reference_id']);
            $table->index('status');
            $table->index('posted_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('journal_entries');
    }
};