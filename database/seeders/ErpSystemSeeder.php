<?php

namespace Database\Seeders;

use App\Models\BusinessUnit;
use App\Models\BreedingCycle;
use App\Models\ChartOfAccount;
use App\Models\Employee;
use App\Models\HeadOffice;
use App\Models\Product;
use App\Models\Supplier;
use App\Models\Warehouse;
use Illuminate\Database\Seeder;

class ErpSystemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Head Offices
        $headOffices = HeadOffice::factory(3)->create([
            'active' => true,
        ]);

        // Create Business Units for each Head Office
        $headOffices->each(function (HeadOffice $headOffice) {
            $businessUnits = BusinessUnit::factory(random_int(2, 4))->create([
                'head_office_id' => $headOffice->id,
                'active' => true,
            ]);

            // Create Warehouses for each Business Unit
            $businessUnits->each(function (BusinessUnit $businessUnit) {
                Warehouse::factory(random_int(1, 3))->create([
                    'business_unit_id' => $businessUnit->id,
                    'active' => true,
                ]);

                // Create Employees for each Business Unit
                Employee::factory(random_int(5, 15))->create([
                    'business_unit_id' => $businessUnit->id,
                    'active' => true,
                ]);

                // Create Breeding Cycles for breeding business units
                if ($businessUnit->type === 'breeding') {
                    BreedingCycle::factory(random_int(2, 5))->create([
                        'business_unit_id' => $businessUnit->id,
                    ]);
                }
            });
        });

        // Create Products
        Product::factory(50)->create([
            'active' => true,
        ]);

        // Create Suppliers
        Supplier::factory(15)->create([
            'active' => true,
        ]);

        // Create Chart of Accounts
        $parentAccounts = ChartOfAccount::factory(10)->create([
            'active' => true,
        ]);

        // Create some child accounts
        $parentAccounts->each(function (ChartOfAccount $parent) {
            ChartOfAccount::factory(random_int(2, 5))
                ->childOf($parent)
                ->create([
                    'active' => true,
                ]);
        });
    }
}