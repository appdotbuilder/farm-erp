<?php

namespace Database\Factories;

use App\Models\BusinessUnit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BreedingCycle>
 */
class BreedingCycleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = fake()->dateTimeBetween('-6 months', 'now');
        
        return [
            'business_unit_id' => BusinessUnit::factory(),
            'cycle_number' => 'BR-' . fake()->year() . '-' . fake()->unique()->numberBetween(100, 999),
            'strain' => fake()->randomElement(['Ross 308', 'Cobb 500', 'Arbor Acres', 'Hubbard Flex']),
            'initial_doc_ps_quantity' => fake()->numberBetween(10000, 25000),
            'initial_doc_ps_cost' => fake()->randomFloat(4, 5000, 15000),
            'start_date' => $startDate,
            'end_date' => fake()->boolean(30) ? fake()->dateTimeBetween($startDate, '+1 year') : null,
            'status' => fake()->randomElement(['active', 'completed', 'closed']),
            'notes' => fake()->optional()->paragraph(),
        ];
    }

    /**
     * Indicate that the breeding cycle is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'active',
            'end_date' => null,
        ]);
    }

    /**
     * Indicate that the breeding cycle is completed.
     */
    public function completed(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'completed',
            'end_date' => fake()->dateTimeBetween($attributes['start_date'], 'now'),
        ]);
    }
}