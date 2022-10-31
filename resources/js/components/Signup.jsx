import React from 'react'

export default function Signup() {
  return (
<div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-4 col-lg-5">
        <div className="card">
          {/* Logo*/}
          <div className="card-header pt-4 pb-4 text-center bg-primary">
            <a href="index.html">
              <span><img src="assets/images/logo.png" alt height={18} /></span>
            </a>
          </div>
          <div className="card-body p-4">
            <div className="text-center w-75 m-auto">
              <h4 className="text-dark-50 text-center mt-0 fw-bold">Free Sign Up</h4>
              <p className="text-muted mb-4">Don't have an account? Create your account, it takes less than a minute </p>
            </div>
            <form action="#">
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input className="form-control" type="text" id="fullname" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="emailaddress" className="form-label">Email address</label>
                <input className="form-control" type="email" id="emailaddress" required placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group input-group-merge">
                  <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                  <div className="input-group-text" data-password="false">
                    <span className="password-eye" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="checkbox-signup" />
                  <label className="form-check-label" htmlFor="checkbox-signup">I accept <a href="#" className="text-muted">Terms and Conditions</a></label>
                </div>
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-primary" type="submit"> Sign Up </button>
              </div>
            </form>
          </div> {/* end card-body */}
        </div>
        {/* end card */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="text-muted">Already have account? <a href="pages-login.html" className="text-muted ms-1"><b>Log In</b></a></p>
          </div> {/* end col*/}
        </div>
        {/* end row */}
      </div> {/* end col */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</div>

)
}
