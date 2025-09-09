<?php

namespace Database\Factories;

use App\Models\BusinessUnit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $positions = [
            'Farm Manager', 'Supervisor', 'Technician', 'Worker', 
            'Veterinarian', 'Nutritionist', 'Quality Control', 'Maintenance'
        ];
        
        $departments = [
            'Production', 'Quality Assurance', 'Maintenance', 'Administration',
            'Veterinary', 'Nutrition', 'Logistics', 'Finance'
        ];
        
        return [
            'business_unit_id' => BusinessUnit::factory(),
            'employee_id' => fake()->unique()->regexify('EMP[0-9]{5}'),
            'name' => fake()->name(),
            'position' => fake()->randomElement($positions),
            'department' => fake()->randomElement($departments),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'hire_date' => fake()->dateTimeBetween('-5 years', 'now'),
            'base_salary' => fake()->randomFloat(2, 3000000, 15000000), // IDR salary range
            'is_active' => fake()->boolean(95), // 95% chance of being active
        ];
    }

    /**
     * Indicate that the employee is a manager.
     */
    public function manager(): static
    {
        return $this->state(fn (array $attributes) => [
            'position' => 'Farm Manager',
            'department' => 'Management',
            'base_salary' => fake()->randomFloat(2, 10000000, 20000000),
        ]);
    }

    /**
     * Indicate that the employee is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}