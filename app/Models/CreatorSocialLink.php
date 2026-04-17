<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    "id",
    "name",
    "icon",
    "url",
    "active",
    "creator_id"
])]
#[Table("creator_social_link")]
class CreatorSocialLink extends Model {
    public function creators(){
        return $this->belongsTo(Creator::class,'creator_id','id');
    }
}
