<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opportunities extends Model
{
   
    use HasFactory; 
    protected $fillable = [  'nom',
    'montant',
    'étape',
    'date_de_clôture,',
    'fonction',
    'telephone'
    
];
    public function client(){

        return $this->hasMany(Client::class);
    }
    public function produits()
    {
        return $this->belongsToMany(Produit::class);
    }
}
