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
        Schema::create('prospects', function (Blueprint $table) {
            $table->softDeletes();
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('société');
            $table->string('fonction');
            $table->string('email')->unique();
            $table->string('téléphone');
            $table->string('adresse');
            $table->string('site_web');
            $table->enum('Statut',['chaud', 'froid']);
            $table->enum('Source',['Web', 'Téléphone', 'Partenaire', 'Autre']);
            $table->string('logo');
            $table->string('photo');
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
        Schema::dropIfExists('prospects');
    }
};
