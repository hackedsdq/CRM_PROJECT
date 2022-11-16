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
        'quantité',
        'prix'
      
    ];
<<<<<<< HEAD
    public function Opportunities()
    {
        return $this->belongsToMany(Opportunities::class);
    }
=======
>>>>>>> d44b412accdd5d319bda7004b61196fe5c2821c0
}
