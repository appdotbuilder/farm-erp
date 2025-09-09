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
    Route::get('/erp-dashboard', [ErpDashboardController::class, 'index'])->name('erp-dashboard');
    
    // Production Module Routes
    Route::get('/breeding', function () {
        return Inertia::render('breeding/index');
    })->name('breeding');
    
    Route::get('/hatchery', function () {
        return Inertia::render('hatchery/index');
    })->name('hatchery');
    
    Route::get('/broiler', function () {
        return Inertia::render('broiler/index');
    })->name('broiler');
    
    Route::get('/layer', function () {
        return Inertia::render('layer/index');
    })->name('layer');
    
    Route::get('/rpa', function () {
        return Inertia::render('rpa/index');
    })->name('rpa');
    
    // Management Module Routes
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
    
    Route::get('/accounting', function () {
        return Inertia::render('accounting/index');
    })->name('accounting');
    
    Route::get('/sales', function () {
        return Inertia::render('sales/index');
    })->name('sales');
    
    Route::get('/expenses', function () {
        return Inertia::render('expenses/index');
    })->name('expenses');
    
    Route::get('/reports', function () {
        return Inertia::render('reports/index');
    })->name('reports');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return redirect()->route('erp-dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
