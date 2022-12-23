<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Prospect extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $dates=['deleted_at'];
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
