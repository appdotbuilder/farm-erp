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
            $table->string('entry_number')->unique()->comment('Journal entry number');
            $table->date('entry_date')->comment('Entry date');
            $table->string('reference')->nullable()->comment('Reference document');
            $table->text('description')->comment('Entry description');
            $table->decimal('total_debit', 15, 2)->comment('Total debit amount');
            $table->decimal('total_credit', 15, 2)->comment('Total credit amount');
            $table->enum('status', ['draft', 'posted', 'reversed'])->default('draft')->comment('Entry status');
            $table->string('source_type')->nullable()->comment('Source document type');
            $table->unsignedBigInteger('source_id')->nullable()->comment('Source document ID');
            $table->timestamps();
            
            $table->index('entry_number');
            $table->index('entry_date');
            $table->index('status');
            $table->index(['source_type', 'source_id']);
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