<template>
    <div class="left side-menu" style="overflow: hidden;text-align:left">
        <div class="sidebar-inner slimscrollleft" style="overflow: hidden;">
            <div id="sidebar-menu">
                <ul>
                    <li class="text-muted menu-title">Main</li>

                    <li>
                        <router-link to="/" class="waves-effect waves-primary"><img src="assets/images/icon/User-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                Your Wallet </span></router-link>
                    </li>
                    <li>
                        <a data-toggle="modal" data-target="#new_wallet" href="#" class="waves-effect waves-primary"><img
                                src="assets/images/icon/math-add-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                New Wallet </span></a>
                    </li>
                    <li>
                        <router-link to="/contracts" class="waves-effect waves-primary"><img src="assets/images/icon/Play-Books-icon.png">&nbsp;&nbsp;&nbsp;<span>
                               DNC Contract </span></router-link>
                    </li>
                    <li>
                        <router-link to="/importaccounts" class="waves-effect waves-primary"><img src="assets/images/icon/Alternative-Explorer-2-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                Import Accounts </span></router-link>
                    </li>
                    <li>
                        <router-link to="#" class="waves-effect waves-primary"><img src="assets/images/icon/dinar-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                DNC Explorer </span></router-link>
                    </li>
                    <li>
                        <router-link to="#" class="waves-effect waves-primary"><img src="assets/images/icon/dnd-icon.png">&nbsp;&nbsp;&nbsp;<span>
                                Mint DNC </span></router-link>
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
        mounted: function(){
        }
    }
</script>
