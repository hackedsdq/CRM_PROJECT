import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'



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
import FooterFrontoffice from './static_components/FooterFrontoffice';


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
                    Bienvenue dans notre société
                    </h1>
                    <h2>
                    Fournisseurs vérifiés et produits de la meilleure qualité
                    </h2>
                    <p>
                    Fournisseurs vérifiés et Notre société fonctionne en toute simplicité ! Que vous recherchiez le bon fournisseur pour votre projet ou le bon projet pour augmenter votre agenda de production, notre société est le bon endroit pour entrer en contact avec des clients potentiels!produits de la meilleure qualité
                    </p>
                  
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
        Nos produits
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
          Afficher le produit
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
          voir plus
       </InertiaLink>
      </div>
    </div>
  </section>


  <section class="about_section">
      <div class="row">
        <div class="col-md-5 offset-md-1 ml-auto">
          <div class="detail-box pr-md-3">
            <div class="heading_container">
              <h2>
              Nous vous offrons le meilleur
              </h2>
            </div>
            <p>
            Nous sommes fiers de ce que nos clients disent de nous et nous aimerions partager certains de leurs commentaires avec vous. Voici une collection de citations tirées directement de nos clients en réponse à cette question :
            Nous apprécions tous les commentaires que nos clients nous ont donnés au fil des ans. Merci de nous avoir permis de devenir votre partenaire de confiance dans la fabrication d'engrenages de précision. Nous continuerons à fournir la qualité et le service pour lesquels nous sommes devenus connus et continuerons à chercher de nouvelles façons de dépasser vos attentes.
            </p>
           
          </div>
        </div>
        <div class="col-md-6 px-0">
          <div class="img-box">
            <img src={banner1} alt=""/>
          </div>
        </div>
    </div>
  </section>

  

  <section class="why_us_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
        Pourquoi nous choisir
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
              Livraison rapide
              </h5>
           
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
              Livraison gratuite
              </h5>
             
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
              Meilleure qualité
              </h5>
             
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
        Ce que disent nos clients
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
                  Chez Gear Motions, la satisfaction du client est très importante pour nous.
                  C'est pourquoi nous aimons vérifier régulièrement avec nos clients et leur demander comment nous allons.
                   Lorsque nos clients nous font part de leurs commentaires, nous pouvons découvrir les domaines dans lesquels nous excellons et faire de notre mieux pour continuer à livrer favorablement dans ces domaines. Nous pouvons également en savoir plus sur les domaines dans lesquels nos clients pensent que nous pourrions être améliorés et travailler pour trouver de nouvelles façons d'améliorer leur expérience client.
                   Afin de recueillir des commentaires, nous demandons généralement à nos clients de répondre à une enquête de satisfaction environ une fois par an.
                   Vous trouverez ci-dessous quelques-uns des résultats de l'enquête de cette année qui pourraient vous intéresser.
                  </p>
                </div>
                <div class="client-id">
                  <div class="img-box">
                    <img src={bigmatic} alt=""/>
                    
                  </div>
                  <br />
                  <div class="name">
                    <h5>
                      bigMatic collaboration
                    </h5>
                  </div>
                  <div class="img-box">
                    <img src={licb2} alt=""/>
                    
                  </div>
                  <br />

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
            <span class="sr-only"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
            <span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
            <span class="sr-only"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
  
 <FooterFrontoffice/>

  </div>

)



}