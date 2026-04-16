<?php

use App\Http\Controllers\IndexPageController;
use Illuminate\Support\Facades\Route;

Route::get('',[App\Http\Controllers\Creator\DashboardController::class,'index'])->name("creatorDashboardView");
