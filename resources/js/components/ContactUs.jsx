import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import HeaderContact from './static_components/HeaderContact';
import FooterFrontoffice from './static_components/FooterFrontoffice';

export default function ContactUs({}){ 
    return(
        <div>
<HeaderContact />                
<header class="ccheader">

    <h3>Nous contacter
</h3>	
</header>
<div class="wrapper">
    <form method="post" action="" class="ccform">
    <div class="ccfield-prepend">
        <span class="ccform-addon"><i class="fa fa-user fa-2x"></i></span>
        <input class="ccformfield" type="text" placeholder="Nom et prénom
" required/>
    </div>
    <div class="ccfield-prepend">
        <span class="ccform-addon"><i class="fa fa-envelope fa-2x"></i></span>
        <input class="ccformfield" type="text" placeholder="Email" required/>
    </div>
    <div class="ccfield-prepend">
        <span class="ccform-addon"><i class="fa fa-mobile-phone fa-2x"></i></span>
        <input class="ccformfield" type="text" placeholder="Téléphone"/>
    </div>
     <div class="ccfield-prepend">
        <span class="ccform-addon"><i class="fa fa-info fa-2x"></i></span>
        <input class="ccformfield" type="text" placeholder="Sujet" required/>
    </div>
    <div class="ccfield-prepend">
        <span class="ccform-addon"><i class="fa fa-comment fa-2x"></i></span>
        <textarea class="ccformfield" name="comments" rows="8" placeholder="Message" required></textarea>
    </div>
    <div class="ccfield-prepend">
        <input class="ccbtn" type="submit" value="Submit"/>
    </div>
    </form><br/>
</div>

<FooterFrontoffice/>

</div>
)
}