<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Produit extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $dates=['deleted_at'];

    protected $fillable = [
        'nom',
        'description',
        'prix',
        'quantité',
        'photo'
    ];

    public function opportunities()
    {
        return $this->belongsToMany(Opportunities::class,'opportunities_produit')->withPivot('opportunities_id');
    }
}
