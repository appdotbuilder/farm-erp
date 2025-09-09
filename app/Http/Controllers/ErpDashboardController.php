<?php

namespace App\Http\Controllers;

use App\Models\BusinessUnit;
use App\Models\Employee;
use App\Models\HeadOffice;
use App\Models\Product;
use App\Models\Warehouse;
use Inertia\Inertia;

class ErpDashboardController extends Controller
{
    /**
     * Display the main ERP dashboard.
     */
    public function index()
    {
        $stats = [
            'head_offices' => HeadOffice::active()->count(),
            'business_units' => BusinessUnit::active()->count(),
            'employees' => Employee::where('active', true)->count(),
            'products' => Product::active()->count(),
            'warehouses' => Warehouse::active()->count(),
        ];

        $recentBusinessUnits = BusinessUnit::with('headOffice')
            ->active()
            ->latest()
            ->limit(5)
            ->get();

        return Inertia::render('erp-dashboard', [
            'stats' => $stats,
            'recentBusinessUnits' => $recentBusinessUnits,
        ]);
    }
}