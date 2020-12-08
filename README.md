# testing
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- META SECTION -->
    <title>Energia - Dashboard</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charset="utf-8"/>
    <!--    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!--    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
    <link rel="stylesheet" href="/css/bootstrap/bootstrap.min.css"/>
    <script src="/js/plugins/bootstrap/bootstrap.min.js"></script>
    <script src="/js/plugins/jquery/jquery.min.js"></script>
    <link rel="stylesheet" href="/css/bootstrap/bootstrap.min.css"/>
    <link
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.min.css"
            rel="stylesheet"
    />
    <link
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.css"
            rel="stylesheet"
    />

    <link rel="icon" href="favicon.ico" type="image/x-icon"/>
    <!-- END META SECTION -->

    <!-- CSS INCLUDE -->
    <link
            rel="stylesheet"
            type="text/css"
            id="theme"
            href="/css/dashboard.css"
    />
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css"
    />
    <!-- EOF CSS INCLUDE -->
    <style>
        .splide__pagination {
            bottom: unset !important;
        }
    </style>
</head>

<body>
<div class="page-container page-navigation-top">
    <!-- PAGE CONTENT -->
    <div class="page-content">
        <!-- START X-NAVIGATION VERTICAL -->
        <ul class="x-navigation x-navigation-horizontal">
            <li class="xn-logo">
                <a href="index.html"><img src="" width="100"/></a>
                <a href="#" class="x-navigation-control"></a>
            </li>
            <div class="homelocation">
                <a
                        href="#external"
                        class="btn btn-success homelocationbtn"
                        data-toggle="tab"
                >External</a
                >
                <a
                        href="#internal"
                        class="btn btn-success homelocationbtn"
                        data-toggle="tab"
                >Internal</a
                >
            </div>
        </ul>
        <!-- END X-NAVIGATION VERTICAL -->

        <!-- TABS WIDGET -->
        <div class="panel panel-default tabs">
            <!-- <div class="homelocation">
                  <a href="#internal" class="btn btn-success homelocationbtn" data-toggle="tab">Test</a>
                  <a href="#external" class="btn btn-success homelocationbtn" data-toggle="tab">Test 2</a>
              </div> -->
            <div class="panel-body tab-content">
                <!-- Start of internal page -->
                <div class="tab-pane active" id="external">
                    <div class="page-content-wrap">
                        <!-- START WIDGETS -->
                        <div class="row" style="padding-top: 10px">
                            <div class="col-md-3"></div>
                            <div class="col-md-3">
                                <!-- START WIDGET SLIDER -->
                                <!-- <div class="widget widget-default widget-carousel" style="background-image: -webkit-linear-gradient(90deg, #ee0979 0%, #ff6a00 100%);"> -->

                                <div
                                        class="widget widget-default widget-carousel"
                                        style="background: #0f71b0"
                                >
                                    <div class="splide">
                                        <div class="splide__track">
                                            <ul class="splide__list"></ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-3">
                                <!-- START WIDGET REGISTRED -->
                                <div
                                        class="widget widget-default widget-item-icon"
                                        style="background: #3f2276"
                                >
                                    <div class="widget-item-left">
                                        <span class="fa fa-user"></span>
                                    </div>
                                    <div class="widget-data">
                                        <div class="widget-title">Failed Jobs</div>
                                        <div
                                                class="widget-subtitle"
                                                style="
                            background: orange;
                            width: 80%;
                            border-radius: 10px;
                            color: white;
                            padding: 2px;
                          "
                                        >
                                            GBIDA at 12:22
                                        </div>
                                        <div
                                                class="widget-subtitle"
                                                style="
                            background: orange;
                            width: 80%;
                            border-radius: 10px;
                            color: white;
                            padding: 2px;
                          "
                                        >
                                            GBIDA2 at 13:33
                                        </div>
                                        <div
                                                class="widget-subtitle"
                                                style="
                            background: orange;
                            width: 80%;
                            border-radius: 10px;
                            color: white;
                            padding: 2px;
                          "
                                        >
                                            GBBM at 14:22
                                        </div>
                                    </div>
                                </div>
                                <!-- END WIDGET REGISTRED -->
                            </div>
                            <div class="col-md-3"></div>
                        </div>
                        <!-- Start of Endure External Feeds -->
                        <div class="row" style="padding: 20px">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <div class="panel-body" style="padding: 0px !important">
                                    <table class="table table-bordered">
                                        <tbody>
                                        <thead>
                                        <th colspan="8" class="center">
                                            ENDURE EXTERNAL FEEDS
                                        </th>
                                        </thead>
                                        <tr>
                                            <th class="theadsuccess">Morning Star</th>
                                            <td>
                                                <a
                                                        class="hide-button-background"
                                                        tabindex="0"
                                                        data-placement="top"
                                                        role="button"
                                                        data-html="true"
                                                        data-toggle="popover"
                                                        data-trigger="focus"
                                                        title="<b>Information</b>"
                                                        data-content="<div>This will contain the information</div>"
                                                >
                                                    <i class="fa fa-info-circle fa-2x"></i>
                                                </a>
                                            </td>
                                            <th class="theadfailed">Heren</th>
                                            <td>
                                                <a
                                                        class="hide-button-background"
                                                        tabindex="0"
                                                        data-placement="top"
                                                        role="button"
                                                        data-html="true"
                                                        data-toggle="popover"
                                                        data-trigger="focus"
                                                        title="<b>Information</b>"
                                                        data-content="<div>This will contain the information</div>"
                                                >
                                                    <i class="fa fa-info-circle fa-2x"></i>
                                                </a>
                                            </td>
                                            <th class="theadsuccess">National Grid</th>
                                            <td>
                                                <a
                                                        class="hide-button-background"
                                                        tabindex="0"
                                                        data-placement="top"
                                                        role="button"
                                                        data-html="true"
                                                        data-toggle="popover"
                                                        data-trigger="focus"
                                                        title="<b>Information</b>"
                                                        data-content="<div>This will contain the information</div>"
                                                >
                                                    <i class="fa fa-info-circle fa-2x"></i>
                                                </a>
                                            </td>
                                            <th class="theadsuccess">Hunstown</th>
                                            <td>
                                                <a
                                                        class="hide-button-background"
                                                        tabindex="0"
                                                        data-placement="top"
                                                        role="button"
                                                        data-html="true"
                                                        data-toggle="popover"
                                                        data-trigger="focus"
                                                        title="<b>Information</b>"
                                                        data-content="<div>This will contain the information</div>"
                                                >
                                                    <i class="fa fa-info-circle fa-2x"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>

                                        <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-3"></div>
                        </div>
                        <!-- End of Endure External Feeds -->
                        <div class="row">
                            <div class="col-md-4">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">GB Prices</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered" id="customerTable">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th style="width: 60px"></th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- END TABLE -->
                            </div>
                            <div class="col-md-4">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Meteologica</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table id="benn" class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- END TABLE -->
                            </div>
                            <div class="col-md-4">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">EIRGRID Smart Dashboard</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- END TABLE -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Market Results</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- END TABLE -->
                            </div>
                            <div class="col-md-4">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">SEMO Reports</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- END TABLE -->
                            </div>
                            <div class="col-md-4">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Webscrapper</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- END TABLE -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Gentix Metered File</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- END TABLE -->
                            </div>
                            <div class="col-md-4">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">SEMOpx</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- END TABLE -->
                            </div>
                            <div class="col-md-4">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">ENAPPYS</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- END TABLE -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of internal page -->
                <!-- Start of Extrernal Page -->
                <div class="tab-pane" id="internal">
                    <div class="page-content-wrap">
                        <!-- START WIDGETS -->
                        <div class="row" style="padding-top: 10px">
                            <div class="col-md-3"></div>
                            <div class="col-md-3">
                                <!-- START WIDGET SLIDER -->
                                <!-- <div class="widget widget-default widget-carousel" style="background-image: -webkit-linear-gradient(90deg, #ee0979 0%, #ff6a00 100%);"> -->
                                <div class="widget widget-default widget-carousel" style="background: #0f71b0 !important">

                                </div>
                                <!-- END WIDGET SLIDER -->
                            </div>
                            <div class="col-md-3">
                                <!-- START WIDGET REGISTRED -->
                                <div
                                        class="widget widget-default widget-item-icon"
                                        style="background: #3f2276"
                                >
                                    <div class="widget-item-left">
                                        <span class="fa fa-user"></span>
                                    </div>
                                    <div class="widget-data">
                                        <div class="widget-title">Pending to run</div>
                                        <div
                                                class="widget-subtitle"
                                                style="
                            background: orange;
                            width: 80%;
                            border-radius: 10px;
                            color: white;
                            padding: 2px;
                          "
                                        >
                                            GBIDA at 12:22
                                        </div>
                                        <div
                                                class="widget-subtitle"
                                                style="
                            background: orange;
                            width: 80%;
                            border-radius: 10px;
                            color: white;
                            padding: 2px;
                          "
                                        >
                                            GBIDA2 at 13:33
                                        </div>
                                        <div
                                                class="widget-subtitle"
                                                style="
                            background: orange;
                            width: 80%;
                            border-radius: 10px;
                            color: white;
                            padding: 2px;
                          "
                                        >
                                            GBBM at 14:22
                                        </div>
                                    </div>
                                </div>
                                <!-- END WIDGET REGISTRED -->
                            </div>
                            <div class="col-md-3"></div>
                        </div>
                        <!-- END WIDGETS -->
                        <div class="row">
                            <div class="col-md-6">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">GB Prices</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">GB Prices</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Inclusive Period</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>GBDA</td>
                                                <td>2020-11-27T12:28:00.06</td>
                                                <td>
                                                    27/11/2020 23:00:00<br/>28/11/2020 22:00:00
                                                </td>
                                                <td>2020-11-27T13:59:52.013</td>
                                                <td>
                                                    26/11/2020 12:28:00<br/>25/11/2020 12:28:00<br/>24/11/2020
                                                    12:28:00<br/>23/11/2020 12:28:00<br/>22/11/2020
                                                    12:28:00
                                                </td>
                                                <td>Test Info</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">GB Prices</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <!-- START TABLE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">GB Prices</h3>
                                    </div>
                                    <div class="panel-body" style="padding: 0px !important">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Market</th>
                                                <th>Last Received</th>
                                                <th>Next Scheduled Run</th>
                                                <th>Run History</th>
                                                <th>Information</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of external page -->
            </div>
        </div>
        <!-- END TABS WIDGET -->
    </div>
    <!-- END PAGE CONTENT WRAPPER -->
