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
                            <li class="active"><a data-toggle="pill" href="#home">Keystore / Json File</a></li>
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
                                        <div class="form-group" v-if="step == 1">

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
                                    <div v-if="step == 2">
                                        <form @submit.prevent="handlePassword">
                                            <div class="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" v-model="user.password"
                                                       class="form-control"
                                                />
                                                <!--<div style="color:red" v-if="submitted && errors.has('password')"-->
                                                <!--class="invalid-feedback">{{ errors.first('password') }}-->
                                                <!--</div>-->
                                            </div>
                                            <!--passWord section-->
                                            <button type="submit" class="btn btn-primary">Enter Password</button>

                                        </form>


                                    </div>

                                </section>
                                <!--passWord section-->

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

                                    <div id="hideImportKey">
                                        <form @submit.prevent="handlePrivateKey">
                                            <div class="form-group">
                                                <label for="userKey">Private Key</label>
                                                <input type="text" v-model="userKey"
                                                       v-validate="{required:true,min:64,max:64}"
                                                       name="userKey" class="form-control"
                                                       :class="{ 'is-invalid': submitted && errors.has('userKey') }"/>
                                                <div style="color:red" v-if="submitted && errors.has('userKey')"
                                                     class="invalid-feedback">
                                                    {{ errors.first('userKey') }}
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Enter Key</button>
                                        </form>
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

    var getAccountFroomJson = require('./../services/getAccountFromJson');

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

                btnText: 'Enter key',
                json_Data: '',
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

                var newFileName = this.fileName.split('.');
                console.log('New File name zzzzzzzzzzzzzzzz' + newFileName[1].length);

                if (newFileName[1].length > 46 || newFileName[1].length < 46) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Invalid file format');
                    this.fileName = '';
                    return false;
                }

                // if (this.fileName.includes('.pdf')) {
                //
                //      alertify.set('notifier','position', 'top-right');
                //      alertify.error('Invalid file format');
                //
                //     setTimeout(() => {
                //         window.location.href = "importaccounts"
                //
                //     }, 2000);
                //
                // }
                // if (this.fileName.includes('.png')) {
                //     setTimeout(() => {
                //
                //      alertify.set('notifier','position', 'top-right');
                //      alertify.error('Invalid file format');
                //     }, 2000);
                //     window.location.href = "importaccounts"
                //
                // }

                var _this = this;
                // Reference to the DOM input element
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job

                    reader.onload = (e) => {

                        _this.json_Data = e.target.result;


                        _this.json_Data = JSON.parse(_this.json_Data);
                        _this.step = 2;

                    };
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
                        setTimeout(() => {

                            _this.walletResponse = WalletService.unlockAccount(_this.userKey, '123456789');
                            console.log('Unclocked ===> ' + _this.walletResponse);
                            if (_this.walletResponse === false) {
                                alertify.set('notifier', 'position', 'top-right');
                                alertify.error('Invalid Privaate key');
                                _this.userKey = "";
                                _this.user.password = "";
                                _this.step = 1;
                            } else {
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
                                var balancednc = DncTokenBalance.getDncBalance(this.walletResponse.address).then((dncres) => {
                                    myDNCBalance = dncres;
                                    console.log("Dnc issdsdsds balcne is for then resposne" + myDNCBalance);
                                });

                                setTimeout(() => {
                                    console.log("Balcne i get for dnc is" + myDNCBalance);
                                    WalletService.dncAddressesBlancess.push(myDNCBalance);
                                    console.log("DNC first Address is " + dncAddressesBlancess[0]);
                                }, 3000);


                                // alert('Unlocked address ===> ' + WalletService.addresses);

                                router.push('/');

                                $('#spinnerr').hide();
                            }


                        }, 2000);


                    }
                });


            },
            handlePassword: async function (e) {

                console.log("Button  zzzzzzzzzzzzzzzzzz");
                var _this = this;
                e.preventDefault();
                console.log("Submiitted" + _this.submitted);
                _this.submitted = true;
                console.log("Submiitted" + _this.submitted);
                // _this.$validator.validate().then(valid => {
                //     console.log("Valid oiios" + valid);
                //
                //     if (valid) {
                //         console.log("Ener in conditioo");
                if (_this.user.password.length < 9) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Password must be greater thaan or equal to 9');
                }
                else {
                    var password = _this.user.password;
                    $('#spinnerr').show();
                    console.log(password);
                    console.log('two');
                    var jsonBackResposne;
                    var jsonResponseError;
                    var resposne = await getAccountFroomJson.getprivateKeyFromJson(_this.json_Data, _this.user.password).then((res) => {
                        jsonBackResposne = res;
                    }).catch((e)=>{
                        console.log("Error " + e);
                        jsonResponseError =e;
                    });
                    if(jsonResponseError){
                        alertify.set('notifier', 'position', 'top-right');
                        alertify.error("Possibly Wrong Password");
                        _this.user.password ='';
                        return;
                    }


                    console.log('Datazzzz ' + _this.json_Data.address);


                    console.log('three');
                    WalletService.addresses.push(_this.json_Data.address);

                    console.log("Json resposne is  " + _this.json_Data);


                    console.log("Json resposne is  " + _this.json_Data);

                    //Eth key Store Balance
                    var keystoreBalance;
                    var balance = WalletService.getBalance(_this.json_Data.address).then((res) => {
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
                    var keystoreBalancednc = DncTokenBalance.getDncBalance(_this.json_Data.address).then((dncres) => {
                        myDNCkeyStoreBalance = dncres;
                        console.log("Dnc issdsdsds balcne keystore is for then resposne" + myDNCkeyStoreBalance);
                    });

                    setTimeout(() => {
                        console.log("Balcne i get for dnc keystoreis" + myDNCkeyStoreBalance);
                        WalletService.dncAddressesBlancess.push(myDNCkeyStoreBalance);
                        console.log("DNC first keystotre Address is " + dncAddressesBlancess[0]);
                    }, 3000);


                    router.push('/');


                    //     }
                    // });


                }
            }
        },

        mounted: function mounted() {


        }
    }
</script>
