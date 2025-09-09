<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\BreedingCycle
 *
 * @property int $id
 * @property int $business_unit_id
 * @property string $cycle_number
 * @property string|null $strain
 * @property int $initial_doc_ps_quantity
 * @property float $initial_doc_ps_cost
 * @property \Carbon\Carbon $start_date
 * @property \Carbon\Carbon|null $end_date
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\BusinessUnit $businessUnit
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\BreedingCage> $breedingCages
 * @property-read int|null $breeding_cages_count
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle query()
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereBusinessUnitId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereCycleNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereInitialDocPsCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereInitialDocPsQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereStrain($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BreedingCycle whereUpdatedAt($value)
 * @method static \Database\Factories\BreedingCycleFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class BreedingCycle extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'business_unit_id',
        'cycle_number',
        'strain',
        'initial_doc_ps_quantity',
        'initial_doc_ps_cost',
        'start_date',
        'end_date',
        'status',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'initial_doc_ps_quantity' => 'integer',
        'initial_doc_ps_cost' => 'decimal:4',
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    /**
     * Get the business unit that owns the breeding cycle.
     */
    public function businessUnit(): BelongsTo
    {
        return $this->belongsTo(BusinessUnit::class);
    }

    /**
     * Get the breeding cages for the breeding cycle.
     */
    public function breedingCages(): HasMany
    {
        return $this->hasMany(BreedingCage::class);
    }

    /**
     * Scope a query to only include active breeding cycles.
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}