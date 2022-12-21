<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'description',
        'prix',
        'quantité',
        'photo'
    ];

    public function opportunities()
    {
        return $this->belongsToMany(Opportunities::class,'opportunities_produit');
    }
}
