<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductWidgetsController extends Controller
{
    public function index()
    {
        return Inertia::render('Creations/ProductWidgets');
    }

    public function data(Request $request)
    {
        $products = Product::query()
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($products);
    }
}
