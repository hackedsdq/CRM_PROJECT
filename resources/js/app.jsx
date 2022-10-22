import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../js/bootstrap'
//import { InertiaProgress } from '@inertiajs/progress'

//InertiaProgress.init()


createInertiaApp({
  resolve: name => import(`./components/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
