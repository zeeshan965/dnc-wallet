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
                                                <label for="userName">Amount of DinarCoin to mint</label>
                                                <input type="number" placeholder="1DNC" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label>Your Security Password*</label>
                                                <input type="password" placeholder="Security Password" required="required" data-parsley-id="8" class="form-control">
                                            <small>Please Confirm the send with your security password</small>
                                        </div>
                                            <div class="form-group text-right m-b-0">
                                                <button data-toggle="modal" data-target="#sendToken-modal"  class="btn btn-default waves-effect waves-light">
                                    Send
                                </button>
                                                <button type="reset" class="btn btn-default waves-effect waves-light m-l-5">
                                    Cancel
                                </button>
                                            </div>
                                        </form>
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
                <!--<div class="row">-->
                    <!--<div class="col-md-4 col-md-offset-2">-->
                        <!--<div class="form-group">-->
                            <!--<label>Contract Address</label>-->
                            <!--<input type="text" class="form-control" placeholder="notopia.eth or 0xD3E00087">-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="col-md-4">-->
                        <!--<div class="form-group">-->
                            <!--<label>Select Existing Contract</label>-->
                            <!--<select class="form-control">-->
                                <!--<option>Select a contract ...</option>-->
                            <!--</select>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="row">-->
                    <!--<div class="col-md-8 col-md-offset-2">-->
                        <!--<div class="form-group">-->
                            <!--<label>Abi / JSON Interface</label>-->
                            <!--<textarea class="form-control" placeholder='[{ "type":"contructor", "inputs": [{ "name":"param1", "type":"uint256", "indexed":true }], "name":"Event" }, { "type":"function", "inputs": [{"name":"a", "type":"uint256"}], "name":"foo", "outputs": [] }] '></textarea>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="row">-->
                    <!--<div class="col-md-8 col-md-offset-2">-->
                        <!--<div class="form-group">-->
                            <!--<button class="btn btn-lg btn-primary" @click="step = 2">Access</button>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="row" v-if="step == 2">-->
                    <!--<div class="col-md-8 col-md-offset-2">-->
                        <!--<h3>Read / Write Contract</h3>-->
                        <!--<div class="form-group">-->
                            <!--<select class="form-control">-->
                                <!--<option value="">Name</option>-->
                            <!--</select>-->
                        <!--</div>-->
                        <!--<div class="form-group">-->
                            <!--<input type="text" class="form-control" value="Adshares Token">-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
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
