<?php

use App\Http\Controllers\IndexPageController;
use Illuminate\Support\Facades\Route;

Route::get("/creator/account/login",App\Http\Controllers\Creator\LoginController::class)->name("loginCreatorView");

