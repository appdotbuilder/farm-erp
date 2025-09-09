<?php

use App\Http\Controllers\ErpDashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/erp-dashboard', [ErpDashboardController::class, 'index'])->name('home');
    
    // ERP Module Routes
    Route::get('/organizations', function () {
        return Inertia::render('organizations/index');
    })->name('organizations');
    
    Route::get('/inventory', function () {
        return Inertia::render('inventory/index');
    })->name('inventory');
    
    Route::get('/warehouses', function () {
        return Inertia::render('warehouses/index');
    })->name('warehouses');
    
    Route::get('/employees', function () {
        return Inertia::render('employees/index');
    })->name('employees');
    
    Route::get('/reports', function () {
        return Inertia::render('reports/index');
    })->name('reports');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
