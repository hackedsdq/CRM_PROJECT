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

        Schema::create('opportunities', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->double('montant');
            $table->enum('étape',['one','two', 'three', 'four']);
            $table->date('date_de_clôture');
            $table->unsignedBigInteger('Client_id');
            $table->foreign('Client_id')->references('id')->on('clients');
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

    }
};
