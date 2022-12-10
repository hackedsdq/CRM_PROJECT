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
    'prospects_id'
];


// protected = $guarded[];
public function contact(){
    return $this->belongsTo(Contact::class, 'Client_id');
}

public function opportunities (){
    return $this->belongsTo(Opportunities::class, 'Client_id');

}
public function prospects()
{
    return $this->hasOne(Prospect::class, 'prospects_id');
}
}
