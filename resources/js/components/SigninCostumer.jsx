import React,{useState} from 'react';
import { Inertia } from '@inertiajs/inertia';

 
function SigninCostumer() {
  const [values, setValues] = useState({
    email:"hamiddz@gmail.com",
    password:"12345678",
  })

const  handleSubmit = (e) => {
    e.preventDefault()
    Inertia.post('/login', values)
    console.log('submitted')
  }

return (
  <div class="auth-fluid">

  <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
          <div class="card-body">

              <div class="auth-brand text-center text-lg-start">
                  <a href="index.html" class="logo-dark">
                      <span><img src="assets/images/logo-dark.png" alt="" height="18"/></span>
                  </a>
                  <a href="index.html" class="logo-light">
                      <span><img src="assets/images/logo.png" alt="" height="18"/></span>
                  </a>
              </div>

             
              <h4 class="mt-0">Sign In</h4>
              <p class="text-muted mb-4">Enter your email address and password to access account.</p>


              <form action="#">
                  <div class="mb-3">
                      <label for="emailaddress" class="form-label">Email address</label>
                      <input class="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email"/>
                  </div>
                  <div class="mb-3">
                      <a href="pages-recoverpw-2.html" class="text-muted float-end"><small>Forgot your password?</small></a>
                      <label for="password" class="form-label">Password</label>
                      <input class="form-control" type="password" required="" id="password" placeholder="Enter your password"/>
                  </div>
                  <div class="mb-3">
                      <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="checkbox-signin"/>
                          <label class="form-check-label" for="checkbox-signin">Remember me</label>
                      </div>
                  </div>
                  <div class="d-grid mb-0 text-center">
                      <button onClick={handleSubmit} class="btn btn-primary" type="submit"><i class="mdi mdi-login"></i> Log In </button>
                  </div>
                  
                  <div class="text-center mt-4">
                      <p class="text-muted font-16">Sign in with</p>
                      <ul class="social-list list-inline mt-3">
                          <li class="list-inline-item">
                              <a href="javascript: void(0);" class="social-list-item border-primary text-primary"><i class="mdi mdi-facebook"></i></a>
                          </li>
                          <li class="list-inline-item">
                              <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i class="mdi mdi-google"></i></a>
                          </li>
                          <li class="list-inline-item">
                              <a href="javascript: void(0);" class="social-list-item border-info text-info"><i class="mdi mdi-twitter"></i></a>
                          </li>
                          <li class="list-inline-item">
                              <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i class="mdi mdi-github"></i></a>
                          </li>
                      </ul>
                  </div>
              </form>
             

              <footer class="footer footer-alt">
                  <p class="text-muted">Don't have an account? <a href="pages-register-2.html" class="text-muted ms-1"><b>Sign Up</b></a></p>
              </footer>

          </div> 
      </div> 
  </div>
  
  <div class="auth-fluid-right text-center">
      <div class="auth-user-testimonial">
          <h2 class="mb-3">I love the color!</h2>
          <p class="lead"><i class="mdi mdi-format-quote-open"></i> It's a elegent templete. I love it very much! . <i class="mdi mdi-format-quote-close"></i>
          </p>
          <p>
              - Hyper Admin User
          </p>
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
