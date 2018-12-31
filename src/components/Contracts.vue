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
                <div class="col-md-12 col-md-offset-2">
                    <div class="row">
                        <ul class="nav nav-pills">
                            <li class="active"><a data-toggle="pill" href="#home">Send Tokens</a></li>
                            <li><a data-toggle="pill" @click="step = false" href="#menu1">Burn</a></li>
                            <li><a data-toggle="pill" @click="step = false" href="#menu2">Mint</a></li>
                            <li><a data-toggle="pill" @click="step = false" href="#menu3">Pause</a></li>
                            <li><a data-toggle="pill" @click="step = false" href="#menu4">UnPause</a></li>
                            <li><a data-toggle="pill" @click="step = false" href="#menu5">Update Rate</a></li>
                        </ul>
                        <div class="col-md-8 ">
                            <div class="tab-content">
                                <div id="home" class="tab-pane fade in active">
                                    <div class="tab-content">
                                        <div id="Mint" class="tab-pane active">
                                            <br>
                                            <form action="#" data-parsley-validate="" novalidate="novalidate"
                                                  @submit.prevent="getValues">
                                                <div class="form-group">
                                                    <label>Recipient Address</label>
                                                    <input type="text" placeholder="Address" required="required"
                                                           v-model="address" data-parsley-id="8" class="form-control">

                                                </div>
                                                <div class="form-group">
                                                    <label>Value</label>
                                                    <input type="number" placeholder="Amount"
                                                           v-model="balance" data-parsley-id="8"
                                                           class="form-control">

                                                </div>
                                                <div class="form-group text-right m-b-0">
                                                    <button type="submit" data-target="#sendToken-modal"
                                                            class="btn btn-default waves-effect waves-light">
                                                        Generate Transaction
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                <div id="menu1" class="tab-pane fade">
                                    <div class="tab-content">
                                        <div id="" class="tab-pane active">
                                            <br>
                                            <form action="#" data-parsley-validate="" novalidate="novalidate"
                                                  @submit.prevent="getTokenValue">
                                                <div class="form-group">
                                                    <label>Value</label>
                                                    <input type="number" placeholder="Amount"
                                                           v-model="burnTokenValue" data-parsley-id="8"
                                                           class="form-control">

                                                </div>
                                                <div class="form-group text-right m-b-0">
                                                    <button type="submit" data-target="#sendToken-modal"

                                                            class="btn btn-default waves-effect waves-light">
                                                        Generate Transaction
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                <div id="menu2" class="tab-pane fade">
                                    <div class="tab-content">
                                        <div id="Mint" class="tab-pane active">
                                            <br>
                                            <form action="#" data-parsley-validate="" novalidate="novalidate"
                                                  @submit.prevent="getMintValues">
                                                <div class="form-group">
                                                    <label>Recipient Address</label>
                                                    <input type="text" placeholder="Address"
                                                           v-model="mintAddress" data-parsley-id="8"
                                                           class="form-control">

                                                </div>
                                                <div class="form-group">
                                                    <label>Value</label>
                                                    <input type="number" placeholder="Amount"
                                                           v-model="mintBalance" data-parsley-id="8"
                                                           class="form-control">


                                                </div>
                                                <div class="form-group text-right m-b-0">
                                                    <button type="submit" data-target="#sendToken-modal"
                                                            class="btn btn-default waves-effect waves-light">
                                                        Generate Transaction
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="menu3" class="tab-pane fade">
                                    <div class="tab-content">
                                        <div id="" class="tab-pane active">
                                            <br>
                                            <form action="#" data-parsley-validate="" novalidate="novalidate"
                                                  @submit.prevent="getPauseValues">
                                                <div class="form-group text-center m-b-0">
                                                    <button type="submit" data-target="#sendToken-modal"
                                                            class="btn btn-default waves-effect waves-light">
                                                        Generate Transaction
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                <div id="menu4" class="tab-pane fade">
                                    <div class="tab-content">
                                        <div id="Mint" class="tab-pane active">
                                            <br>
                                            <form action="#" data-parsley-validate="" novalidate="novalidate"
                                                  @submit.prevent="getUnPauseValues">
                                                <div class="form-group text-center m-b-0">
                                                    <button type="submit" data-target="#sendToken-modal"
                                                            @click="step = true"
                                                            class="btn btn-default waves-effect waves-light">
                                                        Generate Transaction
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                <div id="menu5" class="tab-pane fade ">
                                    <div class="tab-content">
                                        <div id="Mint" class="tab-pane active">
                                            <br>
                                            <form action="#" data-parsley-validate="" novalidate="novalidate"
                                                  @submit.prevent="getUpdateTokenValue">
                                                <div class="form-group">
                                                    <label>Value</label>
                                                    <input type="number" placeholder="Amount" name="balance"
                                                           v-model="updateTokenValue" data-parsley-id="8"
                                                           class="form-control">

                                                </div>
                                                <div class="form-group text-right m-b-0">
                                                    <button type="submit" data-target="#sendToken-modal"
                                                            class="btn btn-default waves-effect waves-light">
                                                        Generate Transaction
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>

                                <!--modal start -->
                                <div v-if="step === true">
                                    <div class=" p-0" style="margin-top: 15px">
                                        <ul class="nav nav-tabs navtab-custom nav-justified">
                                            <li class="active">
                                                <a href="#privateKey" data-toggle="tab" aria-expanded="true">
                                                    <span>Private key</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#jasonFile" data-toggle="tab" aria-expanded="false">
                                                    <span>Jason File</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div id="privateKey" class="tab-pane active">
                                                <form data-v-92875dbe="" action="#"
                                                      @submit.prevent="getPrivateKey" data-parsley-validate=""
                                                      novalidate="novalidate">
                                                    <div data-v-92875dbe="" class="form-group">
                                                        <label data-v-92875dbe="">Enter Your Private Key</label>
                                                        <input v-model="privateKey

