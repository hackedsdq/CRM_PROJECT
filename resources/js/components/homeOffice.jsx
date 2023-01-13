import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import '../../css/style.css'



import p4 from'../../../public/assets/images/products/p4.png';
import p3 from'../../../public/assets/images/products/p3.png';
import p2 from'../../../public/assets/images/products/p2.png';
import p1 from'../../../public/assets/images/products/p1.png';
import p5 from'../../../public/assets/images/products/p5.png';
import p6 from'../../../public/assets/images/products/p6.png';
import p7 from'../../../public/assets/images/products/p7.png';
import p8 from'../../../public/assets/images/products/p8.png';
import p9 from'../../../public/assets/images/products/p9.png';
import w1 from'../../../public/assets/images/products/w1.png';
import w2 from'../../../public/assets/images/products/w2.png';
import w3 from'../../../public/assets/images/products/w3.png';
import slider from'../../../public/assets/images/products/slider.png';
import banner1 from '../../../public/assets/images/products/banner1.jpg';
import bigmatic from '../../../public/assets/images/products/bigmatic.jpg';
import fevicon from '../../../public/assets/images/products/fevicon.png';
import licb2 from'../../../public/assets/images/products/licb2.png'
import HeaderContact from './static_components/HeaderContact';


export default function homeOffice({products}){

return(

<div>
  <HeaderContact />
  <div class="hero_area">
    
   
    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Welcome to our society
                    </h1>
                    <h2>
                    verified Suppliers and best quality Products
                    </h2>
                    <p>
                    Our society works straightforwardly! Whether you are looking for the right supplier for your project or the right project to increase your production agenda,our society is the right place to connect with potential clients!
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src={p9} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  
  </div>

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

        </div>
      </div>
    </div>
  </div>
  )
})}

      </div>
      <div class="btn_box">
        <InertiaLink href='/Products' class="view_more-link">
          View More
        </InertiaLink>
      </div>
    </div>
  </section>


  <section class="about_section">
    <div class="container-fluid  ">
      <div class="row">
        <div class="col-md-5 ml-auto">
          <div class="detail-box pr-md-3">
            <div class="heading_container">
              <h2>
                We Provide Best For You
              </h2>
            </div>
            <p>
            We are proud of the things our customers are saying about us, and we’d like to share some of their comments with you. Here is a collection of quotes taken directly from our customers in response to this question:
            We appreciate all of the feedback our customers have given us over the years. Thank you for allowing us to become your trusted precision gear manufacturing partner. We will continue to provide the quality and service we’ve become known for and will continue to look for new ways to exceed your expectations.
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
        <div class="col-md-6 px-0">
          <div class="img-box">
            <img src={banner1} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>

  

  <section class="why_us_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Why Choose Us
        </h2>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="box ">
            <div class="img-box">
              <img src={w1} alt=""/>
            </div>
            <div class="detail-box">
              <h5>
                Fast Delivery
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box ">
            <div class="img-box">
              <img src={w2} alt=""/>
            </div>
            <div class="detail-box">
              <h5>
                Free Shiping
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box ">
            <div class="img-box">
              <img src={w3} alt=""/>
            </div>
            <div class="detail-box">
              <h5>
                Best Quality
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 

  <section class="client_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          What Says Our Customers
        </h2>
      </div>
    </div>
    <div class="client_container ">
      <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="box">
                <div class="detail-box">
                  <p>
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </p>
                  <p>
                  At Gear Motions, customer satisfaction is very important to us. 
                  That’s why we like to regularly check in with our customers and ask them how we’re doing.
                   When our customers provide us with feedback, we can learn about which areas we are excelling in and do our best to keep delivering favorably in those areas. We can also learn about areas where our customers feel we could use improvement, and work to find new ways to enhance their customer experience.
                   As a means of collecting feedback, we generally ask our customers to complete a customer satisfaction survey about once a year. 
                   Below are some of the results from this year’s survey that we think you may be interested in.
                  </p>
                </div>
                <div class="client-id">
                  <div class="img-box">
                    <img src={bigmatic} alt=""/>
                    
                  </div>
                  <div class="name">
                    <h5>
                      bigMatic collaboration
                    </h5>
                   
                  </div>
                  <div class="img-box">
                    <img src={licb2} alt=""/>
                    
                  </div>
                  <div class="name">
                    <h5>
                     LICB+ collaboration
                    </h5>
                   
                  </div>
                </div>
              
                
                
            
                 
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="box">
                <div class="detail-box">
                  <p>
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </p>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it lookIt is a
                    long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look
                  </p>
                </div>
                <div class="client-id">
                  <div class="img-box">
                    <img src={bigmatic} alt=""/>
                  </div>
                  <div class="name">
                    <h5>
                     BigMatic collaboration
                    </h5>
                    <h6>
                      Photographer
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="box">
                <div class="detail-box">
                  <p>
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </p>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it lookIt is a
                    long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look
                  </p>
                </div>
                <div class="client-id">
                  <div class="img-box">
                    <img src="images/client.jpg" alt=""/>
                  </div>
                  <div class="name">
                    <h5>
                      James Dew
                    </h5>
                    <h6>
                      Photographer
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel_btn-box">
          <a class="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
            <span>
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
            <span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
            <span class="sr-only">Next</span>
          </a>
        </div>
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

  </div>

)



}