<template>
    <div>
        <div class="col-lg-3 col-lg-offset-4">
        <div class="wrapper-page">

            <div class="text-center">
              <center><img src="assets/images/dd2.png" class="img-responsive"></center>
              <br>
            </div>

            <form class="form-horizontal m-t-20" action="index.html">

                <div class="form-group">
                    <div class="col-xs-12">
                        <input class="form-control" type="text" required="" placeholder="Username">
                        <i class="md md-account-circle form-control-feedback l-h-34"></i>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-xs-12">
                        <input class="form-control" type="password" required="" placeholder="Password">
                        <i class="md md-vpn-key form-control-feedback l-h-34"></i>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-xs-12">
                        <div class="checkbox checkbox-primary">
                            <input id="checkbox-signup" type="checkbox">
                            <label for="checkbox-signup">
                                Remember me
                            </label>
                        </div>

                    </div>
                </div>

                <div class="form-group text-right m-t-20">
                    <div class="col-xs-12">
                        <button class="btn btn-default btn-custom w-md waves-effect waves-light" type="submit">Log In
                        </button>
                    </div>
                </div>

                <div class="form-group m-t-30">
                    <div class="col-sm-7">
                        <router-link to="/forgetpassword">
                        <a  class="text-muted"><i class="fa fa-lock m-r-5"></i> Forgot your
                            password?</a>
                        </router-link>    
                    </div>
                    <div class="col-sm-5 text-right">
                        <router-link to="/register" class="text-muted">Create an account</router-link>
                    </div>
                </div>
            </form>
        </div>

        </div>
    </div>
</template>
<script>
export default {
    mounted(){
    }
}
</script>
