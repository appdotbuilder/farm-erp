<?php

namespace Database\Factories;

use App\Models\ChartOfAccount;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ChartOfAccount>
 */
class ChartOfAccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $accountTypes = ['asset', 'liability', 'equity', 'income', 'expense'];
        $type = fake()->randomElement($accountTypes);
        
        $accountPrefixes = [
            'asset' => '1',
            'liability' => '2',
            'equity' => '3',
            'income' => '4',
            'expense' => '5',
        ];
        
        return [
            'account_code' => $accountPrefixes[$type] . fake()->unique()->numberBetween(1000, 9999),
            'name' => fake()->words(3, true),
            'type' => $type,
            'parent_account_id' => null, // Will be set separately for child accounts
            'hierarchy_level' => 1,
            'active' => fake()->boolean(90),
        ];
    }

    /**
     * Create a child account.
     */
    public function childOf(ChartOfAccount $parent): static
    {
        return $this->state(fn (array $attributes) => [
            'parent_account_id' => $parent->id,
            'hierarchy_level' => $parent->hierarchy_level + 1,
            'type' => $parent->type,
        ]);
    }

    /**
     * Indicate that the account is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'active' => false,
        ]);
    }
}