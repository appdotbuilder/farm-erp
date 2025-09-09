<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\StockTransaction
 *
 * @property int $id
 * @property int $warehouse_id
 * @property int $product_id
 * @property string $type
 * @property float $quantity
 * @property float $unit_cost
 * @property float $total_cost
 * @property string $source_type
 * @property int $source_id
 * @property string|null $reference_number
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon $transaction_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Warehouse $warehouse
 * @property-read \App\Models\Product $product
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction query()
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereReferenceNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereSourceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereSourceType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereTransactionDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereTotalCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereUnitCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction whereWarehouseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockTransaction ofType(string $type)

 * 
 * @mixin \Eloquent
 */
class StockTransaction extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'warehouse_id',
        'product_id',
        'type',
        'quantity',
        'unit_cost',
        'total_cost',
        'source_type',
        'source_id',
        'reference_number',
        'notes',
        'transaction_date',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity' => 'decimal:3',
        'unit_cost' => 'decimal:2',
        'total_cost' => 'decimal:2',
        'source_id' => 'integer',
        'transaction_date' => 'datetime',
    ];

    /**
     * Get the warehouse for this stock transaction.
     */
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    /**
     * Get the product for this stock transaction.
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Scope a query to only include transactions of a specific type.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $type
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOfType($query, string $type)
    {
        return $query->where('type', $type);
    }
}