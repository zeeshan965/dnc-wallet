<template>
    <div class="left side-menu" style="overflow: visible;text-align:left">
        <div class="sidebar-inner slimscrollleft" style="verflow: visible;">
            <div id="sidebar-menu">
                <ul>
                    <li class="text-muted menu-title">Main</li>

                    <li>
                        <router-link to="/" class="waves-effect waves-primary"><img
                                src="assets/images/icon/User-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                Your Wallet </span></router-link>
                    </li>
                    <li>
                        <a data-toggle="modal" data-target="#new_wallet" href="#"
                           class="waves-effect waves-primary"><img
                                src="assets/images/icon/math-add-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                New Wallet </span></a>
                    </li>
                    <li>
                        <router-link to="/contracts" class="waves-effect waves-primary"><img
                                src="assets/images/icon/Play-Books-icon.png">&nbsp;&nbsp;&nbsp;<span>
                               DNC Contract </span></router-link>
                    </li>
                    <li>
                        <router-link to="/importaccounts" class="waves-effect waves-primary"><img
                                src="assets/images/icon/Alternative-Explorer-2-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                Import Accounts </span></router-link>
                    </li>
                    <li>
                        <a target="_blank" href="http://54.169.155.78/" class="waves-effect waves-primary"><img
                                src="assets/images/icon/dinar-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                DNC Explorer </span></a>
                    </li>
                    <li>
                        <a target="_blank" href="http://13.59.238.20/en" class="waves-effect waves-primary"><img
                                src="assets/images/icon/dnd-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                Mint DNC </span></a>
                    </li>
                    <li>
                        <router-link to="/checkTxStatus" class="waves-effect waves-primary"><img
                                src="assets/images/icon/hashtag.png">&nbsp;&nbsp;&nbsp;<span>
                                Check Tx Status </span></router-link>
                    </li>
                    <!--<li>-->
                    <!--<router-link to="/profile" >-->
                    <!--<a  class="waves-effect waves-primary"><img src="assets/images/icon/User-blue-icon.png">&nbsp;&nbsp;&nbsp;<span>-->
                    <!--Profile </span></a>-->
                    <!--</router-link>-->
                    <!--</li>-->
                    <!--<li class="has_sub">-->
                    <!--<a href="#" class="waves-effect waves-primary"><img src="assets/images/icon/settings-icon.png">&nbsp;&nbsp;&nbsp;-->
                    <!--<span> Setting </span>-->
                    <!--</a>-->
                    <!--<ul class="list-unstyled">-->
                    <!--<li><a href="">Increase Your Security</a></li>-->
                    <!--<li><a href="">Paper Backup (PDF)</a></li>-->
                    <!--<li><a href="">Key Import (Advanced)</a></li>-->

                    <!--</ul>-->
                    <!--</li>-->
                    <!--<li>-->
                    <!--<a href="blockchain_explore.html" class="waves-effect waves-primary"><img src="assets/images/icon/Alternative-Explorer-2-icon.png">&nbsp;&nbsp;&nbsp;<span>-->
                    <!--Blockchain Explorer </span></a>-->
                    <!--</li>-->
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>

    </div>
</template>
<script>
    export default {
        mounted: function () {
            $(window).on('load',function(){
        $('#new_wallet').modal('show');
    });
        }
    }
</script>
<style>
    #sidebar-menu > ul > li > a:hover {
        background: #202532 !important;
        border-left: 2px solid #3bafda;
        text-decoration: none;
        z-index: 1000;
    }
    #wrapper.enlarged .left.side-menu #sidebar-menu > ul > li > a {
        padding: 15px 20px;
    }

    #wrapper.enlarged .left.side-menu #sidebar-menu > ul > li > a {
        padding-left: 10px;
    }
    #sidebar-menu > ul > li > a {
        color: #a2acae;
        border-left: 2px solid transparent;
        display: block;
        padding: 12px 25px;
    }
    #sidebar-menu a {
        line-height: 1.3;
    }
    #sidebar-menu, #sidebar-menu ul, #sidebar-menu li, #sidebar-menu a {
        border: 0;
        font-weight: normal;
        line-height: 1;
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
        text-decoration: none;
    }
    a:hover, a:focus, a:visited {
        outline: 0;
        color: #337ab7;
        text-decoration: none;
    }
    .waves-effect {
        position: relative;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        vertical-align: middle;
        z-index: 1;
        will-change: opacity, transform;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
    }
    a {
        outline: 0;
        color: #337ab7;
        text-decoration: none;
    }
    a {
        color: #337ab7;
        text-decoration: none;
    }
    a {
        background-color: transparent;
    }
    * {
        outline: none !important;
    }
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    user agent stylesheet
    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: underline;
    }
</style>
