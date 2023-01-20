import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import '../../../css/style.css'

export default function FooterFrontoffice(){
    return(
     <div>
 <section class="info_section ">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="info_contact">
            <h5>
              <a href="" class="navbar-brand">
              <img src="../../../assets/images/logo.png" alt=""/>
              </a>
            </h5>
            <p>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              Address:Tlemcen 13000 Algeria
            </p>
            <p>
              <i class="fa fa-phone" aria-hidden="true"></i>
              +213 5560616263
            </p>
            <p>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              HyperSociety@gmail.com
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_info">
            <h5>
              Information
            </h5>
            <InertiaLink href={`/PrivacyPolicy`}>
                  
                    Privacy Policy
                   </InertiaLink> <br/>
           
            <InertiaLink href={`/ContactUs`}>
                   
                     Contact nous
                   </InertiaLink>
            
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_links">
            <h5>
            Lien utile
            </h5>
            <ul>
            <li>
              <InertiaLink href={`/calendar`} >
                  
                Calendrier
                   </InertiaLink> 
              </li>
              <li>
              <InertiaLink href={`/opportunities`} >
                  
                Opportunités
                   </InertiaLink> 
              </li>
              
              <li>
              <InertiaLink href={`/Products`}>
                  
                      Produits
                   </InertiaLink>
              </li>
            
              
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_form ">
         
           
            <div class="social_box">
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <footer class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
      </p>
    </div>
  </footer>
</div>);
}