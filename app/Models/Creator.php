<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'nickname',
    'bio',
    'is_active',
    'category',
    'created_at',
    'description',
    'link_bio',
    'id',
    'is_verified'
])]
#[Table("creators")]
class Creator extends Model
{
    /** @use HasFactory<\Database\Factories\CreatorFactory> */
    use HasFactory, HasUuids;

    public function socialLink()
    {
        return $this->hasMany(CreatorSocialLink::class, 'creator_id');
    }
    public function units()
    {
        return $this->hasMany(SupportUnit::class);
    }
    public function activeUnit()
    {
        return $this->hasOne(SupportUnit::class)->where([
            'is_active' => true
        ]);
    }
}
