import React from 'react'

export default function Main() {
  return (
<div className="content-page">
  <div className="content">
    {/* Topbar Start */}
    <div className="navbar-custom">
      <ul className="list-unstyled topbar-menu float-end mb-0">
        <li className="dropdown notification-list d-lg-none">
          <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="dripicons-search noti-icon" />
          </a>
          <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
            <form className="p-3">
              <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
            </form>
          </div>
        </li>
        <li className="dropdown notification-list topbar-dropdown">
          <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src="assets/images/flags/us.jpg" alt="user-image" className="me-0 me-sm-1" height={12} /> 
            <span className="align-middle d-none d-sm-inline-block">English</span> <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle" />
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
            </a>
          </div>
        </li>
        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="dripicons-bell noti-icon" />
            <span className="noti-icon-badge" />
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
            {/* item*/}
            <div className="dropdown-item noti-title">
              <h5 className="m-0">
                <span className="float-end">
                  <a href="javascript: void(0);" className="text-dark">
                    <small>Clear All</small>
                  </a>
                </span>Notification
              </h5>
            </div>
            <div style={{maxHeight: 230}} data-simplebar>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-primary">
                  <i className="mdi mdi-comment-account-outline" />
                </div>
                <p className="notify-details">Caleb Flakelar commented on Admin
                  <small className="text-muted">1 min ago</small>
                </p>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-info">
                  <i className="mdi mdi-account-plus" />
                </div>
                <p className="notify-details">New user registered.
                  <small className="text-muted">5 hours ago</small>
                </p>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon">
                  <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt /> </div>
                <p className="notify-details">Cristina Pride</p>
                <p className="text-muted mb-0 user-msg">
                  <small>Hi, How are you? What about our next meeting</small>
                </p>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-primary">
                  <i className="mdi mdi-comment-account-outline" />
                </div>
                <p className="notify-details">Caleb Flakelar commented on Admin
                  <small className="text-muted">4 days ago</small>
                </p>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon">
                  <img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt /> </div>
                <p className="notify-details">Karen Robinson</p>
                <p className="text-muted mb-0 user-msg">
                  <small>Wow ! this admin looks good and awesome design</small>
                </p>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-info">
                  <i className="mdi mdi-heart" />
                </div>
                <p className="notify-details">Carlos Crouch liked
                  <b>Admin</b>
                  <small className="text-muted">13 days ago</small>
                </p>
              </a>
            </div>
            {/* All*/}
            <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
              View All
            </a>
          </div>
        </li>
        <li className="dropdown notification-list d-none d-sm-inline-block">
          <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="dripicons-view-apps noti-icon" />
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
            <div className="p-2">
              <div className="row g-0">
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/slack.png" alt="slack" />
                    <span>Slack</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/github.png" alt="Github" />
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                    <span>Dribbble</span>
                  </a>
                </div>
              </div>
              <div className="row g-0">
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                    <span>Bitbucket</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                    <span>Dropbox</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/g-suite.png" alt="G Suite" />
                    <span>G Suite</span>
                  </a>
                </div>
              </div> {/* end row*/}
            </div>
          </div>
        </li>
        <li className="notification-list">
          <a className="nav-link end-bar-toggle" href="javascript: void(0);">
            <i className="dripicons-gear noti-icon" />
          </a>
        </li>
        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <span className="account-user-avatar"> 
              <img src="assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle" />
            </span>
            <span>
              <span className="account-user-name">Soeng Souy</span>
              <span className="account-position">Founder</span>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
            {/* item*/}
            <div className=" dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome !</h6>
            </div>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-account-circle me-1" />
              <span>My Account</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-account-edit me-1" />
              <span>Settings</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-lifebuoy me-1" />
              <span>Support</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-lock-outline me-1" />
              <span>Lock Screen</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-logout me-1" />
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
      <button className="button-menu-mobile open-left">
        <i className="mdi mdi-menu" />
      </button>
      <div className="app-search dropdown d-none d-lg-block">
        <form>
          <div className="input-group">
            <input type="text" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
            <span className="mdi mdi-magnify search-icon" />
            <button className="input-group-text btn-primary" type="submit">Search</button>
          </div>
        </form>
        <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
          {/* item*/}
          <div className="dropdown-header noti-title">
            <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
          </div>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="uil-notes font-16 me-1" />
            <span>Analytics Report</span>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="uil-life-ring font-16 me-1" />
            <span>How can I help you?</span>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="uil-cog font-16 me-1" />
            <span>User profile settings</span>
          </a>
          {/* item*/}
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
          </div>
          <div className="notification-list">
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="d-flex">
                <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height={32} />
                <div className="w-100">
                  <h5 className="m-0 font-14">Erwin Brown</h5>
                  <span className="font-12 mb-0">UI Designer</span>
                </div>
              </div>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="d-flex">
                <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height={32} />
                <div className="w-100">
                  <h5 className="m-0 font-14">Jacob Deo</h5>
                  <span className="font-12 mb-0">Developer</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* end Topbar */}
    {/* Start Content*/}
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                <li className="breadcrumb-item active">CRM</li>
              </ol>
            </div>
            <h4 className="page-title">CRM</h4>
          </div>
        </div>
      </div>     
      {/* end page title */} 
      <div className="row">
        <div className="col-lg-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-6">
                  <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Campaign Sent</h5>
                  <h3 className="my-2 py-1">9,184</h3>
                  <p className="mb-0 text-muted">
                    <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> 3.27%</span>
                  </p>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <div id="campaign-sent-chart" data-colors="#727cf5" />
                  </div>
                </div>
              </div> {/* end row*/}
            </div> {/* end card-body */}
          </div> {/* end card */}
        </div> {/* end col */}
        <div className="col-lg-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-6">
                  <h5 className="text-muted fw-normal mt-0 text-truncate" title="New Leads">New Leads</h5>
                  <h3 className="my-2 py-1">3,254</h3>
                  <p className="mb-0 text-muted">
                    <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" /> 5.38%</span>
                  </p>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <div id="new-leads-chart" data-colors="#0acf97" />
                  </div>
                </div>
              </div> {/* end row*/}
            </div> {/* end card-body */}
          </div> {/* end card */}
        </div> {/* end col */}
        <div className="col-lg-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-6">
                  <h5 className="text-muted fw-normal mt-0 text-truncate" title="Deals">Deals</h5>
                  <h3 className="my-2 py-1">861</h3>
                  <p className="mb-0 text-muted">
                    <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> 4.87%</span>
                  </p>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <div id="deals-chart" data-colors="#727cf5" />
                  </div>
                </div>
              </div> {/* end row*/}
            </div> {/* end card-body */}
          </div> {/* end card */}
        </div> {/* end col */}
        <div className="col-lg-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-6">
                  <h5 className="text-muted fw-normal mt-0 text-truncate" title="Booked Revenue">Booked Revenue</h5>
                  <h3 className="my-2 py-1">$253k</h3>
                  <p className="mb-0 text-muted">
                    <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> 11.7%</span>
                  </p>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <div id="booked-revenue-chart" data-colors="#0acf97" />
                  </div>
                </div>
              </div> {/* end row*/}
            </div> {/* end card-body */}
          </div> {/* end card */}
        </div> {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-vertical" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Today</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Yesterday</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Last Week</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Last Month</a>
                </div>
              </div>
              <h4 className="header-title mb-1">Campaigns</h4>
              <div id="dash-campaigns-chart" className="apex-charts" data-colors="#ffbc00,#727cf5,#0acf97" />
              <div className="row text-center mt-2">
                <div className="col-md-4">
                  <i className="mdi mdi-send widget-icon rounded-circle bg-light-lighten text-muted" />
                  <h3 className="fw-normal mt-3">
                    <span>6,510</span>
                  </h3>
                  <p className="text-muted mb-0 mb-2"><i className="mdi mdi-checkbox-blank-circle text-warning" /> Total Sent</p>
                </div>
                <div className="col-md-4">
                  <i className="mdi mdi-flag-variant widget-icon rounded-circle bg-light-lighten text-muted" />
                  <h3 className="fw-normal mt-3">
                    <span>3,487</span>
                  </h3>
                  <p className="text-muted mb-0 mb-2"><i className="mdi mdi-checkbox-blank-circle text-primary" /> Reached</p>
                </div>
                <div className="col-md-4">
                  <i className="mdi mdi-email-open widget-icon rounded-circle bg-light-lighten text-muted" />
                  <h3 className="fw-normal mt-3">
                    <span>1,568</span>
                  </h3>
                  <p className="text-muted mb-0 mb-2"><i className="mdi mdi-checkbox-blank-circle text-success" /> Opened</p>
                </div>
              </div>
            </div>
            {/* end card body*/}
          </div>
          {/* end card */}
        </div>
        {/* end col*/}
        <div className="col-lg-7">
          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-vertical" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Today</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Yesterday</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Last Week</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Last Month</a>
                </div>
              </div>
              <h4 className="header-title mb-3">Revenue</h4>
              <div className="chart-content-bg">
                <div className="row text-center">
                  <div className="col-md-6">
                    <p className="text-muted mb-0 mt-3">Current Month</p>
                    <h2 className="fw-normal mb-3">
                      <span>$42,025</span>
                    </h2>
                  </div>
                  <div className="col-md-6">
                    <p className="text-muted mb-0 mt-3">Previous Month</p>
                    <h2 className="fw-normal mb-3">
                      <span>$74,651</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div dir="ltr">
                <div id="dash-revenue-chart" className="apex-charts" data-colors="#0acf97,#fa5c7c" />
              </div>
            </div>
            {/* end card body*/}
          </div>
          {/* end card */}
        </div>
        {/* end col*/}
      </div>
      {/* end row*/}
      <div className="row">
        <div className="col-xl-4 col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-vertical" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Settings</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Action</a>
                </div>
              </div>
              <h4 className="header-title mb-3">Top Performing</h4>
              <div className="table-responsive">
                <table className="table table-striped table-sm table-nowrap table-centered mb-0">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Leads</th>
                      <th>Deals</th>
                      <th>Tasks</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h5 className="font-15 mb-1 fw-normal">Jeremy Young</h5>
                        <span className="text-muted font-13">Senior Sales Executive</span>
                      </td>
                      <td>187</td>
                      <td>154</td>
                      <td>49</td>
                      <td className="table-action">
                        <a href="javascript: void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 className="font-15 mb-1 fw-normal">Thomas Krueger</h5>
                        <span className="text-muted font-13">Senior Sales Executive</span>
                      </td>
                      <td>235</td>
                      <td>127</td>
                      <td>83</td>
                      <td className="table-action">
                        <a href="javascript: void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 className="font-15 mb-1 fw-normal">Pete Burdine</h5>
                        <span className="text-muted font-13">Senior Sales Executive</span>
                      </td>
                      <td>365</td>
                      <td>148</td>
                      <td>62</td>
                      <td className="table-action">
                        <a href="javascript: void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 className="font-15 mb-1 fw-normal">Mary Nelson</h5>
                        <span className="text-muted font-13">Senior Sales Executive</span>
                      </td>
                      <td>753</td>
                      <td>159</td>
                      <td>258</td>
                      <td className="table-action">
                        <a href="javascript: void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 className="font-15 mb-1 fw-normal">Kevin Grove</h5>
                        <span className="text-muted font-13">Senior Sales Executive</span>
                      </td>
                      <td>458</td>
                      <td>126</td>
                      <td>73</td>
                      <td className="table-action">
                        <a href="javascript: void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> {/* end table-responsive*/}
            </div> {/* end card-body*/}
          </div> {/* end card*/}
        </div>
        {/* end col*/}
        <div className="col-xl-4 col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-vertical" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Settings</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Action</a>
                </div>
              </div>
              <h4 className="header-title mb-4">Recent Leads</h4>
              <div className="d-flex align-items-start">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-2.jpg" width={40} alt="Generic placeholder image" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-warning-lighten float-end">Cold lead</span>
                  <h5 className="mt-0 mb-1">Risa Pearson</h5>
                  <span className="font-13">richard.john@mail.com</span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-3.jpg" width={40} alt="Generic placeholder image" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-danger-lighten float-end">Lost lead</span>
                  <h5 className="mt-0 mb-1">Margaret D. Evans</h5>
                  <span className="font-13">margaret.evans@rhyta.com</span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-4.jpg" width={40} alt="Generic placeholder image" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-success-lighten float-end">Won lead</span>
                  <h5 className="mt-0 mb-1">Bryan J. Luellen</h5>
                  <span className="font-13">bryuellen@dayrep.com</span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-5.jpg" width={40} alt="Generic placeholder image" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-warning-lighten float-end">Cold lead</span>
                  <h5 className="mt-0 mb-1">Kathryn S. Collier</h5>
                  <span className="font-13">collier@jourrapide.com</span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-1.jpg" width={40} alt="Generic placeholder image" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-warning-lighten float-end">Cold lead</span>
                  <h5 className="mt-0 mb-1">Timothy Kauper</h5>
                  <span className="font-13">thykauper@rhyta.com</span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-6.jpg" width={40} alt="Generic placeholder image" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-success-lighten float-end">Won lead</span>
                  <h5 className="mt-0 mb-1">Zara Raws</h5>
                  <span className="font-13">austin@dayrep.com</span>
                </div>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card*/}
        </div>
        {/* end col */}  
        <div className="col-xl-4 col-lg-6">
          <div className="card cta-box bg-primary text-white">
            <div className="card-body">
              <div className="d-flex align-items-start align-items-center">
                <div className="w-100 overflow-hidden">
                  <h2 className="mt-0"><i className="mdi mdi-bullhorn-outline" />&nbsp;</h2>
                  <h3 className="m-0 fw-normal cta-box-title">Enhance your <b>Campaign</b> for better outreach <i className="mdi mdi-arrow-right" /></h3>
                </div>
                <img className="ms-3" src="assets/images/email-campaign.svg" width={120} alt="Generic placeholder image" />
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card*/}
          {/* Todo*/}
          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-vertical" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Settings</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Action</a>
                </div>
              </div>
              <h4 className="header-title mb-2">Todo</h4>
              <div className="todoapp">
                <div data-simplebar style={{maxHeight: 224}}>
                  <ul className="list-group list-group-flush todo-list" id="todo-list" />
                </div>
              </div> {/* end .todoapp*/}
            </div> {/* end card-body */}
          </div> {/* end card*/}
        </div>
        {/* end col */}  
      </div>
      {/* end row*/}
    </div> {/* container */}
  </div> {/* content */}
  {/* Footer Start */}
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          © Hyper - Coderthemes.com
        </div>
        <div className="col-md-6">
          <div className="text-md-end footer-links d-none d-md-block">
            <a href="javascript: void(0);">About</a>
            <a href="javascript: void(0);">Support</a>
            <a href="javascript: void(0);">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end Footer */}
</div>

  )
}
