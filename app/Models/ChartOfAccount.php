<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\ChartOfAccount
 *
 * @property int $id
 * @property string $account_code
 * @property string $name
 * @property string $type
 * @property int|null $parent_account_id
 * @property int $hierarchy_level
 * @property bool $active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\ChartOfAccount|null $parentAccount
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ChartOfAccount> $childAccounts
 * @property-read int|null $child_accounts_count
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount query()
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount whereAccountCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount whereHierarchyLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount whereParentAccountId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChartOfAccount whereUpdatedAt($value)
 * 
 * @mixin \Eloquent
 */
class ChartOfAccount extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'chart_of_accounts';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'account_code',
        'name',
        'type',
        'parent_account_id',
        'hierarchy_level',
        'active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'active' => 'boolean',
        'hierarchy_level' => 'integer',
    ];

    /**
     * Get the parent account.
     */
    public function parentAccount(): BelongsTo
    {
        return $this->belongsTo(ChartOfAccount::class, 'parent_account_id');
    }

    /**
     * Get the child accounts.
     */
    public function childAccounts(): HasMany
    {
        return $this->hasMany(ChartOfAccount::class, 'parent_account_id');
    }

    /**
     * Scope a query to only include active accounts.
     */
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
}