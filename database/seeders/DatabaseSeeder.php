<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\HeadOffice;
use App\Models\BusinessUnit;
use App\Models\Product;
use App\Models\Warehouse;
use App\Models\Employee;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Create Head Offices
        $headOffices = HeadOffice::factory(3)->create();

        // Create Business Units for each Head Office
        $headOffices->each(function ($headOffice) {
            // Create different types of business units
            BusinessUnit::factory()->breeding()->create(['head_office_id' => $headOffice->id]);
            BusinessUnit::factory()->hatchery()->create(['head_office_id' => $headOffice->id]);
            BusinessUnit::factory()->broiler()->create(['head_office_id' => $headOffice->id]);
            BusinessUnit::factory()->create(['head_office_id' => $headOffice->id, 'type' => 'layer']);
            BusinessUnit::factory()->create(['head_office_id' => $headOffice->id, 'type' => 'rpa']);
        });

        // Create Products
        Product::factory(50)->create();
        Product::factory(20)->feed()->create();
        Product::factory(15)->medicine()->create();

        // Create Warehouses and Employees for each Business Unit
        BusinessUnit::all()->each(function ($businessUnit) {
            // Create warehouses
            Warehouse::factory(2)->create(['business_unit_id' => $businessUnit->id]);
            Warehouse::factory()->default()->create(['business_unit_id' => $businessUnit->id]);
            
            // Create employees
            Employee::factory(5)->create(['business_unit_id' => $businessUnit->id]);
            Employee::factory()->manager()->create(['business_unit_id' => $businessUnit->id]);
        });
    }
}
