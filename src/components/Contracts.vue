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
                                                    <input type="number" placeholder="Amount" required="required"
                                                           v-model="balance" data-parsley-id="8" class="form-control">

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
                                                  @submit.prevent="getValues">
                                                <div class="form-group">
                                                    <label>Value</label>
                                                    <input type="number" placeholder="Amount" required="required"
                                                           v-model="balance" data-parsley-id="8" class="form-control">
                                                </div>
                                                <div class="form-group text-right m-b-0">
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
                                <div id="menu2" class="tab-pane fade">
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
                                                    <input type="number" placeholder="Amount" required="required"
                                                           v-model="balance" data-parsley-id="8" class="form-control">

                                                </div>
                                                <div class="form-group text-right m-b-0">
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
                                <div id="menu3" class="tab-pane fade">
                                    <div class="tab-content">
                                        <div id="" class="tab-pane active">
                                            <br>
                                            <form action="#" data-parsley-validate="" novalidate="novalidate"
                                                  @submit.prevent="getValues">
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
                                <div id="menu4" class="tab-pane fade">
                                    <div class="tab-content">
                                        <div id="Mint" class="tab-pane active">
                                            <br>
                                            <form action="#" data-parsley-validate="" novalidate="novalidate"
                                                  @submit.prevent="getValues">
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

                                <!--end of private key jason file-->
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
                                " data-v-92875dbe="" type="password" placeholder="" required="required"
                                                               data-parsley-id="8" class="form-control">
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
                                                <span>Jason File</span>
                                            </div>
                                        </div>
                                    </div><!-- /.modal-content -->
                                </div>
                            </div>
                        </div>
                        <!--end of private key jason file-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var sendTokens = require('./../services/sendToken');
    export default {
        data: function () {
            return {
                address: '',
                balance: 0,
                privateKey: '',
                step: false,
                burnStep: 1,
                mintStep: 1,
                pauseStep: 1,
                unPauseStep: 1,
            }
        },
        methods: {
            getValues: function () {

                var _this = this;
                sendTokens.getAddressAndTokenValues(_this.address, _this.balance);
                _this.step = true;


            },
            getPrivateKey: function () {

                var _this = this;
                sendTokens.getPrivateKey(_this.privateKey);
            }
        },
        mounted() {




        }
    }
</script>
