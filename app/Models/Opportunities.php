<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Opportunities extends Model
{
    use HasFactory; 
    use SoftDeletes;
    protected $dates=['deleted_at'];

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
        return $this->belongsToMany(Produit::class, 'opportunities_produit')->withPivot('opportunities_id');
    }
}
