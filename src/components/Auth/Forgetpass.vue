<template>
    <div class="col-lg-3 col-lg-offset-4">
        <div class="wrapper-page">

            <div class="text-center">
                <center><img src="assets/images/dd2.png" class="img-responsive"></center>
                <br>
            </div>
            <p class="text-center" style="font-size:17px"><b>Forgot Password</b></p>
            <form method="post" action="#" role="form" class="text-center m-t-20">
                <div class="alert alert-success alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    Enter your <b>Email</b> and instructions will be sent to you!
                </div>
                <div class="form-group m-b-0">
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder="Enter Email" required="">
                        <i class="md md-email form-control-feedback l-h-34" style="left:6px;"></i>
                        <span class="input-group-btn"> <button type="submit"
                                                               class="btn btn-email btn-default waves-effect waves-light">Reset</button> </span>
                    </div>
                </div>

            </form>

            <div class="form-group m-t-30">
                <div class="col-sm-12 text-center">
                    <router-link to="/login" class="text-muted">Already have account?</router-link>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {}
</script>