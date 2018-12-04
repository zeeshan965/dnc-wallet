<template>
    <div class="topbar">

        <!-- LOGO -->
        <div class="topbar-left">
            <div class="text-center">
                <a href="" class="logo"><img src="assets/images/dd2.png" width="150" height="61" alt="Logo"></a>
            </div>
        </div>
        <!-- Navbar -->
        <div class="navbar navbar-default" role="navigation">
            <div class="container">
                <div class="">
                    <div class="pull-right">
                        <button class="button-menu-mobile open-left waves-effect">
                            <i class="md md-menu"></i>
                        </button>
                    </div>
                    <ul class="nav navbar-nav navbar-right pull-right">
                        <li class="dropdown"></li>
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle profile" data-toggle="dropdown" aria-expanded="false"><img
                                    src="assets/images/users/avatar-2.jpg" alt="user-img" class="img-circle"> <span
                                    class="m-t-0 m-b-0 m-l-10">John Deo</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="javascript:void(0)"><i class="md md-face-unlock"></i> Profile</a></li>
                                <li><a href="javascript:void(0)"><i class="md md-settings-power"></i> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
}
</script>
