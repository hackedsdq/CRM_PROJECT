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
        Schema::create('opportunities_produit', function (Blueprint $table) {
            $table->softDeletes();
            $table->unsignedBigInteger('produit_id');
            $table->foreign('produit_id')->references('id')->on('produits')->onDelete('cascade');

            $table->unsignedBigInteger('opportunities_id');
            $table->foreign('opportunities_id')->references('id')->on('opportunities')->onDelete('cascade');

            $table->primary(['produit_id','opportunities_id']);

            $table->integer('quantité');
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
        Schema::dropIfExists('opportunities_produit');
    }
};
