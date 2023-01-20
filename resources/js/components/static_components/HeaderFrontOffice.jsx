import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm } from '@inertiajs/inertia-react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react'
import'../../../css/ContactUs.css'
export default function HeaderFrontOffice({}) {
    return(
        <div>
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
                  Email HyperSociety.@gmail.com  
                </span>
              </a>
            </div>

            <div class="user_option_box">
              <a href="" class="account-link">
                <i class="fa fa-user" aria-hidden="true"></i>
                <InertiaLink href={`/login`}>
             <span>
                  S'authentifier
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
              <img width={200} src="../../../assets/images/logo.png" alt=""/>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item active">
                
                <InertiaLink href={`/`}>
                    <a class="nav-link">
                      Home
                    </a></InertiaLink> 
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
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
        </div>
    );
}