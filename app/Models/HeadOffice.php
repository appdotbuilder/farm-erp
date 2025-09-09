<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\HeadOffice
 *
 * @property int $id
 * @property string $code
 * @property string $name
 * @property string|null $address
 * @property string|null $phone
 * @property string|null $email
 * @property bool $active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\BusinessUnit> $businessUnits
 * @property-read int|null $business_units_count
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice query()
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HeadOffice whereUpdatedAt($value)
 * @method static \Database\Factories\HeadOfficeFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class HeadOffice extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'code',
        'name',
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
     * Get the business units for the head office.
     */
    public function businessUnits(): HasMany
    {
        return $this->hasMany(BusinessUnit::class);
    }

    /**
     * Scope a query to only include active head offices.
     */
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
}