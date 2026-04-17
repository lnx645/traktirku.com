<?php

namespace App\Http\Controllers\Creator\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HalamanController extends Controller
{
    public function index(Request $request)
    {
        return inertia("creator/manage/edit-profile");
    }
}