</div>
<!-- END PAGE CONTENT -->

<!-- END PAGE CONTAINER -->

<!-- START SCRIPTS -->
<!-- START PLUGINS -->
<script
        type="text/javascript"
        src="js/plugins/jquery/jquery.min.js"
></script>
<script
        type="text/javascript"
        src="js/plugins/jquery/jquery-ui.min.js"
></script>
<script
        type="text/javascript"
        src="js/plugins/bootstrap/bootstrap.min.js"
></script>
<!-- END PLUGINS -->

<!-- START THIS PAGE PLUGINS-->
<script
        type="text/javascript"
        src="js/plugins/icheck/icheck.min.js"
></script>
<script
        type="text/javascript"
        src="js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js"
></script>
<script
        type="text/javascript"
        src="js/plugins/scrolltotop/scrolltopcontrol.js"
></script>

<!-- <script
  type="text/javascript"
  src="js/plugins/owl/owl.carousel.min.js"
></script> -->
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js"></script>
<script type="text/javascript" src="js/plugins/moment.min.js"></script>

<!-- START TEMPLATE -->
<!-- <script type="text/javascript" src="js/settings.js"></script> -->

<script type="text/javascript" src="js/plugins.js"></script>
<script type="text/javascript" src="js/actions.js"></script>

<script src="/static/jquery/ajaxLoadData.js"></script>
<!-- END TEMPLATE -->
<!-- END SCRIPTS -->
</body>
</html>

