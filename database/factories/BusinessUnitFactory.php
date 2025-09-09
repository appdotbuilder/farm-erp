<?php

namespace Database\Factories;

use App\Models\HeadOffice;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BusinessUnit>
 */
class BusinessUnitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['breeding', 'hatchery', 'broiler', 'layer', 'rpa', 'ho'];
        $type = fake()->randomElement($types);
        
        return [
            'head_office_id' => HeadOffice::factory(),
            'code' => fake()->unique()->regexify('BU[0-9]{3}'),
            'name' => fake()->company() . ' ' . ucfirst($type) . ' Unit',
            'type' => $type,
            'address' => fake()->address(),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->companyEmail(),
            'is_active' => fake()->boolean(95), // 95% chance of being active
        ];
    }

    /**
     * Indicate that the business unit is of breeding type.
     */
    public function breeding(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'breeding',
            'name' => fake()->company() . ' Breeding Unit',
        ]);
    }

    /**
     * Indicate that the business unit is of hatchery type.
     */
    public function hatchery(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'hatchery',
            'name' => fake()->company() . ' Hatchery Unit',
        ]);
    }

    /**
     * Indicate that the business unit is of broiler type.
     */
    public function broiler(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'broiler',
            'name' => fake()->company() . ' Broiler Unit',
        ]);
    }

    /**
     * Indicate that the business unit is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}