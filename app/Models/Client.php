<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{ 


    use HasFactory;
     protected $fillable = [  'société',
    'téléphone',
    'adresse',
    'site_web'
    
];
public function contact (){
    return $this->belongsTo(Contact::class);
}
public function opputunites (){
    return $this->belongsTo(opputunites::class);

}
}
