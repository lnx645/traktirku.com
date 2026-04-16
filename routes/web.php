<?php

use Illuminate\Support\Facades\Route;

Route::get("/account/login", App\Http\Controllers\LoginController::class)->name("logiView");
Route::post("/account/login", [App\Http\Controllers\LoginController::class, 'checkLogin'])->name("loginCreatorAction");


include base_path("routes/app.php");
Route::prefix("creator")->group(base_path("routes/creator.php"));
