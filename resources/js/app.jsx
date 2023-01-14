import React,{useEffect} from 'react'
import { render } from 'react-dom'
import { createInertiaApp,InertiaApp } from '@inertiajs/inertia-react'
import {Inertia} from '@inertiajs/inertia'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import '../js/bootstrap'
import { usePage } from '@inertiajs/inertia-react'

import "../../public/assets/css/icons.min.css"
import "../../public/assets/css/app-dark.min.css"

import '../css/app.css'


//import { InertiaProgress } from '@inertiajs/progress'

//InertiaProgress.init()

var loadScript = function (src) {
  var tag = document.createElement('script');
  tag.async = false;
  tag.src = src;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(tag);
}

/* //loadScript('./assets/js/pages/demo.dashboard-crm.js')
loadScript('./assets/js/ui/component.todo.js')
//loadScript('./assets/js/vendor/apexcharts.min.js')
loadScript('./assets/js/app.min.js')
loadScript('./assets/js/vendor.min.js') */



createInertiaApp({
  resolve: (name,) => import(`./components/${name}`).finally(()=>{
    if(name === "Home"){
     //console.log(isActive)
      /* let user_pic = props.initialPage.props.user_pic
      let user_nom = props.initialPage.props.user_nom
      let user_prenom = props.initialPage.props.user_prenom
      let user_role = props.initialPage.props.user_role
      let user_id = props.initialPage.props.user_id

    
      localStorage.setItem('user_id',user_id)
      localStorage.setItem('user_pic',user_pic)
      localStorage.setItem('user_nom',user_nom)
      localStorage.setItem('user_prenom',user_prenom)
      localStorage.setItem('user_role',user_role) */
      //console.log(props.initialPage)
      //alert(user_nom)
    }
  }),

  setup({ el, App, props,name }) {
  render(<App {...props}  />, el)
  },
})
