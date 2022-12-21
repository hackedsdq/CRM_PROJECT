<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{ 
    use HasFactory;
     protected $fillable = [  
    'société',
    'téléphone',
    'adresse',
    'site_web',
    'prospect_id',
    'user_id'
];


// protected = $guarded[];
public function contact(){
    return $this->belongsTo(Contact::class, 'client_id');
}

public function opportunities(){
    return $this->belongsTo(Opportunities::class, '');

}
public function prospects()
{
    return $this->hasOne(Prospect::class, 'prospect_id');
}

public function users()
{
    return $this->belongsTo(User::class, 'user_id');
}
}
