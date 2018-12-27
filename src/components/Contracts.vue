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
                <div class="col-md-12 col-md-offset-2">
                <div class="row">
                        <ul class="nav nav-pills">
                            <li class="active"><a data-toggle="pill" href="#home">Send Tokens</a></li>
                            <li><a data-toggle="pill" href="#menu1">Burn</a></li>
                            <li><a data-toggle="pill" href="#menu2">Menu 2</a></li>
                        </ul>
                    <div class="col-md-8 ">
                    <div class="tab-content">
                            <div id="home" class="tab-pane fade in active">
                                <div class="tab-content">
                                    <div id="Mint" class="tab-pane active">
                                        <ul class="list-unstyled">
                                            <li>DinarCoin Balance: 2 DinarCoins</li>
                                            <li>DinarCoin Price: $205.32 USD (0.3561627677031908 BTC)</li>
                                        </ul>
                                        <br>
                                        <form action="#" data-parsley-validate="" novalidate="novalidate" @click.prevent=''>
                                            <div class="form-group">
                                                <label>Recipient Address</label>
                                                <input type="text" placeholder="Address" required="required" data-parsley-id="8" class="form-control">
                                           </div>
                                            <div class="form-group">
                                                <label>Value</label>
                                                <input type="text" placeholder="Amount" required="required" data-parsley-id="8" class="form-control">
                                            </div>
                                            <div class="form-group text-right m-b-0">
                                                <button @click="step = 2" data-target="#sendToken-modal"  class="btn btn-default waves-effect waves-light">
                                    Generate Transaction
                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div v-if="step === 2">
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
                                                    <form data-v-92875dbe="" action="#" data-parsley-validate="" novalidate="novalidate">
                                                        <div data-v-92875dbe="" class="form-group">
                                                            <label data-v-92875dbe="">Enter Your Private Key</label>
                                                            <input data-v-92875dbe="" type="password" placeholder="" required="required" data-parsley-id="8" class="form-control">
                                                        </div>

                                                        <div data-v-92875dbe="" class="form-group text-right m-b-0">

                                                        <button data-v-92875dbe="" data-toggle="modal" data-target="#sendToken-modal" class="btn btn-default waves-effect waves-light">
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
                        <div id="menu1" class="tab-pane fade">
                            <h3 style="color: #ffffff">Menu 2</h3>
                            <p>Some content in menu 2.</p>
                        </div>
                        <div id="menu2" class="tab-pane fade">
                            <h3 style="color: #ffffff">Menu 2</h3>
                            <p>Some content in menu 3.</p>
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
    export default {
        data: function(){
            return {
                step: 1
            }
        }
    }
</script>
