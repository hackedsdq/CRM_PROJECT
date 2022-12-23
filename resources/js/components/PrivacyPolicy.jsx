import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import '../../css/style.css'
import '../../css/bootstrap.css'
import '../../css/font-awesome.min.css'
import '../../../public/assets/fonts/fontawesome-webfont.ttf'
import '../../../public/assets/fonts/fontawesome-webfont.woff'
import slider from'../../../public/assets/images/products/slider.png'
import { Inertia } from '@inertiajs/inertia';
export default function PrivacyPolicy({}){
    return(
        <div>      
            <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"/>  
        <div class="hero_area">
    
    <header class="header_section">
      <div class="header_top">
        <div class="container-fluid">
          <div class="top_nav_container">
            <div class="contact_nav">
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call : +213 5560616263
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  Email Society.@gmail.com
                </span>
              </a>
            </div>
            <from class="search_form">
              <input type="text" class="form-control" placeholder="Search here..."/>
              <button class="" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </from>
            <div class="user_option_box">
              <a href="" class="account-link">
                <i class="fa fa-user" aria-hidden="true"></i>
                <InertiaLink href={`/login`}>
             <span>
                  My Account
                </span></InertiaLink>
              </a>
             
            </div>
          </div>

        </div>
      </div>
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <img src="../../../assets/images/logo.png" alt=""/>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item active">
                
                <InertiaLink href={`/homeOffice`}>
                    <a class="nav-link">
                      Home
                    </a><span class="sr-only">(current)</span></InertiaLink> 
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html"> About</a>
                </li>
                <li class="nav-item">
                <InertiaLink href={`/Products`}>
                    <a class="nav-link">
                      Products
                    </a></InertiaLink>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="why.html">Why Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="testimonial.html">Testimonial</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div>
            <center> <h1>PRIVACY POLICY</h1></center><br/>
            <h3>What personal data we collect and why we collect it</h3><br/>
            <h5>comments</h5>
            <p>when visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.

              An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The privacy policy of the Gravatar service is available here: https://automattic.com/privacy/. After validation of your comment, your profile photo is publicly visible next to your comment.
          </p>
          <h5>Media</h5>
          <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Website visitors can download and extract all location data from images on the website.</p>
          <h5>Contact forms</h5><br/>
          <h5>Cookies</h5><br/>
          <p>f you leave a comment on our site, you may choose to save your name, email address and website in cookies. These are for your convenience so you don't have to fill in your details again when you leave another comment. These cookies will last for one year.

            If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie does not contain any personal data and is deleted when you close your browser.

            When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days and screen options cookies last for one year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, login cookies will be deleted.

            If you edit or publish an article, an additional cookie will be saved in your browser. This cookie does not contain any personal data and simply indicates the publication identifier of the article you have just edited. It expires after 1 day</p>
              <h5>Embedded content from other websites</h5><br/>
              <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in exactly the same way as if the visitor had visited the other website.

              These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that site. website.
              </p>
   </div>
  </div>
        
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
            <p>
            Privacy policy<br/>
            Terms and conditions<br/>
            Contact us<br/>
            Contact
            </p>
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
                    </a><span class="sr-only">(current)</span></InertiaLink> 
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
                <a href="testimonial.html">
                  Testimonial
                </a>
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
                <a href="https://html.design/">Free Html Templates</a>
              </p>
            </div>
          </footer>
          
          <script src="js/jquery-3.4.1.min.js"></script>
      
          <script src="js/bootstrap.js"></script>
       
          <script src="js/custom.js"></script>
        
        
</div>
    )
}