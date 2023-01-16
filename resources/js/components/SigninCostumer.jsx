import React,{useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import {InertiaLink, useForm}  from "@inertiajs/inertia-react"

 
function SigninCostumer() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password :"", 

})
const  handleSubmit = (e) => {
    e.preventDefault()
    post('/login')
    console.log(data)
}

const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value
  if( inputType === "email")
  setData(data.email = inputValue )

  else if(inputType === "password")
  setData(data.password = inputValue)

}
return (
  <div class="auth-fluid">

  <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
          <div class="card-body">

              <div class="auth-brand text-center text-lg-start">
                  <a href="index.html" class="logo-dark">
                      <span><img src="https://res.cloudinary.com/dbttd3n1v/image/upload/v1671906267/logo_wwkgud.png" alt="" height="18"/></span>
                  </a>
                  <a href="index.html" class="logo-light">
                      <span><img src="https://res.cloudinary.com/dbttd3n1v/image/upload/v1671906267/logo_wwkgud.png" alt="" height="18"/></span>
                  </a>
              </div>

             
              <h4 class="mt-0">S'identifier</h4>
              <p class="text-muted mb-4">Entrez votre adresse e-mail et votre mot de passe pour accéder au compte.</p>


              <form action="#">
                  <div class="mb-3">
                      <label for="emailaddress" class="form-label">Adresse e-mail</label>
                      <input  onChange={(e)=>handleChange(e)} value={data.email} name="email" class="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email"/>
                      {errors.email && <h6 style={{color:"red"}}>{errors.email}</h6>}

                  </div>
                  <div class="mb-3">
                      <a href="pages-recoverpw-2.html" class="text-muted float-end"><small>Mot de passe oublié?</small></a>
                      <label for="password" class="form-label">Mot de passe
</label>
                      <input onChange={(e)=>handleChange(e)} value={data.password} name="password" class="form-control" type="password" required="" id="password" placeholder="Enter your password"/>
                      {errors.password && <h6 style={{color:"red"}}>{errors.password}</h6>}

                  </div>
                 
                  <div class="d-grid mb-0 text-center">
                      <button onClick={handleSubmit} class="btn btn-primary" type="submit"><i class="mdi mdi-login"></i> Connexion </button>
                  </div>
                  
              
              </form>
             

              <footer class="footer footer-alt">
                  <p class="text-muted">s'authentifier en tant que <InertiaLink href="/adcom/login" class=""><b>commercial/admin</b></InertiaLink></p>
              </footer>

          </div> 
      </div> 
  </div>
  
 

</div>
 /* <div className="loading authentication-bg" data-layout-config="{&quot;leftSideBarTheme&quot;:&quot;dark&quot;,&quot;layoutBoxed&quot;:false, &quot;leftSidebarCondensed&quot;:false, &quot;leftSidebarScrollable&quot;:false,&quot;darkMode&quot;:false, &quot;showRightSidebarOnStart&quot;: true}">
  <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-5">
          <div className="card">
           
            <div className=" card-header pt-4 pb-4 text-center bg-danger">
    <a href="index.html">
              <span><img src="assets/images/logo.png" alt height={18} /></span>
              </a>
    </div>

    <div className="card-body p-4">
              <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>
                <p className="text-muted mb-4">Enter your email address and password to access admin panel.</p>
              </div>
              <form action="#">
                <div className="mb-3">
                  <label htmlFor="emailaddress" className="form-label">Email address</label>
                  <input className="form-control" type="email" id="emailaddress" required placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <a href="pages-recoverpw.html" className="text-muted float-end"><small>Forgot your password?</small></a>
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group input-group-merge">
                    <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                    <div className="input-group-text" data-password="false">
                      <span className="password-eye" />
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox-signin" defaultChecked />
                    <label className="form-check-label" htmlFor="checkbox-signin">Remember me</label>
                  </div>
                </div>
                <div className="mb-3 mb-0 text-center">
                  <button className="btn btn-danger" type="submit"> Log In </button>
                </div>
              </form>
            </div> 
   
  </div>

</div></div></div></div></div> */
);
}

export default SigninCostumer;
