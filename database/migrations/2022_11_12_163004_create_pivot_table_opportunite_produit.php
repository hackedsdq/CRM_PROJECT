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
        Schema::create('opportunite_produit', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('produits_id');
            $table->foreign('produits_id')->references('id')->on('produits')->onDelete('cascade');
            $table->unsignedBigInteger('opportunites_id');
            $table->foreign('opportunites_id')->references('id')->on('opportunites')->onDelete('cascade');
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
        Schema::dropIfExists('pivot_table_opportunite_produit');
    }
};
