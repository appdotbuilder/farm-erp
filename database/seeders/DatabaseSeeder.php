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

        $this->call([
            ErpSystemSeeder::class,
        ]);
    }
}
