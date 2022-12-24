import React from 'react'
import BarChart from '../charts/BarChart'
import PieChart from '../charts/PieChart'

export default function Main() {
  return (
<div className="content-page">
  <div className="content">

    {/* Start Content*/}
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a >Hyper</a></li>
                <li className="breadcrumb-item"><a >Dashboard</a></li>
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
                  <a href="#;" className="dropdown-item">Today</a>
                  {/* item*/}
                  <a href="#;" className="dropdown-item">Yesterday</a>
                  {/* item*/}
                  <a href="#;" className="dropdown-item">Last Week</a>
                  {/* item*/}
                  <a href="#;" className="dropdown-item">Last Month</a>
                </div>
              </div>
              <h4 className="header-title mb-1">Campaigns</h4>
              <div id="dash-campaigns-chart" className="apex-charts" data-colors="#ffbc00,#727cf5,#0acf97" />
              <BarChart />
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
                  <a href="#;" className="dropdown-item">Today</a>
                  {/* item*/}
                  <a href="#;" className="dropdown-item">Yesterday</a>
                  {/* item*/}
                  <a href="#;" className="dropdown-item">Last Week</a>
                  {/* item*/}
                  <a href="#;" className="dropdown-item">Last Month</a>
                </div>
              </div>
              <h4 className="header-title mb-3">Revenue</h4>
              <div className="chart-content-bg">
                <PieChart />
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
                  <a href="#;" className="dropdown-item">Settings</a>
                  {/* item*/}
                  <a href="#;" className="dropdown-item">Action</a>
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
                        <a  className="action-icon"> <i className="mdi mdi-eye" /></a>
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
                        <a  className="action-icon"> <i className="mdi mdi-eye" /></a>
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
                        <a  className="action-icon"> <i className="mdi mdi-eye" /></a>
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
                        <a  className="action-icon"> <i className="mdi mdi-eye" /></a>
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
                        <a  className="action-icon"> <i className="mdi mdi-eye" /></a>
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
                  <a href="#;" className="dropdown-item">Settings</a>
                  {/* item*/}
                  <a href="#;" className="dropdown-item">Action</a>
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
                  <a href="#;" className="dropdown-item">Settings</a>
                  {/* item*/}
                  <a href="#;" className="dropdown-item">Action</a>
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
            <a >About</a>
            <a >Support</a>
            <a >Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end Footer */}
</div>

  )
}
