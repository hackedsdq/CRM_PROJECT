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
        Schema::create('pivot_table_contact_user', function (Blueprint $table) {
            $table->id();
            $table->date('Date');
            $table->time('heure');
            $table->string('compte_rendu');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('contacts_id')->constrained('contacts')->onDelete('cascade');

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
        Schema::dropIfExists('pivot_table_contact_user');
    }
};