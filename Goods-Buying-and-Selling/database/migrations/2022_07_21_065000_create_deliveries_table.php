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
        Schema::create('deliveries', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('o_id');
            $table->unsignedBigInteger('deliveryman_id');
            $table->string('status');
            $table->foreign('o_id')->references('id')->on('orders');
            $table->foreign('deliveryman_id')->references('id')->on('all_users');
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
        Schema::dropIfExists('deliveries');
    }
};
