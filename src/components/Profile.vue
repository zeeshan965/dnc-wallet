<template>
    <div class="content">
        <div class="container">
            <!-- Page-Title -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="page-title-box">
                        <ol class="breadcrumb pull-right">

                            <li class="active">Profile</li>
                        </ol>
                        <h4 class="page-title">Welcome !</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card-box">

                        <h4 class="header-title m-t-0">Edit Profile</h4>
                        <form role="form">
                            <fieldset>

                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="form-group">
                                            <label for="search-input">Email</label>

                                            <input type="text" id="normal-field" class="form-control" placeholder="Email">


                                        </div>

                                        <div class="form-group">
                                            <label for="search-input">Password</label>

                                            <input type="text" id="normal-field" class="form-control" placeholder="Password">


                                        </div>

                                        <div class="form-group">
                                            <label for="search-input">Confirm Password</label>

                                            <input type="text" id="normal-field" class="form-control" placeholder="Confirm Password">


                                        </div>

                                        <div class="form-group">
                                            <label for="search-input">Current Password</label>

                                            <input type="text" id="normal-field" class="form-control" placeholder="Current Password">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="form-actions">
                                <div class="btn-toolbar">
                                    <button type="submit" class="btn btn-default">Save Changes</button>
                                    <button type="button" class="btn btn-default">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
</template>

<script>
    export default {

    }

</script>
