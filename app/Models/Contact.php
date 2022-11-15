<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;protected $fillable = [  'nom',
    'prenom',
    'email',
    'password',
    'fonction',
    'telephone'
    
];
public function client(){

    return $this->hasMany(Client::class);
}
public function user(){

    return $this->belongsToMany(User::class);
}
}
