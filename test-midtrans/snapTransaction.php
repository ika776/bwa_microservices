<?php
require 'vendor/autoload.php';

// Set your Merchant Server Key
\Midtrans\Config::$serverKey = 'Mid-server-nDTXp9AVqXpQdypnP77ScDzo';
// Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
\Midtrans\Config::$isProduction = true;
// Set sanitization on (default)
\Midtrans\Config::$isSanitized = true;
// Set 3DS transaction for credit card to true
\Midtrans\Config::$is3ds = true;
$params = array(
    'transaction_details' => array(
        'order_id' => rand(),
        'gross_amount' => 100,    
    ),
        'customer_details' => array(
            'first_name' => 'ika',
            'last_name' => 'sari',
            'email' => 'ikasari@example.com',
            'phone' => '08111222333',
        ),);

        // $snapToken = \Midtrans\Snap::getSnapToken($params);
        $snapUrlRedirect=\Midtrans\Snap::createTransaction($params)->redirect_url;
         echo $snapUrlRedirect;