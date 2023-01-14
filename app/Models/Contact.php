<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use SoftDeletes;
    
    protected $dates=['deleted_at'];
    protected $fillable = [
    'nom',
    'prenom',
    'email',
    'password',
    'fonction',
    'telephone',
    'client_id',
    'user_id',
    'photo'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

public function client(){

    return $this->hasMany(Client::class, 'client_id');
}
public function user(){

    return $this->belongsToMany(User::class, 'pivot_table_contact_user')->withPivot('id','Date','heure','compte_rendu');
}
}
