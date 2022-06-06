<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentLog extends Model
{
     protected $table='payment_logs';

    protected $fillable=[
        'status','raw_response','order_id', 'payment_type'
    ];

    protected $cast=[
        'created_at'=>'datetime:Y-m-d M:m:s',
        'updated_at'=>'datetime:Y-m-d M:m:s'
    ];
}
