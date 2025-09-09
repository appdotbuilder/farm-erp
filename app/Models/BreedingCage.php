<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\BreedingCage
 *
 * @property int $id
 * @property int $breeding_cycle_id
 * @property string $cage_number
 * @property int $capacity
 * @property int $current_population
 * @property bool $active
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\BreedingCycle $breedingCycle
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage query()
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage whereBreedingCycleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage whereCageNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage whereCapacity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage whereCurrentPopulation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCage whereUpdatedAt($value)
 * 
 * @mixin \Eloquent
 */
class BreedingCage extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'breeding_cycle_id',
        'cage_number',
        'capacity',
        'current_population',
        'active',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'capacity' => 'integer',
        'current_population' => 'integer',
        'active' => 'boolean',
    ];

    /**
     * Get the breeding cycle that owns the breeding cage.
     */
    public function breedingCycle(): BelongsTo
    {
        return $this->belongsTo(BreedingCycle::class);
    }

    /**
     * Scope a query to only include active breeding cages.
     */
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
}