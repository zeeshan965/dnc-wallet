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
                                <a href="" target="_blank">Common
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
                        <form method="post">
                            <fieldset><div class="form-group"><label>Account Name</label><input  type="text" value="" class="form-control "><p class="help-block">You now need to supply a secure password for this account.</p></div><div class="form-group"><label>Wallet</label><div class="checkbox checkbox-info checkbox-circle"><input @click="step = 1" id="cb_post" type="checkbox"><label for="cb_post">
                                DinarCoin
                            </label>
                            </div>
                                <!-- <div class="checkbox checkbox-info checkbox-circle"><input @click="ethstep = 1" id="cb_post1" type="checkbox"><label for="cb_post1">
                                EtherCoin
                            </label>
                            </div> -->
                            </div>
                                <!--<div v-if="step == 1">-->
                                <!--<div class="form-group" >-->
                                    <!--<div class="form-group"><label>key Name</label><input type="text" value="" class="form-control "></div>-->
                                <!--</div>-->
                                <!--<button @click="step = 2" class="btn btn-primary waves-effect waves-light"-->
                                        <!--type="button">Create Wallet</button>-->
                                <!--</div>-->
                            </fieldset>
                            <fieldset id = "hiddenDiv" v-if="step == 1 || step == 2 || step == 3 || step == 4" @click.prevent=''>
                                <div class="form-group" v-if="step == 2">
                                    <h3>Save your Keystore File.</h3>
                                    <div class="form-group"><p class="help-block">You now need to supply a secure password for this account.</p></div>
                                    <button class="btn btn-lg btn-primary" @click="step = 3">Save keystore/json</button>
                                    <p class="text-white">
                                        **Do not lose it!** It cannot be recovered if you lose it.

                                        **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.

                                        **Make a backup!** Secure it like the millions of dollars it may one day be worth.
                                    </p>
                                </div>
                                <div class="form-group" v-if="step == 3">
                                    <button class="btn btn-lg btn-primary" @click="step = 4">I Understand Continue</button>
                                </div>

                                <div class="form-group" v-if="step == 4">
                                    <!--<button class="btn btn-lg btn-primary">Print Paper Wallet</button>-->

                                </div>
                                <div v-if="step == 1">
                                    <div class="form-group" >
                                        <div class="form-group"><label></label>
                                        <!-- <input type="text" value=""  v-model="walletName" class="form-control "> -->
                                        </div>
                                    </div>
                                    {{this.walletName}}
                                    <button @click="step = 2;createNewWallet()" class="btn btn-primary waves-effect waves-light"
                                            type="button">Create Wallet</button>
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
   import Web3 from 'web3';
   import Web3EthAccounts from 'web3-eth-accounts';
   var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa'));

    export default {
        data: function(){
            return {
                step: 0,
                ethstep: 0,
                walletName:''
               // createWallet: false
            }
        },
        methods: {
       createNewWallet: function() {
           
           var account = new Web3EthAccounts('https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa');
           var new_acc = account.create();
           console.log(this.walletName)
           //console.log(new_acc.address); 
         }
        },
        mounted: function () {
            $("#cb_post").on('click', function(){
                $("#hiddenDiv").toggle();

            });
            $("#cb_post1").on('click', function(){
                $("#hiddenDiv1").toggle();

            });
            $(function() {
                $("input:checkbox").on('click', function() {
                    // in the handler, 'this' refers to the box clicked on
                    var $box = $(this);
                    if ($box.is(":checked")) {
                        // the name of the box is retrieved using the .attr() method
                        // as it is assumed and expected to be immutable
                        var group = "input:checkbox[name='" + $box.attr("name") + "']";
                        // the checked state of the group/box on the other hand will change
                        // and the current value is retrieved using .prop() method
                        $(group).prop("checked", false);
                        $box.prop("checked", true);
                    } else {
                        $box.prop("checked", false);
                    }
                });
            });
        }
    }
</script>