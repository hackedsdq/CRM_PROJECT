<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Contact extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $fillable = [
    'nom',
    'prenom',
    'email',
    'password',
    'fonction',
    'telephone'
<<<<<<<<< Temporary merge branch 1
    
];
=========
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

>>>>>>>>> Temporary merge branch 2
public function client(){

    return $this->hasMany(Client::class, 'Client_id');
}
public function user(){

    return $this->belongsToMany(User::class);
}
}
