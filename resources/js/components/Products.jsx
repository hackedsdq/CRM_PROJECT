import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import '../../css/style.css'

import HeaderContact from './static_components/HeaderContact';

export default function Products({products}){
  return(
   <div>
    
    <HeaderContact />
    
    
    
      <section class="product_section layout_padding">
       <div class="container">
          <div class="heading_container heading_center">
            <h2>
              Our Products
            </h2>
          </div>
          <div class="row">


{ products.map((item, index)=>{
  return(
    <div key={index} class="col-sm-6 col-lg-4">
    <div class="box">
      <div class="img-box">
        <img src={item.photo} alt=""/>
        <InertiaLink class="add_cart_btn" href={`ProductDetails/${item.id}`}>
          <span>
            Show Product
          </span>
        </InertiaLink>
      </div>
      <div class="detail-box">
        <h4 style={{}}>
          {item.nom}
        </h4>
        <div class="product_info">
          <h5>
            <span>Dn</span> {item.prix}
          </h5>
{/*           <div class="star_container">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  )
})}


          </div>
          <div class="btn_box">
            <a href="" class="view_more-link">
              View More
            </a>
          </div>
        </div>
      </section>
    
     
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
                    <a>
                    Privacy Policy
                    </a></InertiaLink> <br/>
              <a href=''>Terms and conditions</a>
            <br/>
            <InertiaLink href={`/ContactUs`}>
                    <a class="nav-link">
                     Contact Us
                    </a></InertiaLink>
            
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_links">
            <h5>
              Useful Link
            </h5>
            <ul>
              <li>
              <InertiaLink href={`/homeOffice`}>
                    <a class="nav-link">
                      Home
                    </a><span class="sr-only"></span></InertiaLink> 
              </li>
              <li>
                <a href="about.html">
                  About
                </a>
              </li>
              <li>
              <InertiaLink href={`/Products`}>
                    <a class="nav-link">
                      Products
                    </a></InertiaLink>
              </li>
              <li>
                <a href="why.html">
                  Why Us
                </a>
              </li>
              <li>
              <InertiaLink href={`/ContactUs`}>
                    <a class="nav-link">
                      Contact Us
                    </a><span class="sr-only"></span></InertiaLink> 
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_form ">
            <h5>
              Newsletter
            </h5>
            <p>Be the first to know. Sign up for the newsletter today!</p>
            <form action="">
              <input type="email" placeholder="Enter your email"/>
              <button>
                Subscribe
              </button>
            </form>
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
        
        <InertiaLink href={`/homeOffice`}>
                    <a class="nav-link">
                    HyperSociety
                    </a></InertiaLink>
      </p>
    </div>
  </footer>

      
      <script src="js/jquery-3.4.1.min.js"></script>
      
      <script src="js/bootstrap.js"></script>
     
      <script src="js/custom.js"></script>
    
    
    
    </div>


)
}