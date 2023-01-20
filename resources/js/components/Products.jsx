import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'

import HeaderContact from './static_components/HeaderContact';
import FooterFrontoffice from './static_components/FooterFrontoffice';

export default function Products({products}){
  return(
   <div>
    
    <HeaderContact />
    
    
    
      <section class="product_section layout_padding">
       <div class="container">
          <div style={{textAlign:"center"}}>
            <h2>
              Nos Produits
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
        </div>
      </section>
    
     
     <FooterFrontoffice/>

    
    </div>


)
}