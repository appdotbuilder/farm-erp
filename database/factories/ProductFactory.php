<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['pakan', 'obat', 'vaksin', 'desinfektan', 'barang', 'asset_tetap', 'lainnya'];
        $category = fake()->randomElement($categories);
        $units = ['kg', 'liter', 'pcs', 'box', 'sack', 'bottle'];
        
        return [
            'code' => fake()->unique()->regexify('[A-Z]{3}[0-9]{4}'),
            'name' => $this->generateProductName($category),
            'category' => $category,
            'unit' => fake()->randomElement($units),
            'description' => fake()->sentence(),
            'standard_cost' => fake()->randomFloat(2, 1000, 50000),
            'selling_price' => fake()->randomFloat(2, 1500, 75000),
            'minimum_stock' => fake()->numberBetween(10, 100),
            'is_active' => fake()->boolean(95), // 95% chance of being active
        ];
    }

    /**
     * Generate product name based on category.
     */
    protected function generateProductName(string $category): string
    {
        $names = [
            'pakan' => ['Starter Feed', 'Grower Feed', 'Layer Feed', 'Broiler Feed', 'Finisher Feed'],
            'obat' => ['Antibiotics', 'Vitamins', 'Growth Promoter', 'Probiotics', 'Antioxidants'],
            'vaksin' => ['ND Vaccine', 'IB Vaccine', 'AI Vaccine', 'Salmonella Vaccine', 'Coccidiosis Vaccine'],
            'desinfektan' => ['Bleach Solution', 'Quaternary Ammonium', 'Iodine Based', 'Phenol Based'],
            'barang' => ['Feeding Equipment', 'Water System', 'Ventilation Fan', 'Cage Equipment'],
            'asset_tetap' => ['Building', 'Generator', 'Truck', 'Machinery', 'Computer Equipment'],
            'lainnya' => ['Office Supplies', 'Maintenance Tools', 'Safety Equipment', 'Packaging Materials']
        ];
        
        $categoryNames = $names[$category] ?? ['Generic Product'];
        return fake()->randomElement($categoryNames) . ' ' . fake()->word();
    }

    /**
     * Indicate that the product is feed/pakan.
     */
    public function feed(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'pakan',
            'name' => fake()->randomElement(['Starter Feed', 'Grower Feed', 'Layer Feed', 'Broiler Feed']) . ' Premium',
            'unit' => 'kg',
        ]);
    }

    /**
     * Indicate that the product is medicine/obat.
     */
    public function medicine(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'obat',
            'name' => fake()->randomElement(['Vitamins', 'Antibiotics', 'Probiotics']) . ' ' . fake()->word(),
            'unit' => 'bottle',
        ]);
    }

    /**
     * Indicate that the product is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}