" v-validate="{ required: true, min: 64 }" name="password" class="form-control"
                                                               :class="{ 'is-invalid': submitted && errors.has('password') }"
                                                               data-v-92875dbe=""
                                                               type="password" placeholder=""
                                                               data-parsley-id="8">
                                                    </div>
                                                    <div style="color:red;" v-if="submitted && errors.has('password')"
                                                         class="invalid-feedback">{{ errors.first('password') }}
                                                    </div>

                                                    <div data-v-92875dbe="" class="form-group text-right m-b-0">

                                                        <button type="submit" data-v-92875dbe=""
                                                                data-toggle="modal"
                                                                data-target="#sendToken-modal"
                                                                class="btn btn-default waves-effect waves-light">
                                                            Send Transaction
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div id="jasonFile" class="tab-pane ">
                                                <div>
                                                    <h4 translate="ADD_Radio_2_alt">Select Your Wallet File</h4>
                                                    <h5 style="color:  rgb(217, 83, 79);">
                                                        This is <u>not</u> a recommended way to access your wallet.
                                                    </h5>
                                                    <div class="form-group" style="color:  rgba(255, 255, 255, 0.8);">
                                                        Entering your private key on a website dangerous. If our website
                                                        is
                                                        compromised or you accidentally visit a different website, your
                                                        funds will
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
                                                        <a tabindex="0" type="file" role="button"
                                                           class="btn btn-primary  ng-hide"
                                                           id="upload_link" @click="upload_link"
                                                           translate="ADD_Label_6_short">SELECT
                                                            WALLET
                                                            FILE...


                                                        </a>
                                                        &nbsp;
                                                        <span style="color:#fff">{{this.fileName}}</span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- /.modal-content -->

                                </div>
                                <!--modal end-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var sendTokens = require('./../services/sendToken');
    var burnTokens = require('./../services/burnToken');
    var mintTokens = require('./../services/mint');
    var pauseTokens = require('./../services/pause');
    var unPauseTokens = require('./../services/unpause');
    var updateToken = require('./../services/updateRate');
    var getAccountFroomJson = require('./../services/getAccountFromJson');
    export default {
        data: function () {
            return {
                //Json import file
                fileName: '',
                tabValue: '',
                //send Tokens
                address: '',
                balance: 0,
                privateKey: '',
                step: false,
                submitted: false,
                //Burn Tokens
                burnTokenValue: 0,
                //Mint Token
                mintAddress: '',
                mintBalance: 0,

                //Update Toekn  price
                updateTokenValue: 0
            }
        },
        methods: {

            //Import file
            upload_link(e) {
                e.preventDefault();
                $("#upload:hidden").trigger('click');
            },
            onFileSelected(e) {
                e.preventDefault();
                //    console.log(e);
                var _this = this;
                this.fileName = e.target.files[0].name;
                var newFileName = this.fileName.split('.');
                console.log('New File name zzzzzzzzzzzzzzzz' + newFileName[1].length);

                if (newFileName[1].length > 46 || newFileName[1].length < 46) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Invalid file format');
                    this.fileName = '';
                    return false;
                }
                console.log('File Name ' + this.fileName);

                // Reference to the DOM input element
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job

                    reader.onload = (e) => {


                        var json_Data = e.target.result;


                        // json_Data = json_Data;
                        console.log("Json resposne is  " + json_Data);
                        var jsonBackResposne;
                        var resposne = getAccountFroomJson.getprivateKeyFromJson(json_Data).then((res) => {
                            jsonBackResposne = res;
                            console.log("Bacck json resposne " + JSON.stringify(jsonBackResposne));
                            console.log("Bacck json resposne of private key " + jsonBackResposne.privateKey);

                            switch (this.tabValue) {
                                case 'SendTokens':
                                    console.log('Send Token value is ' + this.tabValue);
                                    sendTokens.getPrivateKey(jsonBackResposne.privateKey.substring(2));
                                    _this.init();
                                    // sendTokens.getPrivateKey(_this.privateKey);
                                    break;
                                case 'Burn' :
                                    console.log('Inside burn' + this.tabValue);
                                    burnTokens.getPrivateKey(jsonBackResposne.privateKey.substring(2));
                                    _this.init();
                                    // burnTokens.getPrivateKey(_this.privateKey);
                                    break;
                                case 'Mint' :
                                    console.log('Inside Mint' + this.tabValue);
                                    mintTokens.getPrivateKey(jsonBackResposne.privateKey.substring(2));
                                    _this.init();
                                    // mintTokens.getPrivateKey(_this.privateKey);
                                    break;
                                case 'Pause' :
                                    console.log('Inside Pause' + this.tabValue);
                                    pauseTokens.getPrivateKey(jsonBackResposne.privateKey.substring(2));
                                    _this.init();
                                    break;
                                case 'Unpause' :
                                    console.log('Inside Unpause' + this.tabValue);
                                    unPauseTokens.getPrivateKey(jsonBackResposne.privateKey.substring(2));
                                    _this.init();
                                    break;
                                case 'updateToken' :
                                    console.log('Inside Update Token' + this.tabValue);
                                    updateToken.getPrivateKey(jsonBackResposne.privateKey.substring(2));
                                    _this.init();
                                    break;
                                default:
                                    alert('Bye');
                                    _this.init();
                                    break;

                            }
                            // sendTokens.getPrivateKey(jsonBackResposne.privateKey.substring(2));
                        });


                    };
                    // Start the reader job - read file
                    reader.readAsText(input.files[0]);


                }
            },
            // Send tokens Tab
            getValues: function () {
                var _this = this;
                console.log("Address 0 index " + _this.address[0]);
                console.log("Address 1 index  " + _this.address[1]);
                if(_this.address === '')
                {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is required');
                }
                // else if(_this.address[0] === '0' && _this.address[1] === 'x')
                // {
                //     alertify.set('notifier', 'position', 'top-right');
                //     alertify.error('Address field start with 0x');
                // }
                else if(_this.address.length > 42){
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is not greater than 42');
                }
                else if(_this.address.length < 42){

                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is not less than 42');
                }
                else if(_this.balance === 0){
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is required and not equal to 0 ');
                }
                else{
                    sendTokens.getAddressAndTokenValues(_this.address, _this.balance);
                    this.step = true;
                    this.tabValue = 'SendTokens';
                }


            },
            getTokenValue: function () {
                var _this = this;

                if(_this.burnTokenValue === 0){
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is required and not equal to 0 ');
                }
                else {
                    burnTokens.getTokenValues(_this.burnTokenValue);
                    this.step = true;
                    this.tabValue = "Burn";
                }



            },
            getMintValues: function () {
                var _this = this;
                if(_this.mintAddress === '')
                {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is required');
                }
                // else if(_this.mintAddress[0] === '0' && _this.mintAddress[1] === 'x')
                // {
                //     alertify.set('notifier', 'position', 'top-right');
                //     alertify.error('Address field start with 0x');
                // }
                else if(_this.mintAddress.length > 42){
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is not greater than 42');
                }
                else if(_this.mintAddress.length < 42){

                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is not less than 42');
                }
                else if(_this.mintBalance === 0){
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is required and not equal to 0 ');
                }
                else {
                    mintTokens.getAddressAndTokenValues(_this.mintAddress, _this.mintBalance);
                    this.step = true;
                    this.tabValue = 'Mint';
                }

            },
            getPauseValues: function () {
                this.step = true;
                this.tabValue = 'Pause';
            },
            getUnPauseValues: function () {
                this.step = true;
                this.tabValue = 'Unpause';

            },
            getUpdateTokenValue: function () {
                var _this = this;
                if(_this.updateTokenValue === 0){

                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Address field is required and not equal to 0 ');
                }
                else{
                    updateToken.getTokenValues(_this.updateTokenValue);
                    this.step = true;
                    this.tabValue = 'updateToken';
                }

                },
            getPrivateKey: function (e) {

                var _this = this;
                e.preventDefault();
                _this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {

                        switch (this.tabValue) {
                            case 'SendTokens':
                                console.log('Send Token value is ' + this.tabValue);
                                sendTokens.getPrivateKey(_this.privateKey);
                                _this.init();
                                break;
                            case 'Burn' :
                                console.log('Inside burn' + this.tabValue);
                                burnTokens.getPrivateKey(_this.privateKey);
                                _this.init();
                                break;
                            case 'Mint' :
                                console.log('Inside Mint' + this.tabValue);
                                mintTokens.getPrivateKey(_this.privateKey);
                                _this.init();
                                break;
                            case 'Pause' :
                                console.log('Inside Pause' + this.tabValue);
                                pauseTokens.getPrivateKey(_this.privateKey);
                                _this.init();
                                break;
                            case 'Unpause' :
                                console.log('Inside Unpause' + this.tabValue);
                                unPauseTokens.getPrivateKey(_this.privateKey);
                                _this.init();
                                break;
                            case 'updateToken' :
                                console.log('Inside updateToken' + this.tabValue);
                                updateToken.getPrivateKey(_this.privateKey);
                                _this.init();
                                break;
                            default:
                                alert('Bye');
                                _this.init();
                                break;

                        }
                    }
                });


            },
            init: function () {

                var _this = this;
                _this.privateKey = '';
                _this.balance = 0;
                _this.address = '';
                _this.burnTokenValue = 0;
                _this.mintAddress = '';
                _this.mintBalance = 0;
                _this.updateTokenValue = 0;
                _this.fileName = '';
                _this.step = false;
                _this.tabValue = '';
                _this.submitted = false;


            }
        },
        mounted() {


        }
    }
</script>
