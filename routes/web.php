<?php

use Illuminate\Support\Facades\Route;

Route::get("/{role}/account/login",App\Http\Controllers\Creator\LoginController::class)->name("loginCreatorView");
Route::post("/{role}/account/login",[App\Http\Controllers\Creator\LoginController::class,'checkLogin'])->name("loginCreatorAction");


include base_path("routes/app.php");
include base_path("routes/creator.php");
