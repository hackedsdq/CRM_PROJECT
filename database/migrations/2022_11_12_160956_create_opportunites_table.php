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

        Schema::create('opportunites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('produits_id')->constrained()->onDelete('cascade');
            $table->foreignId('opportunites_id')->constrained()->onDelete('cascade');
            $table->integer('quantité');
            $table->timestamps();
            $table->string('nom');
            $table->double('montant');
            $table->enum('étape',['first','two']);
            $table->date('date_de_clôture');
            $table->unsignedBigInteger('Client_id');

            $table->foreign('client_id')->references('id')->on('clients');
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
