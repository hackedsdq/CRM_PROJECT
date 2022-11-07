<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
    <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">


<link rel="stylesheet" href="{{URL::asset('plugins/fontawesome-free/css/all.min.css')}}">

<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

<link rel="stylesheet" href="{{URL::asset('plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/jqvmap/jqvmap.min.css')}}">
<link rel="stylesheet" href="{{URL::asset('dist/css/adminlte.min.css?v=3.2.0')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/daterangepicker/daterangepicker.css')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/summernote/summernote-bs4.min.css')}}"> -->
   

<!-- App favicon -->
<link rel="shortcut icon" href="{{URL::asset('assets/images/favicon.ico')}}">


<!-- third party css -->
<link href="{{URL::asset('assets/css/vendor/jquery-jvectormap-1.2.2.css')}}" rel="stylesheet" type="text/css">
<!-- third party css end -->

<!-- App css
<link href="{{URL::asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css">
<link href="{{URL::asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" id="light-style">
<link href="{{URL::asset('assets/css/app-dark.min.css')}}" rel="stylesheet" type="text/css" id="dark-style">
 -->
@viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead


  </head>
  <body class="loading" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>   
  @inertia

<!-- <script src="{{URL::asset('plugins/jquery/jquery.min.js')}}"></script>

<script src="{{URL::asset('plugins/jquery-ui/jquery-ui.min.js')}}"></script>

<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>



<script src="{{URL::asset('plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

<script src="{{URL::asset('plugins/chart.js/Chart.min.js')}}"></script>

<script src="{{URL::asset('plugins/sparklines/sparkline.js')}}"></script>

<script src="{{URL::asset('plugins/jqvmap/maps/jquery.vmap.usa.js')}}"></script>

<script src="{{URL::asset('plugins/jqvmap/jquery.vmap.min.js')}}"></script>


<script src="{{URL::asset('plugins/jquery-knob/jquery.knob.min.js')}}"></script>


<script src="{{URL::asset('plugins/moment/moment.min.js')}}"></script>

<script src="{{URL::asset('plugins/daterangepicker/daterangepicker.js')}}"></script>


<script src="{{URL::asset('plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script>


<script src="{{URL::asset('plugins/summernote/summernote-bs4.min.js')}}"></script>


<script src="{{URL::asset('plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>


<script src="{{URL::asset('dist/js/adminlte.js?v=3.2.0')}}"></script>


<script src="{{URL::asset('dist/js/demo.js')}}"></script>


<script src="{{URL::asset('dist/js/pages/dashboard.js')}}"></script> -->


<!-- bundle
<script src="assets/js/vendor.min.js"></script>
        <script src="assets/js/app.min.js"></script>
        <script src="assets/js/vendor/apexcharts.min.js"></script>
        <script src="assets/js/ui/component.todo.js"></script>
        <script src="assets/js/pages/demo.dashboard-crm.js"></script> -->
        <!-- bundle -->
        <script src="{{URL::asset('assets/js/vendor.min.js')}}"></script>
        <script src="{{URL::asset('assets/js/app.min.js')}}"></script>
  </body>
</html>