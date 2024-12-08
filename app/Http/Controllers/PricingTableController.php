<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PricingTableController extends Controller
{
    public function index()
    {
        return Inertia::render('Creations/PricingTable');
    }

    public function data()
    {
        $fakeData = [
            [
                'title' => 'Basic',
                'price' => '$19',
                'features' => [
                    '1 User',
                    '10 Projects',
                    '2GB Storage',
                    'Email Support',
                    'Help Center Access',
                    'Basic Analytics',
                    'Community Access'
                ],
                'cta' => 'Start free trial',
                'billingCycle' => 'Monthly',
                'discount' => '10% off for annual billing'
            ],

            [
                'title' => 'Pro',
                'price' => '$39',
                'features' => [
                    '5 Users',
                    '50 Projects',
                    '20GB Storage',
                    'Priority Email Support',
                    'Help Center Access',
                    'Advanced Analytics',
                    'Community Access',
                    'Customizable Dashboard'
                ],
                'cta' => 'Start free trial',
                'billingCycle' => 'Monthly',
                'discount' => '15% off for annual billing'
            ],

            [
                'title' => 'Enterprise',
                'price' => '$99',
                'features' => [
                    'Unlimited Users',
                    'Unlimited Projects',
                    '100GB Storage',
                    'Phone & Email Support',
                    'Help Center Access',
                    'Premium Analytics',
                    'Community Access',
                    'Customizable Dashboard',
                    'Dedicated Account Manager',
                    '24/7 Support'
                ],
                'cta' => 'Request a demo',
                'billingCycle' => 'Monthly',
                'discount' => '20% off for annual billing'
            ],
        ];

        return response()->json($fakeData);
    }
}
