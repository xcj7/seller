<?php

namespace App\Models;
use App\Models\AllUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;
    public function deliveryman(){
        return $this->belongsTo(AllUser::class,'deliveryman_id');
    }
}
