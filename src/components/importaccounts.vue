<style scoped>
    input, select, textarea, button{
        border-radius:0px;
        height:40px;
    }
    .form-group label{
        font-size:16px;
    }
    textarea{
        height:150px;
    }
    .container.text-left{
        padding-bottom:60px;
    }
</style>
<template>
    <div>
        <div class="content m-t-40">
            <div class="container text-left">
                <div class="row">
                    <div class="col-md-12 col-md-offset-2">
                        <ul class="nav nav-pills">
                            <li class="active"><a data-toggle="pill" href="#home">Keystore / Jason File</a></li>
                            <li><a data-toggle="pill" href="#menu1">Private key</a></li>
                        </ul>

                        <div class="tab-content">
                            <div id="home" class="tab-pane fade in active">
                                <section class="col-md-8 col-sm-6">
                                    <div >
                                    <h4 translate="ADD_Radio_2_alt">Select Your Wallet File</h4>
                                    <h5 style="color:  rgb(217, 83, 79);">
                                        This is <u>not</u> a recommended way to access your wallet.
                                    </h5>
                                    <div class="form-group" style="color:  rgba(255, 255, 255, 0.8);">
                                        Entering your private key on a website dangerous. If our website is compromised or you accidentally visit a different website, your funds will be stolen. Please consider:
                                    </div>
                                    <ul style="color: white;">
                                        <li>
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                MetaMask
                                            </a>
                                            or
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                A Hardware Wallet
                                            </a>
                                            or
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                Running MEW Offline &amp; Locally
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                Learning How to Protect Yourself and Your Funds
                                            </a>
                                        </li>
                                    </ul>
                                    <br>
                                    <div class="form-group">
                                        <a tabindex="0" role="button" class="btn btn-primary  ng-hide" ng-click="decryptWallet()" translate="ADD_Label_6_short">SELECT WALLET FILE...</a>
                                    </div>
                                </div>

                                </section>
                            </div>
                            <!--second tab menu-->
                            <div id="menu1" class="tab-pane fade">
                                <div id="selectedTypeKey"  class="col-md-8">
                                    <h4 translate="ADD_Radio_3" class="">Paste Your Private Key</h4>
                                    <h5 style="color:  rgb(217, 83, 79);">

                                        This is <u>not</u> a recommended way to access your wallet.
                                    </h5>
                                    <div class="form-group" style="color: rgba(255, 255, 255, 0.8);">
                                        Entering your private key on a website is dangerous. If our website is compromised or you accidentally visit a different website, your funds will be stolen. Please consider:
                                    </div>
                                    <ul style="color: white;">
                                        <li>
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                MetaMask
                                            </a>
                                            or
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                A Hardware Wallet
                                            </a>
                                            or
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                Running MEW Offline &amp; Locally
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                Learning How to Protect Yourself and Your Funds
                                            </a>
                                        </li>
                                    </ul>
                                    <!---->
                                    <br>
                                    <form @submit.prevent="handlePrivateKey">
                                        <div id="hideImportKey">

                                        <div class="form-group">
                              <label for="user key">Private Key</label>
                              <input type="text" v-model="userKey" v-validate="'required'" name="userKey" class="form-control" :class="{ 'is-invalid': submitted && errors.has('userKey') }" />
                              <div v-if="submitted && errors.has('userKey')" class="invalid-feedback">{{ errors.first('userKey') }}</div>
                          </div>

                                            <!--<button type="submit"   class="btn btn-primary">enter key</button>-->
                                        </div>
                                        <!--passWord section-->
                                        <div v-if="step == 2">
                                            <div class="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" v-model="user.password" v-validate="{ required: true, min: 9 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                                                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                                            </div>
                                            <!--<button type="submit"  class="btn btn-primary">Enter Password</button>-->
                                        </div>
                                        <!--passWord section-->
                                        <button type="submit"   class="btn btn-primary">{{ btnText }}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

 // var WalletService = require('./../services/wallet');
    import Register from "./Auth/Register";

 export default {
        data: function(){
            return {
                step: 1,
                userKey:'',
                submitted: false,
                user: {
                    password: ''
                },
                btnText: 'Enter key'
            }
        },
    methods:{
        handlePrivateKey(e) {
            var _this = this
            e.preventDefault();
            var fromValue = this.userKey;
             console.log(fromValue);
          this.submitted = true;
          this.$validator.validate().then(valid => {
             if (valid) {
                  // WalletService.unlockAccount(fromValue);
                 $('#hideImportKey').hide();
                 _this.step = 2,
                     _this.btnText = 'Enter Password'
             }
          });
      },
     }
    }
</script>
