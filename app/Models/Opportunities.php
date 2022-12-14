<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opportunities extends Model
{
    use HasFactory; 


    protected $fillable = [ 
    'nom',
    'montant',
    'étape',
    'date_de_clôture',
    'client_id'  
];
    public function client(){

        return $this->hasMany(Client::class, 'client_id');
    }
    public function produits()
    {
        return $this->belongsToMany(Produit::class, 'opportunities_produit');
    }
}
