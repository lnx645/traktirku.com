<?php

namespace App\Http\Controllers\Creator;

use App\Http\Controllers\Controller;
use App\Models\Creator;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SupportPageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $creatorUsername)
    {
        $creator = Creator::where([
            'nickname' => $creatorUsername
        ]);
        abort_if(false === $creator->exists(),Response::HTTP_NOT_FOUND);
        return inertia("creator/index");
    }
}
