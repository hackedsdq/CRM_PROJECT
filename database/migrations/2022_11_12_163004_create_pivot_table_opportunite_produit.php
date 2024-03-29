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
            $table->softDeletes();
            $table->id();
            $table->foreignId('produits_id')->constrained()->onDelete('cascade');
            $table->foreignId('opportunities_id')->constrained()->onDelete('cascade');
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

    }
};
