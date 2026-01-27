<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $primaryKey = 'main_id';

    protected $fillable = [
        'school_id',
        'first_name',
        'last_name',
        'middle_initial',
        'address',
        'email',
        'gender',
    ];
}
