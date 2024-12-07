<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationsDropdownController extends Controller
{
    public function index()
    {
        return Inertia::render('Creations/NotificationsDropdown');
    }

    public function data()
    {
        $fakeData = [
            [
                'title' => 'New user registered',
                'content' => 'A new user has registered on your website.',
                'created_at' => '2 hours ago'
            ],

            [
                'title' => 'New comment',
                'content' => 'A new comment has been posted on your blog.',
                'created_at' => '1 day ago'
            ],

            [
                'title' => 'New order',
                'content' => 'A new order has been placed on your website.',
                'created_at' => '1 week ago'
            ],
        ];

        return response()->json($fakeData);
    }
}
