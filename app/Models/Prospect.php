<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prospect extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'prenom',
        'société',
        'fonction',
        'email',
        'téléphone',
        'adresse',
        'site_web',
        'Statut',
        'Source',
        'photo',
        'logo'
    ];
    public function clients()
    {
        return $this->belongsTo(Client::class, 'prospect_id');
    }
}
