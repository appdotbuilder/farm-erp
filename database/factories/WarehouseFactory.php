<?php

namespace Database\Factories;

use App\Models\BusinessUnit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Warehouse>
 */
class WarehouseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'business_unit_id' => BusinessUnit::factory(),
            'code' => fake()->unique()->regexify('WH[0-9]{4}'),
            'name' => fake()->randomElement(['Main Warehouse', 'Feed Storage', 'Medicine Storage', 'Equipment Storage']) . ' ' . fake()->numberBetween(1, 10),
            'location' => fake()->address(),
            'capacity' => fake()->randomFloat(2, 1000, 50000),
            'capacity_unit' => fake()->randomElement(['kg', 'cubic_meter', 'pallet']),
            'is_default' => fake()->boolean(20), // 20% chance of being default
            'is_active' => fake()->boolean(95), // 95% chance of being active
        ];
    }

    /**
     * Indicate that the warehouse is the default warehouse.
     */
    public function default(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_default' => true,
            'name' => 'Main Warehouse',
        ]);
    }

    /**
     * Indicate that the warehouse is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}