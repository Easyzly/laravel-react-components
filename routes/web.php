<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Notifications
Route::get('notifications-dropdown', [\App\Http\Controllers\NotificationsDropdownController::class, 'index'])->name('notifications-dropdown.index');
Route::get('notifications-dropdown/data', [\App\Http\Controllers\NotificationsDropdownController::class, 'data'])->name('notifications-dropdown.data');

//Pricing Sections
Route::get('pricing-table', [\App\Http\Controllers\PricingTableController::class, 'index'])->name('pricing-table.index');
Route::get('pricing-table/data', [\App\Http\Controllers\PricingTableController::class, 'data'])->name('pricing-table.data');




















//Product Widgets
Route::get('product-widgets', [\App\Http\Controllers\ProductWidgetsController::class, 'index'])->name('product-widgets.index');
Route::get('product-widgets/data', [\App\Http\Controllers\ProductWidgetsController::class, 'data'])->name('product-widgets.data');








































require __DIR__.'/auth.php';
