import React from 'react';

 
function  Profile() {
return (



            <div className="wrapper">

  <div className="leftside-menu">
    <a href="index.html" className="logo text-center logo-light">
      <span className="logo-lg">
        <img src="assets/images/logo.png" alt height={16} />
      </span>
      <span className="logo-sm">
        <img src="assets/images/logo_sm.png" alt height={16} />
      </span>
    </a>
    <a href="index.html" className="logo text-center logo-dark">
      <span className="logo-lg">
        <img src="assets/images/logo-dark.png" alt height={16} />
      </span>
      <span className="logo-sm">
        <img src="assets/images/logo_sm_dark.png" alt height={16} />
      </span>
    </a>
    <div className="h-100" id="leftside-menu-container" data-simplebar>
      <ul className="side-nav">
        <li className="side-nav-title side-nav-item">Navigation</li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false" aria-controls="sidebarDashboards" className="side-nav-link">
            <i className="uil-home-alt" />
            <span className="badge bg-success float-end">4</span>
            <span> Dashboards </span>
          </a>
          <div className="collapse" id="sidebarDashboards">
            <ul className="side-nav-second-level">
              <li>
                <a href="dashboard-analytics.html">Analytics</a>
              </li>
              <li>
                <a href="dashboard-crm.html">CRM</a>
              </li>
              <li>
                <a href="index.html">Ecommerce</a>
              </li>
              <li>
                <a href="dashboard-projects.html">Projects</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-title side-nav-item">Apps</li>
        <li className="side-nav-item">
          <a href="apps-calendar.html" className="side-nav-link">
            <i className="uil-calender" />
            <span> Calendar </span>
          </a>
        </li>
        <li className="side-nav-item">
          <a href="apps-chat.html" className="side-nav-link">
            <i className="uil-comments-alt" />
            <span> Chat </span>
          </a>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="side-nav-link">
            <i className="uil-store" />
            <span> Ecommerce </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarEcommerce">
            <ul className="side-nav-second-level">
              <li>
                <a href="apps-ecommerce-products.html">Products</a>
              </li>
              <li>
                <a href="apps-ecommerce-products-details.html">Products Details</a>
              </li>
              <li>
                <a href="apps-ecommerce-orders.html">Orders</a>
              </li>
              <li>
                <a href="apps-ecommerce-orders-details.html">Order Details</a>
              </li>
              <li>
                <a href="apps-ecommerce-customers.html">Customers</a>
              </li>
              <li>
                <a href="apps-ecommerce-shopping-cart.html">Shopping Cart</a>
              </li>
              <li>
                <a href="apps-ecommerce-checkout.html">Checkout</a>
              </li>
              <li>
                <a href="apps-ecommerce-sellers.html">Sellers</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" className="side-nav-link">
            <i className="uil-envelope" />
            <span> Email </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarEmail">
            <ul className="side-nav-second-level">
              <li>
                <a href="apps-email-inbox.html">Inbox</a>
              </li>
              <li>
                <a href="apps-email-read.html">Read Email</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" className="side-nav-link">
            <i className="uil-briefcase" />
            <span> Projects </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarProjects">
            <ul className="side-nav-second-level">
              <li>
                <a href="apps-projects-list.html">List</a>
              </li>
              <li>
                <a href="apps-projects-details.html">Details</a>
              </li>
              <li>
                <a href="apps-projects-gantt.html">Gantt <span className="badge rounded-pill badge-light-lighten font-10 float-end">New</span></a>
              </li>
              <li>
                <a href="apps-projects-add.html">Create Project <span className="badge rounded-pill badge-success-lighten font-10 float-end">New</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a href="apps-social-feed.html" className="side-nav-link">
            <i className="uil-rss" />
            <span> Social Feed </span>
          </a>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarTasks" aria-expanded="false" aria-controls="sidebarTasks" className="side-nav-link">
            <i className="uil-clipboard-alt" />
            <span> Tasks </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarTasks">
            <ul className="side-nav-second-level">
              <li>
                <a href="apps-tasks.html">List</a>
              </li>
              <li>
                <a href="apps-tasks-details.html">Details</a>
              </li>
              <li>
                <a href="apps-kanban.html">Kanban Board</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a href="apps-file-manager.html" className="side-nav-link">
            <i className="uil-folder-plus" />
            <span> File Manager </span>
          </a>
        </li>
        <li className="side-nav-title side-nav-item">Custom</li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarPages" aria-expanded="false" aria-controls="sidebarPages" className="side-nav-link">
            <i className="uil-copy-alt" />
            <span> Pages </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarPages">
            <ul className="side-nav-second-level">
              <li>
                <a href="pages-profile.html">Profile</a>
              </li>
              <li>
                <a href="pages-profile-2.html">Profile 2</a>
              </li>
              <li>
                <a href="pages-invoice.html">Invoice</a>
              </li>
              <li>
                <a href="pages-faq.html">FAQ</a>
              </li>
              <li>
                <a href="pages-pricing.html">Pricing</a>
              </li>
              <li>
                <a href="pages-maintenance.html">Maintenance</a>
              </li>
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarPagesAuth" aria-expanded="false" aria-controls="sidebarPagesAuth">
                  <span> Authentication </span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="sidebarPagesAuth">
                  <ul className="side-nav-third-level">
                    <li>
                      <a href="pages-login.html">Login</a>
                    </li>
                    <li>
                      <a href="pages-login-2.html">Login 2</a>
                    </li>
                    <li>
                      <a href="pages-register.html">Register</a>
                    </li>
                    <li>
                      <a href="pages-register-2.html">Register 2</a>
                    </li>
                    <li>
                      <a href="pages-logout.html">Logout</a>
                    </li>
                    <li>
                      <a href="pages-logout-2.html">Logout 2</a>
                    </li>
                    <li>
                      <a href="pages-recoverpw.html">Recover Password</a>
                    </li>
                    <li>
                      <a href="pages-recoverpw-2.html">Recover Password 2</a>
                    </li>
                    <li>
                      <a href="pages-lock-screen.html">Lock Screen</a>
                    </li>
                    <li>
                      <a href="pages-lock-screen-2.html">Lock Screen 2</a>
                    </li>
                    <li>
                      <a href="pages-confirm-mail.html">Confirm Mail</a>
                    </li>
                    <li>
                      <a href="pages-confirm-mail-2.html">Confirm Mail 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarPagesError" aria-expanded="false" aria-controls="sidebarPagesError">
                  <span> Error </span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="sidebarPagesError">
                  <ul className="side-nav-third-level">
                    <li>
                      <a href="pages-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="pages-404-alt.html">Error 404-alt</a>
                    </li>
                    <li>
                      <a href="pages-500.html">Error 500</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="pages-starter.html">Starter Page</a>
              </li>
              <li>
                <a href="pages-preloader.html">With Preloader</a>
              </li>
              <li>
                <a href="pages-timeline.html">Timeline</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a href="landing.html" target="_blank" className="side-nav-link">
            <i className="uil-globe" />
            <span className="badge bg-secondary text-light float-end">New</span>
            <span> Landing </span>
          </a>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarLayouts" aria-expanded="false" aria-controls="sidebarLayouts" className="side-nav-link">
            <i className="uil-window" />
            <span> Layouts </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarLayouts">
            <ul className="side-nav-second-level">
              <li>
                <a href="layouts-horizontal.html">Horizontal</a>
              </li>
              <li>
                <a href="layouts-detached.html">Detached</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-title side-nav-item mt-1">Components</li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarBaseUI" aria-expanded="false" aria-controls="sidebarBaseUI" className="side-nav-link">
            <i className="uil-box" />
            <span> Base UI </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarBaseUI">
            <ul className="side-nav-second-level">
              <li>
                <a href="ui-accordions.html">Accordions</a>
              </li>
              <li>
                <a href="ui-alerts.html">Alerts</a>
              </li>
              <li>
                <a href="ui-avatars.html">Avatars</a>
              </li>
              <li>
                <a href="ui-badges.html">Badges</a>
              </li>
              <li>
                <a href="ui-breadcrumb.html">Breadcrumb</a>
              </li>
              <li>
                <a href="ui-buttons.html">Buttons</a>
              </li>
              <li>
                <a href="ui-cards.html">Cards</a>
              </li>
              <li>
                <a href="ui-carousel.html">Carousel</a>
              </li>
              <li>
                <a href="ui-dropdowns.html">Dropdowns</a>
              </li>
              <li>
                <a href="ui-embed-video.html">Embed Video</a>
              </li>
              <li>
                <a href="ui-grid.html">Grid</a>
              </li>
              <li>
                <a href="ui-list-group.html">List Group</a>
              </li>
              <li>
                <a href="ui-modals.html">Modals</a>
              </li>
              <li>
                <a href="ui-notifications.html">Notifications</a>
              </li>
              <li>
                <a href="ui-offcanvas.html">Offcanvas</a>
              </li>
              <li>
                <a href="ui-pagination.html">Pagination</a>
              </li>
              <li>
                <a href="ui-popovers.html">Popovers</a>
              </li>
              <li>
                <a href="ui-progress.html">Progress</a>
              </li>
              <li>
                <a href="ui-ribbons.html">Ribbons</a>
              </li>
              <li>
                <a href="ui-spinners.html">Spinners</a>
              </li>
              <li>
                <a href="ui-tabs.html">Tabs</a>
              </li>
              <li>
                <a href="ui-tooltips.html">Tooltips</a>
              </li>
              <li>
                <a href="ui-typography.html">Typography</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarExtendedUI" aria-expanded="false" aria-controls="sidebarExtendedUI" className="side-nav-link">
            <i className="uil-package" />
            <span> Extended UI </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarExtendedUI">
            <ul className="side-nav-second-level">
              <li>
                <a href="extended-dragula.html">Dragula</a>
              </li>
              <li>
                <a href="extended-range-slider.html">Range Slider</a>
              </li>
              <li>
                <a href="extended-ratings.html">Ratings</a>
              </li>
              <li>
                <a href="extended-scrollbar.html">Scrollbar</a>
              </li>
              <li>
                <a href="extended-scrollspy.html">Scrollspy</a>
              </li>
              <li>
                <a href="extended-treeview.html">Treeview</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a href="widgets.html" className="side-nav-link">
            <i className="uil-layer-group" />
            <span> Widgets </span>
          </a>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarIcons" aria-expanded="false" aria-controls="sidebarIcons" className="side-nav-link">
            <i className="uil-streering" />
            <span> Icons </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarIcons">
            <ul className="side-nav-second-level">
              <li>
                <a href="icons-dripicons.html">Dripicons</a>
              </li>
              <li>
                <a href="icons-mdi.html">Material Design</a>
              </li>
              <li>
                <a href="icons-unicons.html">Unicons</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarForms" aria-expanded="false" aria-controls="sidebarForms" className="side-nav-link">
            <i className="uil-document-layout-center" />
            <span> Forms </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarForms">
            <ul className="side-nav-second-level">
              <li>
                <a href="form-elements.html">Basic Elements</a>
              </li>
              <li>
                <a href="form-advanced.html">Form Advanced</a>
              </li>
              <li>
                <a href="form-validation.html">Validation</a>
              </li>
              <li>
                <a href="form-wizard.html">Wizard</a>
              </li>
              <li>
                <a href="form-fileuploads.html">File Uploads</a>
              </li>
              <li>
                <a href="form-editors.html">Editors</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarCharts" aria-expanded="false" aria-controls="sidebarCharts" className="side-nav-link">
            <i className="uil-chart" />
            <span> Charts </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarCharts">
            <ul className="side-nav-second-level">
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarApexCharts" aria-expanded="false" aria-controls="sidebarApexCharts">
                  <span> Apex Charts </span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="sidebarApexCharts">
                  <ul className="side-nav-third-level">
                    <li>
                      <a href="charts-apex-area.html">Area</a>
                    </li>
                    <li>
                      <a href="charts-apex-bar.html">Bar</a>
                    </li>
                    <li>
                      <a href="charts-apex-bubble.html">Bubble</a>
                    </li>
                    <li>
                      <a href="charts-apex-candlestick.html">Candlestick</a>
                    </li>
                    <li>
                      <a href="charts-apex-column.html">Column</a>
                    </li>
                    <li>
                      <a href="charts-apex-heatmap.html">Heatmap</a>
                    </li>
                    <li>
                      <a href="charts-apex-line.html">Line</a>
                    </li>
                    <li>
                      <a href="charts-apex-mixed.html">Mixed</a>
                    </li>
                    <li>
                      <a href="charts-apex-pie.html">Pie</a>
                    </li>
                    <li>
                      <a href="charts-apex-radar.html">Radar</a>
                    </li>
                    <li>
                      <a href="charts-apex-radialbar.html">RadialBar</a>
                    </li>
                    <li>
                      <a href="charts-apex-scatter.html">Scatter</a>
                    </li>
                    <li>
                      <a href="charts-apex-sparklines.html">Sparklines</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="charts-brite.html">Britecharts</a>
              </li>
              <li>
                <a href="charts-chartjs.html">Chartjs</a>
              </li>
              <li>
                <a href="charts-sparkline.html">Sparklines</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarTables" aria-expanded="false" aria-controls="sidebarTables" className="side-nav-link">
            <i className="uil-table" />
            <span> Tables </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarTables">
            <ul className="side-nav-second-level">
              <li>
                <a href="tables-basic.html">Basic Tables</a>
              </li>
              <li>
                <a href="tables-datatable.html">Data Tables</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" className="side-nav-link">
            <i className="uil-location-point" />
            <span> Maps </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarMaps">
            <ul className="side-nav-second-level">
              <li>
                <a href="maps-google.html">Google Maps</a>
              </li>
              <li>
                <a href="maps-vector.html">Vector Maps</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="side-nav-item">
          <a data-bs-toggle="collapse" href="#sidebarMultiLevel" aria-expanded="false" aria-controls="sidebarMultiLevel" className="side-nav-link">
            <i className="uil-folder-plus" />
            <span> Multi Level </span>
            <span className="menu-arrow" />
          </a>
          <div className="collapse" id="sidebarMultiLevel">
            <ul className="side-nav-second-level">
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarSecondLevel" aria-expanded="false" aria-controls="sidebarSecondLevel">
                  <span> Second Level </span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="sidebarSecondLevel">
                  <ul className="side-nav-third-level">
                    <li>
                      <a href="javascript: void(0);">Item 1</a>
                    </li>
                    <li>
                      <a href="javascript: void(0);">Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarThirdLevel" aria-expanded="false" aria-controls="sidebarThirdLevel">
                  <span> Third Level </span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="sidebarThirdLevel">
                  <ul className="side-nav-third-level">
                    <li>
                      <a href="javascript: void(0);">Item 1</a>
                    </li>
                    <li className="side-nav-item">
                      <a data-bs-toggle="collapse" href="#sidebarFourthLevel" aria-expanded="false" aria-controls="sidebarFourthLevel">
                        <span> Item 2 </span>
                        <span className="menu-arrow" />
                      </a>
                      <div className="collapse" id="sidebarFourthLevel">
                        <ul className="side-nav-forth-level">
                          <li>
                            <a href="javascript: void(0);">Item 2.1</a>
                          </li>
                          <li>
                            <a href="javascript: void(0);">Item 2.2</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="help-box text-white text-center">
        <a href="javascript: void(0);" className="float-end close-btn text-white">
          <i className="mdi mdi-close" />
        </a>
        <img src="assets/images/help-icon.svg" height={90} alt="Helper Icon Image" />
        <h5 className="mt-3">Unlimited Access</h5>
        <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
        <a href="javascript: void(0);" className="btn btn-outline-light btn-sm">Upgrade</a>
      </div>
      <div className="clearfix" />
    </div>
  </div>
  <div className="content-page">
    <div className="content">
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
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
              </a>
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
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <div className="notify-icon bg-primary">
                    <i className="mdi mdi-comment-account-outline" />
                  </div>
                  <p className="notify-details">Caleb Flakelar commented on Admin
                    <small className="text-muted">1 min ago</small>
                  </p>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <div className="notify-icon bg-info">
                    <i className="mdi mdi-account-plus" />
                  </div>
                  <p className="notify-details">New user registered.
                    <small className="text-muted">5 hours ago</small>
                  </p>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <div className="notify-icon">
                    <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt /> </div>
                  <p className="notify-details">Cristina Pride</p>
                  <p className="text-muted mb-0 user-msg">
                    <small>Hi, How are you? What about our next meeting</small>
                  </p>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <div className="notify-icon bg-primary">
                    <i className="mdi mdi-comment-account-outline" />
                  </div>
                  <p className="notify-details">Caleb Flakelar commented on Admin
                    <small className="text-muted">4 days ago</small>
                  </p>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <div className="notify-icon">
                    <img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt /> </div>
                  <p className="notify-details">Karen Robinson</p>
                  <p className="text-muted mb-0 user-msg">
                    <small>Wow ! this admin looks good and awesome design</small>
                  </p>
                </a>
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
                </div> 
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
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <i className="mdi mdi-account-circle me-1" />
                <span>My Account</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <i className="mdi mdi-account-edit me-1" />
                <span>Settings</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <i className="mdi mdi-lifebuoy me-1" />
                <span>Support</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <i className="mdi mdi-lock-outline me-1" />
                <span>Lock Screen</span>
              </a>
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
            <div className="dropdown-header noti-title">
              <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
            </div>
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="uil-notes font-16 me-1" />
              <span>Analytics Report</span>
            </a>
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="uil-life-ring font-16 me-1" />
              <span>How can I help you?</span>
            </a>
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="uil-cog font-16 me-1" />
              <span>User profile settings</span>
            </a>
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
            </div>
            <div className="notification-list">
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="d-flex">
                  <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height={32} />
                  <div className="w-100">
                    <h5 className="m-0 font-14">Erwin Brown</h5>
                    <span className="font-12 mb-0">UI Designer</span>
                  </div>
                </div>
              </a>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                  <li className="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                  <li className="breadcrumb-item active">Profile</li>
                </ol>
              </div>
              <h4 className="page-title">Profile</h4>
            </div>
          </div>
        </div>     
        <div className="row">
          <div className="col-sm-12">
            <div className="card bg-primary">
              <div className="card-body profile-user-box">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <div className="avatar-lg">
                          <img src="assets/images/users/avatar-2.jpg" alt className="rounded-circle img-thumbnail" />
                        </div>
                      </div>
                      <div className="col">
                        <div>
                          <h4 className="mt-1 mb-1 text-white">Michael Franklin</h4>
                          <p className="font-13 text-white-50"> Authorised Brand Seller</p>
                          <ul className="mb-0 list-inline text-light">
                            <li className="list-inline-item me-3">
                              <h5 className="mb-1">$ 25,184</h5>
                              <p className="mb-0 font-13 text-white-50">Total Revenue</p>
                            </li>
                            <li className="list-inline-item">
                              <h5 className="mb-1">5482</h5>
                              <p className="mb-0 font-13 text-white-50">Number of Orders</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="col-sm-4">
                    <div className="text-center mt-sm-0 mt-3 text-sm-end">
                      <button type="button" className="btn btn-light">
                        <i className="mdi mdi-account-edit me-1" /> Edit Profile
                      </button>
                    </div>
                  </div> 
                </div>
              </div> 
            </div>
          </div> 
        </div>
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mt-0 mb-3">Seller Information</h4>
                <p className="text-muted font-13">
                  Hye, I’m Michael Franklin residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you want.
                </p>
                <div className="text-start">
                  <p className="text-muted"><strong>Full Name :</strong> <span className="ms-2">Michael A. Franklin</span></p>
                  <p className="text-muted"><strong>Mobile :</strong><span className="ms-2">(+12) 123 1234 567</span></p>
                  <p className="text-muted"><strong>Email :</strong> <span className="ms-2">coderthemes@gmail.com</span></p>
                  <p className="text-muted"><strong>Location :</strong> <span className="ms-2">USA</span></p>
                  <p className="text-muted"><strong>Languages :</strong>
                    <span className="ms-2"> English, German, Spanish </span>
                  </p>
                  <p className="text-muted mb-0" id="tooltip-container"><strong>Elsewhere :</strong>
                    <a className="d-inline-block ms-2 text-muted" data-bs-container="#tooltip-container" data-bs-placement="top" data-bs-toggle="tooltip" href title="Facebook"><i className="mdi mdi-facebook" /></a>
                    <a className="d-inline-block ms-2 text-muted" data-bs-container="#tooltip-container" data-bs-placement="top" data-bs-toggle="tooltip" href title="Twitter"><i className="mdi mdi-twitter" /></a>
                    <a className="d-inline-block ms-2 text-muted" data-bs-container="#tooltip-container" data-bs-placement="top" data-bs-toggle="tooltip" href title="Skype"><i className="mdi mdi-skype" /></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card text-white bg-info overflow-hidden">
              <div className="card-body">
                <div className="toll-free-box text-center">
                  <h4> <i className="mdi mdi-deskphone" /> Toll Free : 1-234-567-8901</h4>
                </div>
              </div> 
            </div> 
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-3">Messages</h4>
                <div className="inbox-widget">
                  <div className="inbox-item">
                    <div className="inbox-item-img"><img src="assets/images/users/avatar-2.jpg" className="rounded-circle" alt /></div>
                    <p className="inbox-item-author">Tomaslau</p>
                    <p className="inbox-item-text">I've finished it! See you so...</p>
                    <p className="inbox-item-date">
                      <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                    </p>
                  </div>
                  <div className="inbox-item">
                    <div className="inbox-item-img"><img src="assets/images/users/avatar-3.jpg" className="rounded-circle" alt /></div>
                    <p className="inbox-item-author">Stillnotdavid</p>
                    <p className="inbox-item-text">This theme is awesome!</p>
                    <p className="inbox-item-date">
                      <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                    </p>
                  </div>
                  <div className="inbox-item">
                    <div className="inbox-item-img"><img src="assets/images/users/avatar-4.jpg" className="rounded-circle" alt /></div>
                    <p className="inbox-item-author">Kurafire</p>
                    <p className="inbox-item-text">Nice to meet you</p>
                    <p className="inbox-item-date">
                      <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                    </p>
                  </div>
                  <div className="inbox-item">
                    <div className="inbox-item-img"><img src="assets/images/users/avatar-5.jpg" className="rounded-circle" alt /></div>
                    <p className="inbox-item-author">Shahedk</p>
                    <p className="inbox-item-text">Hey! there I'm available...</p>
                    <p className="inbox-item-date">
                      <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                    </p>
                  </div>
                  <div className="inbox-item">
                    <div className="inbox-item-img"><img src="assets/images/users/avatar-6.jpg" className="rounded-circle" alt /></div>
                    <p className="inbox-item-author">Adhamdannaway</p>
                    <p className="inbox-item-text">This theme is awesome!</p>
                    <p className="inbox-item-date">
                      <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                    </p>
                  </div>
                </div> 
              </div> 
            </div> 
          </div> 
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-3">Orders &amp; Revenue</h4>
                <div dir="ltr">
                  <div style={{height: 260}} className="chartjs-chart">
                    <canvas id="high-performing-product" />
                  </div>
                </div>        
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="card tilebox-one">
                  <div className="card-body">
                    <i className="dripicons-basket float-end text-muted" />
                    <h6 className="text-muted text-uppercase mt-0">Orders</h6>
                    <h2 className="m-b-20">1,587</h2>
                    <span className="badge bg-primary"> +11% </span> <span className="text-muted">From previous period</span>
                  </div> 
                </div> 
              </div>
              <div className="col-sm-4">
                <div className="card tilebox-one">
                  <div className="card-body">
                    <i className="dripicons-box float-end text-muted" />
                    <h6 className="text-muted text-uppercase mt-0">Revenue</h6>
                    <h2 className="m-b-20">$<span>46,782</span></h2>
                    <span className="badge bg-danger"> -29% </span> <span className="text-muted">From previous period</span>
                  </div> 
                </div> 
              </div>
              <div className="col-sm-4">
                <div className="card tilebox-one">
                  <div className="card-body">
                    <i className="dripicons-jewel float-end text-muted" />
                    <h6 className="text-muted text-uppercase mt-0">Product Sold</h6>
                    <h2 className="m-b-20">1,890</h2>
                    <span className="badge bg-primary"> +89% </span> <span className="text-muted">Last year</span>
                  </div>
                </div> 
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-3">My Products</h4>
                <div className="table-responsive">
                  <table className="table table-hover table-centered mb-0">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ASOS Ridley High Waist</td>
                        <td>$79.49</td>
                        <td><span className="badge bg-primary">82 Pcs</span></td>
                        <td>$6,518.18</td>
                      </tr>
                      <tr>
                        <td>Marco Lightweight Shirt</td>
                        <td>$128.50</td>
                        <td><span className="badge bg-primary">37 Pcs</span></td>
                        <td>$4,754.50</td>
                      </tr>
                      <tr>
                        <td>Half Sleeve Shirt</td>
                        <td>$39.99</td>
                        <td><span className="badge bg-primary">64 Pcs</span></td>
                        <td>$2,559.36</td>
                      </tr>
                      <tr>
                        <td>Lightweight Jacket</td>
                        <td>$20.00</td>
                        <td><span className="badge bg-primary">184 Pcs</span></td>
                        <td>$3,680.00</td>
                      </tr>
                      <tr>
                        <td>Marco Shoes</td>
                        <td>$28.49</td>
                        <td><span className="badge bg-primary">69 Pcs</span></td>
                        <td>$1,965.81</td>
                      </tr>
                    </tbody>
                  </table>
                </div> 
              </div> 
            </div> 
          </div>
        </div>
      </div> 
    </div>
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
  </div>
</div>
 

         
    
    
          

<<<<<<< HEAD
    
    
=======
>>>>>>> 6c73bd99e4bad560d18ef865d6fc260468546f43
);
}

export default Profile;