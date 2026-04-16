<?php

use App\Http\Controllers\IndexPageController;
use Illuminate\Support\Facades\Route;

Route::get("/",IndexPageController::class)->name("indexPageView");

