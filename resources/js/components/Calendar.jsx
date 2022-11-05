import React from 'react';

 
function  Profile() {
return (

            <div class="wrapper">
                
                <div class="leftside-menu">
        
                   
                    <a href="index.html" class="logo text-center logo-light">
                        <span class="logo-lg">
                            <img src="assets/images/logo.png" alt="" height="16"/>
                        </span>
                        <span class="logo-sm">
                            <img src="assets/images/logo_sm.png" alt="" height="16"/>
                        </span>
                    </a>
    
                 
                    <a href="index.html" class="logo text-center logo-dark">
                        <span class="logo-lg">
                            <img src="assets/images/logo-dark.png" alt="" height="16"/>
                        </span>
                        <span class="logo-sm">
                            <img src="assets/images/logo_sm_dark.png" alt="" height="16"/>
                        </span>
                    </a>
        
                    <div class="h-100" id="leftside-menu-container" data-simplebar="">
    
                     
                        <ul class="side-nav">
    
                            <li class="side-nav-title side-nav-item">Navigation</li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                    <i class="uil-home-alt"></i>
                                    <span class="badge bg-success float-end">4</span>
                                    <span> Dashboards </span>
                                </a>
                                <div class="collapse" id="sidebarDashboards">
                                    <ul class="side-nav-second-level">
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
    
                            <li class="side-nav-title side-nav-item">Apps</li>
    
                            <li class="side-nav-item">
                                <a href="apps-calendar.html" class="side-nav-link">
                                    <i class="uil-calender"></i>
                                    <span> Calendar </span>
                                </a>
                            </li>
    
                            <li class="side-nav-item">
                                <a href="apps-chat.html" class="side-nav-link">
                                    <i class="uil-comments-alt"></i>
                                    <span> Chat </span>
                                </a>
                            </li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" class="side-nav-link">
                                    <i class="uil-store"></i>
                                    <span> Ecommerce </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarEcommerce">
                                    <ul class="side-nav-second-level">
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
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" class="side-nav-link">
                                    <i class="uil-envelope"></i>
                                    <span> Email </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarEmail">
                                    <ul class="side-nav-second-level">
                                        <li>
                                            <a href="apps-email-inbox.html">Inbox</a>
                                        </li>
                                        <li>
                                            <a href="apps-email-read.html">Read Email</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" class="side-nav-link">
                                    <i class="uil-briefcase"></i>
                                    <span> Projects </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarProjects">
                                    <ul class="side-nav-second-level">
                                        <li>
                                            <a href="apps-projects-list.html">List</a>
                                        </li>
                                        <li>
                                            <a href="apps-projects-details.html">Details</a>
                                        </li>
                                        <li>
                                            <a href="apps-projects-gantt.html">Gantt <span class="badge rounded-pill badge-light-lighten font-10 float-end">New</span></a>
                                        </li>
                                        <li>
                                            <a href="apps-projects-add.html">Create Project <span class="badge rounded-pill badge-success-lighten font-10 float-end">New</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
    
                            <li class="side-nav-item">
                                <a href="apps-social-feed.html" class="side-nav-link">
                                    <i class="uil-rss"></i>
                                    <span> Social Feed </span>
                                </a>
                            </li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarTasks" aria-expanded="false" aria-controls="sidebarTasks" class="side-nav-link">
                                    <i class="uil-clipboard-alt"></i>
                                    <span> Tasks </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarTasks">
                                    <ul class="side-nav-second-level">
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
    
                            <li class="side-nav-item">
                                <a href="apps-file-manager.html" class="side-nav-link">
                                    <i class="uil-folder-plus"></i>
                                    <span> File Manager </span>
                                </a>
                            </li>
    
                            <li class="side-nav-title side-nav-item">Custom</li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarPages" aria-expanded="false" aria-controls="sidebarPages" class="side-nav-link">
                                    <i class="uil-copy-alt"></i>
                                    <span> Pages </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarPages">
                                    <ul class="side-nav-second-level">
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
                                        <li class="side-nav-item">
                                            <a data-bs-toggle="collapse" href="#sidebarPagesAuth" aria-expanded="false" aria-controls="sidebarPagesAuth">
                                                <span> Authentication </span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <div class="collapse" id="sidebarPagesAuth">
                                                <ul class="side-nav-third-level">
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
                                        <li class="side-nav-item">
                                            <a data-bs-toggle="collapse" href="#sidebarPagesError" aria-expanded="false" aria-controls="sidebarPagesError">
                                                <span> Error </span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <div class="collapse" id="sidebarPagesError">
                                                <ul class="side-nav-third-level">
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
    
                            <li class="side-nav-item">
                                <a href="landing.html" target="_blank" class="side-nav-link">
                                    <i class="uil-globe"></i>
                                    <span class="badge bg-secondary text-light float-end">New</span>
                                    <span> Landing </span>
                                </a>
                            </li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarLayouts" aria-expanded="false" aria-controls="sidebarLayouts" class="side-nav-link">
                                    <i class="uil-window"></i>
                                    <span> Layouts </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarLayouts">
                                    <ul class="side-nav-second-level">
                                        <li>
                                            <a href="layouts-horizontal.html">Horizontal</a>
                                        </li>
                                        <li>
                                            <a href="layouts-detached.html">Detached</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                
                            <li class="side-nav-title side-nav-item mt-1">Components</li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarBaseUI" aria-expanded="false" aria-controls="sidebarBaseUI" class="side-nav-link">
                                    <i class="uil-box"></i>
                                    <span> Base UI </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarBaseUI">
                                    <ul class="side-nav-second-level">
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
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarExtendedUI" aria-expanded="false" aria-controls="sidebarExtendedUI" class="side-nav-link">
                                    <i class="uil-package"></i>
                                    <span> Extended UI </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarExtendedUI">
                                    <ul class="side-nav-second-level">
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
    
                            <li class="side-nav-item">
                                <a href="widgets.html" class="side-nav-link">
                                    <i class="uil-layer-group"></i>
                                    <span> Widgets </span>
                                </a>
                            </li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarIcons" aria-expanded="false" aria-controls="sidebarIcons" class="side-nav-link">
                                    <i class="uil-streering"></i>
                                    <span> Icons </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarIcons">
                                    <ul class="side-nav-second-level">
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
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarForms" aria-expanded="false" aria-controls="sidebarForms" class="side-nav-link">
                                    <i class="uil-document-layout-center"></i>
                                    <span> Forms </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarForms">
                                    <ul class="side-nav-second-level">
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
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarCharts" aria-expanded="false" aria-controls="sidebarCharts" class="side-nav-link">
                                    <i class="uil-chart"></i>
                                    <span> Charts </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarCharts">
                                    <ul class="side-nav-second-level">
                                        <li class="side-nav-item">
                                            <a data-bs-toggle="collapse" href="#sidebarApexCharts" aria-expanded="false" aria-controls="sidebarApexCharts">
                                                <span> Apex Charts </span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <div class="collapse" id="sidebarApexCharts">
                                                <ul class="side-nav-third-level">
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
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarTables" aria-expanded="false" aria-controls="sidebarTables" class="side-nav-link">
                                    <i class="uil-table"></i>
                                    <span> Tables </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarTables">
                                    <ul class="side-nav-second-level">
                                        <li>
                                            <a href="tables-basic.html">Basic Tables</a>
                                        </li>
                                        <li>
                                            <a href="tables-datatable.html">Data Tables</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" class="side-nav-link">
                                    <i class="uil-location-point"></i>
                                    <span> Maps </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarMaps">
                                    <ul class="side-nav-second-level">
                                        <li>
                                            <a href="maps-google.html">Google Maps</a>
                                        </li>
                                        <li>
                                            <a href="maps-vector.html">Vector Maps</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
    
                            <li class="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarMultiLevel" aria-expanded="false" aria-controls="sidebarMultiLevel" class="side-nav-link">
                                    <i class="uil-folder-plus"></i>
                                    <span> Multi Level </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarMultiLevel">
                                    <ul class="side-nav-second-level">
                                        <li class="side-nav-item">
                                            <a data-bs-toggle="collapse" href="#sidebarSecondLevel" aria-expanded="false" aria-controls="sidebarSecondLevel">
                                                <span> Second Level </span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <div class="collapse" id="sidebarSecondLevel">
                                                <ul class="side-nav-third-level">
                                                    <li>
                                                        <a href="javascript: void(0);">Item 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript: void(0);">Item 2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="side-nav-item">
                                            <a data-bs-toggle="collapse" href="#sidebarThirdLevel" aria-expanded="false" aria-controls="sidebarThirdLevel">
                                                <span> Third Level </span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <div class="collapse" id="sidebarThirdLevel">
                                                <ul class="side-nav-third-level">
                                                    <li>
                                                        <a href="javascript: void(0);">Item 1</a>
                                                    </li>
                                                    <li class="side-nav-item">
                                                        <a data-bs-toggle="collapse" href="#sidebarFourthLevel" aria-expanded="false" aria-controls="sidebarFourthLevel">
                                                            <span> Item 2 </span>
                                                            <span class="menu-arrow"></span>
                                                        </a>
                                                        <div class="collapse" id="sidebarFourthLevel">
                                                            <ul class="side-nav-forth-level">
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
    
                        
                        <div class="help-box text-white text-center">
                            <a href="javascript: void(0);" class="float-end close-btn text-white">
                                <i class="mdi mdi-close"></i>
                            </a>
                            <img src="assets/images/help-icon.svg" height="90" alt="Helper Icon Image"/>
                            <h5 class="mt-3">Unlimited Access</h5>
                            <p class="mb-3">Upgrade to plan to get access to unlimited reports</p>
                            <a href="javascript: void(0);" class="btn btn-outline-light btn-sm">Upgrade</a>
                        </div>
                        
    
                        <div class="clearfix"></div>
    
                    </div>
                 
    
                </div>
                
    
                <div class="content-page">
                    <div class="content">
                        
                        <div class="navbar-custom">
                            <ul class="list-unstyled topbar-menu float-end mb-0">
                                <li class="dropdown notification-list d-lg-none">
                                    <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i class="dripicons-search noti-icon"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                        <form class="p-3">
                                            <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                        </form>
                                    </div>
                                </li>
                                <li class="dropdown notification-list topbar-dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <img src="assets/images/flags/us.jpg" alt="user-image" class="me-0 me-sm-1" height="12"/> 
                                        <span class="align-middle d-none d-sm-inline-block">English</span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
    
                                       
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <img src="assets/images/flags/germany.jpg" alt="user-image" class="me-1" height="12"/> <span class="align-middle">German</span>
                                        </a>
    
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <img src="assets/images/flags/italy.jpg" alt="user-image" class="me-1" height="12"/> <span class="align-middle">Italian</span>
                                        </a>
                    
                                  
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <img src="assets/images/flags/spain.jpg" alt="user-image" class="me-1" height="12"/> <span class="align-middle">Spanish</span>
                                        </a>
    
                                       
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <img src="assets/images/flags/russia.jpg" alt="user-image" class="me-1" height="12"/> <span class="align-middle">Russian</span>
                                        </a>
    
                                    </div>
                                </li>
    
                                <li class="dropdown notification-list">
                                    <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i class="dripicons-bell noti-icon"></i>
                                        <span class="noti-icon-badge"></span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
    
                                      
                                        <div class="dropdown-item noti-title">
                                            <h5 class="m-0">
                                                <span class="float-end">
                                                    <a href="javascript: void(0);" class="text-dark">
                                                        <small>Clear All</small>
                                                    </a>
                                                </span>Notification
                                            </h5>
                                        </div>
    
                                        <div style="max-height: 230px;" data-simplebar="">
                                        
                                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                <div class="notify-icon bg-primary">
                                                    <i class="mdi mdi-comment-account-outline"></i>
                                                </div>
                                                <p class="notify-details">Caleb Flakelar commented on Admin
                                                    <small class="text-muted">1 min ago</small>
                                                </p>
                                            </a>
    
                                      
                                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                <div class="notify-icon bg-info">
                                                    <i class="mdi mdi-account-plus"></i>
                                                </div>
                                                <p class="notify-details">New user registered.
                                                    <small class="text-muted">5 hours ago</small>
                                                </p>
                                            </a>
    
                                      
                                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                <div class="notify-icon">
                                                    <img src="assets/images/users/avatar-2.jpg" class="img-fluid rounded-circle" alt=""/> </div>
                                                <p class="notify-details">Cristina Pride</p>
                                                <p class="text-muted mb-0 user-msg">
                                                    <small>Hi, How are you? What about our next meeting</small>
                                                </p>
                                            </a>
    
                                      
                                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                <div class="notify-icon bg-primary">
                                                    <i class="mdi mdi-comment-account-outline"></i>
                                                </div>
                                                <p class="notify-details">Caleb Flakelar commented on Admin
                                                    <small class="text-muted">4 days ago</small>
                                                </p>
                                            </a>
    
                                          
                                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                <div class="notify-icon">
                                                    <img src="assets/images/users/avatar-4.jpg" class="img-fluid rounded-circle" alt=""/> </div>
                                                <p class="notify-details">Karen Robinson</p>
                                                <p class="text-muted mb-0 user-msg">
                                                    <small>Wow ! this admin looks good and awesome design</small>
                                                </p>
                                            </a>
    
                                        
                                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                <div class="notify-icon bg-info">
                                                    <i class="mdi mdi-heart"></i>
                                                </div>
                                                <p class="notify-details">Carlos Crouch liked
                                                    <b>Admin</b>
                                                    <small class="text-muted">13 days ago</small>
                                                </p>
                                            </a>
                                        </div>
    
                                     
                                        <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                                            View All
                                        </a>
    
                                    </div>
                                </li>
    
                                <li class="dropdown notification-list d-none d-sm-inline-block">
                                    <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i class="dripicons-view-apps noti-icon"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
    
                                        <div class="p-2">
                                            <div class="row g-0">
                                                <div class="col">
                                                    <a class="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/slack.png" alt="slack"/>
                                                        <span>Slack</span>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a class="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/github.png" alt="Github"/>
                                                        <span>GitHub</span>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a class="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                                                        <span>Dribbble</span>
                                                    </a>
                                                </div>
                                            </div>
    
                                            <div class="row g-0">
                                                <div class="col">
                                                    <a class="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                                        <span>Bitbucket</span>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a class="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                                                        <span>Dropbox</span>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a class="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/g-suite.png" alt="G Suite"/>
                                                        <span>G Suite</span>
                                                    </a>
                                                </div>
                                            </div> 
                                        </div>
    
                                    </div>
                                </li>
    
                                <li class="notification-list">
                                    <a class="nav-link end-bar-toggle" href="javascript: void(0);">
                                        <i class="dripicons-gear noti-icon"></i>
                                    </a>
                                </li>
    
                                <li class="dropdown notification-list">
                                    <a class="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <span class="account-user-avatar"> 
                                            <img src="assets/images/users/avatar-1.jpg" alt="user-image" class="rounded-circle"/>
                                        </span>
                                        <span>
                                            <span class="account-user-name">Soeng Souy</span>
                                            <span class="account-position">Founder</span>
                                        </span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                                      
                                        <div class=" dropdown-header noti-title">
                                            <h6 class="text-overflow m-0">Welcome !</h6>
                                        </div>
    
                                     
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <i class="mdi mdi-account-circle me-1"></i>
                                            <span>My Account</span>
                                        </a>
    
                                        
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <i class="mdi mdi-account-edit me-1"></i>
                                            <span>Settings</span>
                                        </a>
    
                                     
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <i class="mdi mdi-lifebuoy me-1"></i>
                                            <span>Support</span>
                                        </a>
    
                                     
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <i class="mdi mdi-lock-outline me-1"></i>
                                            <span>Lock Screen</span>
                                        </a>
    
                                      
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <i class="mdi mdi-logout me-1"></i>
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>
    
                            </ul>
                            <button class="button-menu-mobile open-left">
                                <i class="mdi mdi-menu"></i>
                            </button>
                            <div class="app-search dropdown d-none d-lg-block">
                                <form>
                                    <div class="input-group">
                                        <input type="text" class="form-control dropdown-toggle" placeholder="Search..." id="top-search"/>
                                        <span class="mdi mdi-magnify search-icon"></span>
                                        <button class="input-group-text btn-primary" type="submit">Search</button>
                                    </div>
                                </form>
    
                                <div class="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                                   
                                    <div class="dropdown-header noti-title">
                                        <h5 class="text-overflow mb-2">Found <span class="text-danger">17</span> results</h5>
                                    </div>
    
                                  
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="uil-notes font-16 me-1"></i>
                                        <span>Analytics Report</span>
                                    </a>
    
                                   
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="uil-life-ring font-16 me-1"></i>
                                        <span>How can I help you?</span>
                                    </a>
    
                                 
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="uil-cog font-16 me-1"></i>
                                        <span>User profile settings</span>
                                    </a>
    
                                    
                                    <div class="dropdown-header noti-title">
                                        <h6 class="text-overflow mb-2 text-uppercase">Users</h6>
                                    </div>
    
                                    <div class="notification-list">
                                        
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <div class="d-flex">
                                                <img class="d-flex me-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32"/>
                                                <div class="w-100">
                                                    <h5 class="m-0 font-14">Erwin Brown</h5>
                                                    <span class="font-12 mb-0">UI Designer</span>
                                                </div>
                                            </div>
                                        </a>
    
                                        
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <div class="d-flex">
                                                <img class="d-flex me-2 rounded-circle" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32"/>
                                                <div class="w-100">
                                                    <h5 class="m-0 font-14">Jacob Deo</h5>
                                                    <span class="font-12 mb-0">Developer</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="container-fluid">
                            
                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box">
                                        <div class="page-title-right">
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                                                <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                                                <li class="breadcrumb-item active">Profile</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Profile</h4>
                                    </div>
                                </div>
                            </div>     
                            
    
    
                            <div class="row">
                                <div class="col-sm-12">
                                   
                                    <div class="card bg-primary">
                                        <div class="card-body profile-user-box">
                                            <div class="row">
                                                <div class="col-sm-8">
                                                    <div class="row align-items-center">
                                                        <div class="col-auto">
                                                            <div class="avatar-lg">
                                                                <img src="assets/images/users/avatar-2.jpg" alt="" class="rounded-circle img-thumbnail"/>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div>
                                                                <h4 class="mt-1 mb-1 text-white">Michael Franklin</h4>
                                                                <p class="font-13 text-white-50"> Authorised Brand Seller</p>
        
                                                                <ul class="mb-0 list-inline text-light">
                                                                    <li class="list-inline-item me-3">
                                                                        <h5 class="mb-1">$ 25,184</h5>
                                                                        <p class="mb-0 font-13 text-white-50">Total Revenue</p>
                                                                    </li>
                                                                    <li class="list-inline-item">
                                                                        <h5 class="mb-1">5482</h5>
                                                                        <p class="mb-0 font-13 text-white-50">Number of Orders</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
    
                                                <div class="col-sm-4">
                                                    <div class="text-center mt-sm-0 mt-3 text-sm-end">
                                                        <button type="button" class="btn btn-light">
                                                            <i class="mdi mdi-account-edit me-1"></i> Edit Profile
                                                        </button>
                                                    </div>
                                                </div> 
                                            </div>
    
                                        </div> 
                                    </div>
                                </div> 
                            </div>
                            
    
    
                            <div class="row">
                                <div class="col-xl-4">
                                  
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="header-title mt-0 mb-3">Seller Information</h4>
                                            <p class="text-muted font-13">
                                                Hye, I’m Michael Franklin residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you want.
                                            </p>
    
                                            
    
                                            <div class="text-start">
                                                <p class="text-muted"><strong>Full Name :</strong> <span class="ms-2">Michael A. Franklin</span></p>
    
                                                <p class="text-muted"><strong>Mobile :</strong><span class="ms-2">(+12) 123 1234 567</span></p>
    
                                                <p class="text-muted"><strong>Email :</strong> <span class="ms-2">coderthemes@gmail.com</span></p>
    
                                                <p class="text-muted"><strong>Location :</strong> <span class="ms-2">USA</span></p>
    
                                                <p class="text-muted"><strong>Languages :</strong>
                                                    <span class="ms-2"> English, German, Spanish </span>
                                                </p>
                                                <p class="text-muted mb-0" id="tooltip-container"><strong>Elsewhere :</strong>
                                                    <a class="d-inline-block ms-2 text-muted" data-bs-container="#tooltip-container" data-bs-placement="top" data-bs-toggle="tooltip" href="" title="Facebook"><i class="mdi mdi-facebook"></i></a>
                                                    <a class="d-inline-block ms-2 text-muted" data-bs-container="#tooltip-container" data-bs-placement="top" data-bs-toggle="tooltip" href="" title="Twitter"><i class="mdi mdi-twitter"></i></a>
                                                    <a class="d-inline-block ms-2 text-muted" data-bs-container="#tooltip-container" data-bs-placement="top" data-bs-toggle="tooltip" href="" title="Skype"><i class="mdi mdi-skype"></i></a>
                                                </p>
    
                                            </div>
                                        </div>
                                    </div>
                              
                                    <div class="card text-white bg-info overflow-hidden">
                                        <div class="card-body">
                                            <div class="toll-free-box text-center">
                                                <h4> <i class="mdi mdi-deskphone"></i> Toll Free : 1-234-567-8901</h4>
                                            </div>
                                        </div> 
                                    </div> 
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="header-title mb-3">Messages</h4>
    
                                            <div class="inbox-widget">
                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="assets/images/users/avatar-2.jpg" class="rounded-circle" alt=""/></div>
                                                    <p class="inbox-item-author">Tomaslau</p>
                                                    <p class="inbox-item-text">I've finished it! See you so...</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>
                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="assets/images/users/avatar-3.jpg" class="rounded-circle" alt=""/></div>
                                                    <p class="inbox-item-author">Stillnotdavid</p>
                                                    <p class="inbox-item-text">This theme is awesome!</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>
                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="assets/images/users/avatar-4.jpg" class="rounded-circle" alt=""/></div>
                                                    <p class="inbox-item-author">Kurafire</p>
                                                    <p class="inbox-item-text">Nice to meet you</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>
    
                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="assets/images/users/avatar-5.jpg" class="rounded-circle" alt=""/></div>
                                                    <p class="inbox-item-author">Shahedk</p>
                                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>
                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="assets/images/users/avatar-6.jpg" class="rounded-circle" alt=""/></div>
                                                    <p class="inbox-item-author">Adhamdannaway</p>
                                                    <p class="inbox-item-text">This theme is awesome!</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 
    
                                </div> 
    
                                <div class="col-xl-8">
    
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="header-title mb-3">Orders & Revenue</h4>
                                            <div dir="ltr">
                                                <div style="height: 260px;" class="chartjs-chart">
                                                    <canvas id="high-performing-product"></canvas>
                                                </div>
                                            </div>        
                                        </div>
                                    </div>

    
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card tilebox-one">
                                                <div class="card-body">
                                                    <i class="dripicons-basket float-end text-muted"></i>
                                                    <h6 class="text-muted text-uppercase mt-0">Orders</h6>
                                                    <h2 class="m-b-20">1,587</h2>
                                                    <span class="badge bg-primary"> +11% </span> <span class="text-muted">From previous period</span>
                                                </div> 
                                            </div> 
                                        </div>
    
                                        <div class="col-sm-4">
                                            <div class="card tilebox-one">
                                                <div class="card-body">
                                                    <i class="dripicons-box float-end text-muted"></i>
                                                    <h6 class="text-muted text-uppercase mt-0">Revenue</h6>
                                                    <h2 class="m-b-20">$<span>46,782</span></h2>
                                                    <span class="badge bg-danger"> -29% </span> <span class="text-muted">From previous period</span>
                                                </div> 
                                            </div> 
                                        </div>
    
                                        <div class="col-sm-4">
                                            <div class="card tilebox-one">
                                                <div class="card-body">
                                                    <i class="dripicons-jewel float-end text-muted"></i>
                                                    <h6 class="text-muted text-uppercase mt-0">Product Sold</h6>
                                                    <h2 class="m-b-20">1,890</h2>
                                                    <span class="badge bg-primary"> +89% </span> <span class="text-muted">Last year</span>
                                                </div>
                                            </div> 
                                        </div>
    
                                    </div>
                                  
    
    
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="header-title mb-3">My Products</h4>
    
                                            <div class="table-responsive">
                                                <table class="table table-hover table-centered mb-0">
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
                                                            <td><span class="badge bg-primary">82 Pcs</span></td>
                                                            <td>$6,518.18</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Marco Lightweight Shirt</td>
                                                            <td>$128.50</td>
                                                            <td><span class="badge bg-primary">37 Pcs</span></td>
                                                            <td>$4,754.50</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Half Sleeve Shirt</td>
                                                            <td>$39.99</td>
                                                            <td><span class="badge bg-primary">64 Pcs</span></td>
                                                            <td>$2,559.36</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lightweight Jacket</td>
                                                            <td>$20.00</td>
                                                            <td><span class="badge bg-primary">184 Pcs</span></td>
                                                            <td>$3,680.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Marco Shoes</td>
                                                            <td>$28.49</td>
                                                            <td><span class="badge bg-primary">69 Pcs</span></td>
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
    
                 
                    <footer class="footer">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6">
                                    <script>document.write(new Date().getFullYear())</script> © Hyper - Coderthemes.com
                                </div>
                                <div class="col-md-6">
                                    <div class="text-md-end footer-links d-none d-md-block">
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
         
    
    
          
    
    
);
}

export default Profile;