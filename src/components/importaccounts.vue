<style scoped>
    input, select, textarea, button {
        border-radius: 0px;
        height: 40px;
    }

    .form-group label {
        font-size: 16px;
    }

    textarea {
        height: 150px;
    }

    .container.text-left {
        padding-bottom: 60px;
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
                                    <div>
                                        <h4 translate="ADD_Radio_2_alt">Select Your Wallet File</h4>
                                        <h5 style="color:  rgb(217, 83, 79);">
                                            This is <u>not</u> a recommended way to access your wallet.
                                        </h5>
                                        <div class="form-group" style="color:  rgba(255, 255, 255, 0.8);">
                                            Entering your private key on a website dangerous. If our website is
                                            compromised or you accidentally visit a different website, your funds will
                                            be stolen. Please consider:
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

                                            <input id="upload" type="file" @change="onFileSelected"
                                                   style="display:none"/>
                                            <a tabindex="0" type="file" role="button" class="btn btn-primary  ng-hide"
                                               id="upload_link" @click="upload_link" translate="ADD_Label_6_short">SELECT
                                                WALLET
                                                FILE...


                                            </a>
                                            &nbsp;
                                            <span style="color:#fff">{{this.fileName}}</span>

                                        </div>
                                    </div>

                                </section>
                            </div>
                            <!--second tab menu-->
                            <div id="menu1" class="tab-pane fade">
                                <div id="selectedTypeKey" class="col-md-8">
                                    <h4 translate="ADD_Radio_3" class="">Paste Your Private Key</h4>
                                    <h5 style="color:  rgb(217, 83, 79);">

                                        This is <u>not</u> a recommended way to access your wallet.
                                    </h5>
                                    <div class="form-group" style="color: rgba(255, 255, 255, 0.8);">
                                        Entering your private key on a website is dangerous. If our website is
                                        compromised or you accidentally visit a different website, your funds will be
                                        stolen. Please consider:
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

                                    <div id="hideImportKey" v-if="step == 1">
                                        <form @submit.prevent="handlePrivateKey">
                                            <div class="form-group">
                                                <label for="user key">Private Key</label>
                                                <input type="text" v-model="userKey" v-validate="'required'"
                                                       name="userKey" class="form-control"
                                                       :class="{ 'is-invalid': submitted && errors.has('userKey') }"/>
                                                <div v-if="submitted && errors.has('userKey')" class="invalid-feedback">
                                                    {{ errors.first('userKey') }}
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Enter Key</button>
                                        </form>
                                    </div>

                                    <!--passWord section-->
                                    <div v-if="step == 2">
                                        <form @submit.prevent="handlePassword">
                                            <div class="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" v-model="user.password"
                                                       v-validate="{ required: true, min: 9 }" name="password"
                                                       class="form-control"
                                                       :class="{ 'is-invalid': submitted && errors.has('password') }"/>
                                                <div v-if="submitted && errors.has('password')"
                                                     class="invalid-feedback">{{ errors.first('password') }}
                                                </div>
                                            </div>
                                            <!--passWord section-->
                                            <button type="submit" class="btn btn-primary">Enter Password</button>

                                        </form>
                                        <div id="spinnerr" style="display: none">

                                            <vue-simple-spinner></vue-simple-spinner>
                                        </div>


                                    </div>


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

    var WalletService = require('./../services/wallet');
    import router from './../router';
    import {addressesBlancess, dncAddressesBlancess} from '../services/wallet';
     var DncTokenBalance = require('./../services/getTokenBalance');

    export default {
        data: function () {
            return {
                step: 1,
                userKey: '',
                userPassword: '',
                fileName: '',
                walletResponse: [],
                submitted: false,
                user: {
                    password: ''
                },

                btnText: 'Enter key'
            }
        },
        methods: {
            upload_link(e) {
                e.preventDefault();
                $("#upload:hidden").trigger('click');
            },

            onFileSelected(e) {
                e.preventDefault();
                //    console.log(e);
                this.fileName = e.target.files[0].name;
                console.log('File Name ' + this.fileName);
                if (this.fileName.includes('.pdf')) {

                    $.Toast("Wait", "Invalid file format", "error", {});
                    setTimeout(() => {
                        window.location.href = "importaccounts"

                    }, 2000);

                }
                if (this.fileName.includes('.png')) {
                    setTimeout(() => {
                        $.Toast("Wait", "Invalid file format", "warning", {});
                    }, 2000);
                    window.location.href = "importaccounts"

                }


                // Reference to the DOM input element
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job

                    reader.onload = (e) => {

                        var json_Data = e.target.result;


                        json_Data = JSON.parse(json_Data);
                        console.log('two');

                        console.log('Datazzzz ' + json_Data.address);

                        console.log('Responsezzzz ' + this.response);
                        console.log('three');
                        WalletService.addresses.push(json_Data.address);

                        //Eth key Store Balance
                        var keystoreBalance;
                        var balance = WalletService.getBalance(json_Data.address).then((res) => {
                            keystoreBalance = res;
                            console.log('Response inside get balance ' + keystoreBalance);
                        });

                        setTimeout(() => {
                            console.log('Balance i get zzzzzzzzzzzzzz' + keystoreBalance);
                            WalletService.addressesBlancess.push(keystoreBalance);
                            console.log('First address is ' + addressesBlancess[0]);
                        }, 3000);

                        //DNC  Keystore Balance

                        var myDNCkeyStoreBalance;
                        var keystoreBalancednc = DncTokenBalance.getDncBalance(json_Data.address).then((dncres)=>{
                            myDNCkeyStoreBalance =dncres;
                            console.log("Dnc issdsdsds balcne keystore is for then resposne" + myDNCkeyStoreBalance);
                        });

                        setTimeout(()=>{
                            console.log("Balcne i get for dnc keystoreis" + myDNCkeyStoreBalance);
                            WalletService.dncAddressesBlancess.push(myDNCkeyStoreBalance);
                            console.log("DNC first keystotre Address is " + dncAddressesBlancess[0]);
                        },3000);


                        router.push('/');
                    }
                    // Start the reader job - read file
                    reader.readAsText(input.files[0]);


                }
            },
            handlePrivateKey(e) {
                var _this = this;
                e.preventDefault();
                var fromValue = _this.userKey;
                console.log(fromValue);
                _this.submitted = true;

                _this.$validator.validate().then(valid => {
                    if (valid) {

                        $('#hideImportKey').hide();
                        _this.step = 2;

                    }
                });


            },
            handlePassword(e) {

                console.log("Button Clicked");
                var _this = this;
                e.preventDefault();
                _this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {

                        var password = _this.user.password;
                        $('#spinnerr').show();
                        console.log(password);
                        setTimeout(()=>{

                            _this.walletResponse = WalletService.unlockAccount(_this.userKey, password);
                            console.log('Unclocked ===> ' + _this.walletResponse);
                            if(_this.walletResponse === false){
                                $.Toast("Wait", "Invalid Private Key", "warning", {});
                               // this.$router.push('/#importaccounts');
                             router.push({  name:"importaccounts"} );
                                //router.push('/');
                                 // window.location.href = "importaccounts"
                            }
                            else {
                                WalletService.addresses.push(this.walletResponse.address);

                                //Eth Private Balance
                                var myBalance;
                                var balance = WalletService.getBalance(this.walletResponse.address).then((res) => {
                                    myBalance = res;
                                    console.log('Response inside get balance ' + myBalance);
                                });

                                setTimeout(() => {
                                    console.log('Balance i get zzzzzzzzzzzzzz' + myBalance);
                                    WalletService.addressesBlancess.push(myBalance);
                                    console.log('First address is ' + addressesBlancess[0]);
                                }, 3000);


                                //DNC Private Balance
                                var myDNCBalance;
                                var balancednc = DncTokenBalance.getDncBalance(this.walletResponse.address).then((dncres)=>{
                                    myDNCBalance =dncres;
                                    console.log("Dnc issdsdsds balcne is for then resposne" + myDNCBalance);
                                });

                                setTimeout(()=>{
                                    console.log("Balcne i get for dnc is" + myDNCBalance);
                                    WalletService.dncAddressesBlancess.push(myDNCBalance);
                                    console.log("DNC first Address is " + dncAddressesBlancess[0]);
                                },3000);




                                alert('Unlocked address ===> ' + WalletService.addresses);

                                router.push('/');

                                $('#spinnerr').hide();
                            }




                        },2000);


                    }
                });

                // var password = _this.user.password;
                // $('#spinnerr').show();
                // console.log(password);
                //
                //
                // _this.walletResponse = WalletService.unlockAccount(_this.userKey, password);
                // console.log('Unclocked ===> ' + _this.walletResponse);
                //
                //
                // WalletService.addresses.push(this.walletResponse.address);
                //
                // //Eth Private Balance
                // var myBalance;
                // var balance = WalletService.getBalance(this.walletResponse.address).then((res) => {
                //     myBalance = res;
                //     console.log('Response inside get balance ' + myBalance);
                // });
                //
                // setTimeout(() => {
                //     console.log('Balance i get zzzzzzzzzzzzzz' + myBalance);
                //     WalletService.addressesBlancess.push(myBalance);
                //     console.log('First address is ' + addressesBlancess[0]);
                // }, 3000);
                //
                //
                // //DNC Private Balance
                //
                //
                // alert('Unlocked address ===> ' + WalletService.addresses);
                //
                // router.push('/');
                //
                // $('#spinnerr').hide();


            }
        },

        mounted: function mounted() {

          // DncTokenBalance.getDncBalance('0x41e98269C80a7133De019261f6F4d96d77cc6821');

        }
    }
</script>
