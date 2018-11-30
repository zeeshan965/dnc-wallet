<template>
    <div>
        <div id="new_wallet" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title" id="myModalLabel">Create a New Account</h4>
                    </div>
                    <div class="modal-body">
                        <h4>We need a few more details before we create new account address for your digital assets</h4>
                        <div class="alert alert-danger">
                            <p>
                                <strong>
                                    Please take great care when creating your password it is the key to the security of
                                    your digital assets
                                </strong>
                            </p>
                            <p>
                                <span class="translation_missing" title="translation missing: en.views.accounts.newaccount.recommend">Recommend</span>
                                <a href="/blog/are_you_guilty_of_the_following_password_mistakes" target="_blank">Common
                                    Password Mistakes</a>
                            </p>
                            <p>
                                If you lose or forget your password your coins are unrecoverable. Write your password
                                down and keep it safe.
                            </p>
                            <p>
                                <strong>
                                    You must test sending and receiving a small amount of digital asset to this account
                                    before you use it to hold larger amounts.

                                </strong>
                            </p>
                            <p>
                                <strong>
                                    dinardirham.com is not responsible for any losses, please take care.
                                </strong>
                            </p>
                        </div>
                        <hr>
                        <form method="post" v-on:submit.prevent="">
                            <fieldset>
                                <div class="form-group">
                                    <label>Account Name</label>
                                    <input class="form-control " type="text" value="">
                                    <p class="help-block">You now need to supply a secure password for this account.</p>
                                </div>
                                <div class="form-group">
                                    <label>Wallet</label>
                                    <div class="checkbox checkbox-info checkbox-circle">
                                        <input id="checkbox7" type="checkbox">
                                        <label for="checkbox7">
                                            DinarCoin
                                        </label>
                                    </div>
                                    <div class="checkbox checkbox-info checkbox-circle">
                                        <input id="checkbox7" type="checkbox">
                                        <label for="checkbox7">
                                            Bitcoin
                                        </label>
                                    </div>
                                    <div class="checkbox checkbox-info checkbox-circle">
                                        <input id="checkbox7" type="checkbox">
                                        <label for="checkbox7">
                                            EtherCoin
                                        </label>
                                    </div>
                                    <div class="checkbox checkbox-info checkbox-circle">
                                        <input id="checkbox7" type="checkbox">
                                        <label for="checkbox7">
                                            GSC
                                        </label>
                                    </div>
                                    <div class="checkbox checkbox-info checkbox-circle">
                                        <input id="checkbox7" type="checkbox">
                                        <label for="checkbox7">
                                            DND
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="form-control " type="text" value="">

                                </div>
                                <div class="form-group">
                                    <label>Confirm password</label>
                                    <input class="form-control " type="text" value="">

                                </div>
                            </fieldset>
                            <fieldset v-if="step == 2 || step == 3 || step == 4">
                                <div class="form-group" v-if="step == 2">
                                    <h3>Save your Keystore File.</h3>
                                    <button class="btn btn-lg btn-primary" @click="step = 3">Save keystore/json</button>
                                </div>
                                <p class="text-white">
                                    **Do not lose it!** It cannot be recovered if you lose it.

                                    **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.

                                    **Make a backup!** Secure it like the millions of dollars it may one day be worth.
                                </p>
                                <div class="form-group" v-if="step == 4">
                                    <button class="btn btn-lg btn-primary">Print Paper Wallet</button>
                                </div>
                                <div class="form-group" v-if="step == 3">
                                    <button class="btn btn-lg btn-primary" @click="step = 4">I Understand Continue</button>
                                </div>
                            </fieldset>
                        </form>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary waves-effect waves-light" @click="step = 2">Save changes</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                step: 1
            }
        }
    }
</script>