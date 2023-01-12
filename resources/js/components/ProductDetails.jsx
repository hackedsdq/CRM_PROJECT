import React from 'react';
import p4 from'../../../public/assets/images/products/p4.png';import p3 from'../../../public/assets/images/products/p3.png';import p2 from'../../../public/assets/images/products/p2.png';import p1 from'../../../public/assets/images/products/p1.png';import p5 from'../../../public/assets/images/products/p5.png';import p6 from'../../../public/assets/images/products/p6.png';import p7 from'../../../public/assets/images/products/p7.png';import p8 from'../../../public/assets/images/products/p8.png';import p9 from'../../../public/assets/images/products/p9.png';import w1 from'../../../public/assets/images/products/w1.png';import w2 from'../../../public/assets/images/products/w2.png';import w3 from'../../../public/assets/images/products/w3.png';import slider from'../../../public/assets/images/products/slider.png';import banner1 from '../../../public/assets/images/products/banner1.jpg';import bigmatic from '../../../public/assets/images/products/bigmatic.jpg';import fevicon from '../../../public/assets/images/products/fevicon.png';import licb2 from'../../../public/assets/images/products/licb2.png'
import '../../../resources/css/ProductDetails.css'
import '../../css/style.css'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function ProductDetails({product}){
   const changeImage=(element) =>{
        let main_prodcut_image = document.getElementById('main_product_image');
        main_prodcut_image.src = element.src;
    }


    return(
        <div>
             <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"/>
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
                </span>
                </InertiaLink>
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
                    </a><span class="sr-only"></span></InertiaLink> 
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
                <InertiaLink href={`/ContactUs`}>
                    <a class="nav-link">
                      Contact Us
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
        <div class="container mt-5 mb-5">
            	<div class="card">
                    	<div class="row g-0">	
                        <div class="col-md-6 border-end">	
                        <div class="d-flex flex-column justify-content-center">	
                        <div class="main_image">
                        <img src={product.photo} id="main_product_image" width="350"/>
                        </div>
 
                   	</div>
                    	</div>
                        	<div class="col-md-6">	
                            <div class="p-3 right-side">
                            <div class="d-flex justify-content-between align-items-center">	
                            <h3>{product.nom}</h3>	
                            <span class="heart">
                                <i class='bx bx-heart'></i></span>	</div>
                                                            	<div class="mt-2 pr-3 content">
        <p>{product.description}</p>
    </div>
        <h3>{product.prix} Dn</h3>
        <div class="ratings d-flex flex-row align-items-center">	<div class="d-flex flex-row">	<i class='bx bxs-star' ></i>
        <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bx-star' ></i>	
            </div>
                <span>441 reviews</span>
                </div>	
                <div class="mt-5">
                        <span class="fw-bold">Colors</span>
                            <div class="colors">	
                <ul id="marker">	
                <li id="marker-1"></li>	
                <li id="marker-2"></li>
                <li id="marker-3"></li>	
                <li id="marker-4"></li>	
                <li id="marker-5"></li>	
                </ul>	
                </div>	
                </div>	
{/*                 <div class="buttons d-flex flex-row mt-5 gap-3">	
                <button class="btn btn-outline-dark">Buy Now</button>	
                <button class="btn btn-dark">Add to Basket</button>	
                </div> */}
	</div>	</div>	</div>
                    	</div> </div>
        </div>
    )
}