<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('shop_id');
            $table->string('p_name');
            $table->string('image');
            $table->string('p_type');
            $table->string('status');
            $table->string('p_description');
            $table->float('p_qty');
            $table->float('p_price');
            $table->float('p_offer');
            $table->foreign('shop_id')->references('id')->on('all_users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
