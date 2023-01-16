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

  }),

  setup({ el, App, props,name }) {
  render(<App {...props}  />, el)
  },
})
