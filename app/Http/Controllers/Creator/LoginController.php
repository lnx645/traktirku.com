<?php

namespace App\Http\Controllers\Creator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        return inertia("creator/login");
    }
    public function checkLogin(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if ($login = Auth::guard("web")->attempt($validated)) {
            return "/";
        } else {
            throw ValidationException::withMessages(['email' => "Akun tidak ditemukan!"]);
        }
    }
}
