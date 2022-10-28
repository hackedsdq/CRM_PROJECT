<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">


<link rel="stylesheet" href="{{URL::asset('plugins/fontawesome-free/css/all.min.css')}}">

<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

<link rel="stylesheet" href="{{URL::asset('plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/jqvmap/jqvmap.min.css')}}">
<link rel="stylesheet" href="{{URL::asset('dist/css/adminlte.min.css?v=3.2.0')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/daterangepicker/daterangepicker.css')}}">
<link rel="stylesheet" href="{{URL::asset('plugins/summernote/summernote-bs4.min.css')}}">
   
   @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
  </head>
  <body class="hold-transition sidebar-mini layout-fixed">
    @inertia

<script src="{{URL::asset('plugins/jquery/jquery.min.js')}}"></script>

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


<script src="{{URL::asset('dist/js/pages/dashboard.js')}}"></script>

  </body>
</html>