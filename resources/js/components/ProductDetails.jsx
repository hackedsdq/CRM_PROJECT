import React from 'react';
import '../../../resources/css/ProductDetails.css'
import { InertiaLink } from '@inertiajs/inertia-react'
import HeaderContact from './static_components/HeaderContact';

export default function ProductDetails({product}){
   const changeImage=(element) =>{
        let main_prodcut_image = document.getElementById('main_product_image');
        main_prodcut_image.src = element.src;
    }


    return(
        <div>
          
      <HeaderContact />

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