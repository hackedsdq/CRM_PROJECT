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
<<<<<<< HEAD
public function client(){

    return $this->hasMany(Client::class);
}
public function user(){

    return $this->belongsToMany(User::class);
}
=======

>>>>>>> d44b412accdd5d319bda7004b61196fe5c2821c0
}
