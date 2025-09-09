<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\BusinessUnit
 *
 * @property int $id
 * @property int $head_office_id
 * @property string $code
 * @property string $name
 * @property string $type
 * @property string|null $address
 * @property string|null $phone
 * @property string|null $email
 * @property bool $active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\HeadOffice $headOffice
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Warehouse> $warehouses
 * @property-read int|null $warehouses_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Employee> $employees
 * @property-read int|null $employees_count
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit query()
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereHeadOfficeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BusinessUnit whereUpdatedAt($value)
 * @method static \Database\Factories\BusinessUnitFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class BusinessUnit extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'head_office_id',
        'code',
        'name',
        'type',
        'address',
        'phone',
        'email',
        'active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'active' => 'boolean',
    ];

    /**
     * Get the head office that owns the business unit.
     */
    public function headOffice(): BelongsTo
    {
        return $this->belongsTo(HeadOffice::class);
    }

    /**
     * Get the warehouses for the business unit.
     */
    public function warehouses(): HasMany
    {
        return $this->hasMany(Warehouse::class);
    }

    /**
     * Get the employees for the business unit.
     */
    public function employees(): HasMany
    {
        return $this->hasMany(Employee::class);
    }

    /**
     * Scope a query to only include active business units.
     */
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
}