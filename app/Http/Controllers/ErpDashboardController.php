<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\BusinessUnit;
use App\Models\HeadOffice;
use App\Models\Product;
use App\Models\Employee;
use App\Models\Warehouse;
use Inertia\Inertia;

class ErpDashboardController extends Controller
{
    /**
     * Display the ERP dashboard.
     */
    public function index()
    {
        // Get summary statistics
        $stats = [
            'head_offices' => HeadOffice::active()->count(),
            'business_units' => BusinessUnit::active()->count(),
            'products' => Product::active()->count(),
            'employees' => Employee::where('is_active', true)->count(),
            'warehouses' => Warehouse::active()->count(),
        ];

        // Get business units by type
        $businessUnitsByType = BusinessUnit::active()
            ->selectRaw('type, COUNT(*) as count')
            ->groupBy('type')
            ->get()
            ->pluck('count', 'type')
            ->toArray();

        // Get products by category
        $productsByCategory = Product::active()
            ->selectRaw('category, COUNT(*) as count')
            ->groupBy('category')
            ->get()
            ->pluck('count', 'category')
            ->toArray();

        // Get recent business units
        $recentBusinessUnits = BusinessUnit::with('headOffice')
            ->active()
            ->latest()
            ->take(5)
            ->get();

        return Inertia::render('erp-dashboard', [
            'stats' => $stats,
            'businessUnitsByType' => $businessUnitsByType,
            'productsByCategory' => $productsByCategory,
            'recentBusinessUnits' => $recentBusinessUnits,
        ]);
    }
}