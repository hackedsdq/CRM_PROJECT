import React,{useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import {useForm}  from "@inertiajs/inertia-react"

function Signin() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password :"", 

})
const  handleSubmit = (e) => {
    e.preventDefault()
    post('/adcom/login')
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
<div className="loading authentication-bg" data-layout-config="{&quot;leftSideBarTheme&quot;:&quot;dark&quot;,&quot;layoutBoxed&quot;:false, &quot;leftSidebarCondensed&quot;:false, &quot;leftSidebarScrollable&quot;:false,&quot;darkMode&quot;:false, &quot;showRightSidebarOnStart&quot;: true}">
  <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-5">
          <div className="card">
            {/* Logo */}
            <div className="card-header pt-4 pb-4 text-center bg-primary">
            <a href="index.html">
              <span><img src="https://res.cloudinary.com/dbttd3n1v/image/upload/v1671906267/logo_wwkgud.png" alt height={18} /></span>
              </a>
            </div>
            <div className="card-body p-4">
              <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>
                <p className="text-muted mb-4">Enter your email address and password to access admin panel.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="emailaddress" className="form-label">Email address</label>
                  <input onChange={(e)=>handleChange(e)} value={data.email} name="email" className="form-control" type="email" id="emailaddress" required placeholder="Enter your email" />
                  {errors.email && <h6 style={{color:"red"}}>{errors.email}</h6>}
                </div>
                <div className="mb-3">
                  <a href="pages-recoverpw.html" className="text-muted float-end"><small>Forgot your password?</small></a>
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group input-group-merge">
                    <input onChange={(e)=>handleChange(e)} value={data.password} name="password" type="password" id="password" className="form-control" placeholder="Enter your password" />
                    {errors.password && <h6 style={{color:"red"}}>{errors.password}</h6>}
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
                  <button className="btn btn-primary" type="submit"> Log In </button>
                </div>
              </form>
            </div> {/* end card-body */}
          </div>
          {/* end card */}
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-muted">Don't have an account? <a href="pages-register.html" className="text-muted ms-1"><b>Sign Up</b></a></p>
            </div> {/* end col */}
          </div>
          {/* end row */}
        </div> {/* end col */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </div>
</div>
);
}

export default Signin;