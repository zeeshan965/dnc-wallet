<template>
    <div>
        <div id="Bitcoin-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
            style="display: none;">
            <div class="modal-dialog modal-lg">
                <div class="modal-content p-0">
                    <ul class="nav nav-tabs navtab-custom nav-justified">
                        <li class="active">
                            <a href="#11" data-toggle="tab" aria-expanded="true">

                                <span>Details</span>
                            </a>
                        </li>
                        <li class="">
                            <a href="#22" data-toggle="tab" aria-expanded="false">

                                <span>Send/Transfer</span>
                            </a>
                        </li>

                        <!--<li class="">-->
                            <!--<a href="#55" data-toggle="tab" aria-expanded="false">-->

                                <!--<span>Burn</span>-->
                            <!--</a>-->
                        <!--</li>-->
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="11">
                            <div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <p><img src="assets/images/icon/dinar-icon3.png"> DinarCoin (DNC)</p>
                                        <ul class="list-unstyled">
                                            <li><i class="fa fa-desktop" aria-hidden="true"></i> Website</li>
                                            <li><i class="fa fa-search" aria-hidden="true"></i> Explorer</li>
                                            <li><i class="fa fa-tasks" aria-hidden="true"></i> Whitepapper</li>


                                            <li><i class="fa fa-tags" aria-hidden="true"></i>

                                                <small><span class="label label-success">Mineable</span></small>

                                                <small><span class="label label-success">Currency</span></small>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-8">
                                        <p>Market Free</p>
                                        <h3>$ 588.15 (1.37 %) </h3>
                                        <div class="table-responsive">
                                            <table class="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Market Cap</th>
                                                        <th>Volume(24H)</th>
                                                        <th>Available Supply</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>$ 00,000&nbsp;</td>
                                                        <td>$ 00,000</td>
                                                        <td>00,000 DNC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>00,000 BTC</td>
                                                        <td>00,000 BTC</td>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <br>
                                        <ul class="nav nav-tabs navtab-custom">
                                            <li class="active">
                                                <a href="#dinar_chart2" data-toggle="tab" aria-expanded="true">
                                                    <span class="visible-xs"><i class="fa fa-list-alt" aria-hidden="true"></i></span>
                                                    <span class="hidden-xs">Markets</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="dinar_chart2">
                                                <h3>DinarCoin Markets</h3>
                                                <p> <br>In Progress</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="22">
                            <p> </p>
                            <p>Send Dinarcoin from 0xc0d594d4dccf49f79e43e427a696678da6bc11ba</p>
                            <p>DinarCoin transactions are written to a global transaction log called the Ethereum
                                blockchain. Because there is no central authority controlling the log, we wait for
                                multiple confirmations before allowing use of the DinarCoin.</p>



                            <form action="#" data-parsley-validate="" novalidate="">
                                <div class="form-group">
                                    <label for="receiving-address">Receiving SmartX address*</label>
                                    <input id="receiving-address" type="text" placeholder="DinarCoin Address" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label >Amount in Dinarcoin*</label>
                                    <input id="amount" type="number" placeholder="Amount DinarCoin" class="form-control">
                                </div>



                                <div class="form-group">
                                    <label >You Security Password*</label>
                                    <input  type="password" placeholder="Security Password" required="" class="form-control"
                                        data-parsley-id="8">
                                    <small>Please Confirm the send with your security password</small>
                                </div>

                                <div class="form-group">
                                    <label>Description</label>
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <input type="text" placeholder="Amount DinarCoin" class="form-control">
                                        </div>
                                        <div class="col-lg-4">
                                            <select class="form-control">
                                                <option>USD</option>
                                                <option>SGD</option>
                                                <option>MYR</option>
                                                <option>IDR</option>
                                                <option>THB</option>
                                                <option>BHD</option>
                                                <option>JPY</option>
                                                <option>IND</option>


                                            </select>

                                        </div>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="userName">Value DinarCoin</label>
                                    <input type="number" placeholder="Value DinarCoin" class="form-control">
                                </div>





                                <div class="form-group text-right m-b-0">
                                    <button class="btn btn-default waves-effect waves-light" type="submit">
                                        Send Dinar Coin
                                    </button>
                                    <button type="reset" class="btn btn-default waves-effect waves-light m-l-5">
                                        Cancel
                                    </button>
                                </div>

                            </form>
                            <p></p>
                        </div>
                        <div class="tab-pane" id="55">
                            <p></p>
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="nav nav-tabs navtab-custom">
                                        <li class="active">
                                            <!--<a href="#Mint" data-toggle="tab" aria-expanded="false">-->
                                                <!--<span class="visible-xs"><i class="fa fa-home"></i></span>-->
                                                <!--<span class="hidden-xs">Mint</span>-->
                                            <!--</a>-->
                                        <!--</li>-->
                                        <li class="">
                                            <a href="#Burn" data-toggle="tab" aria-expanded="false">
                                                <span class="visible-xs"><i class="fa fa-user"></i></span>
                                                <span class="hidden-xs">Burn</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <!--<div class="tab-content">-->
                                        <!--<div class="tab-pane active" id="Mint">-->
                                            <!--<ul class="list-unstyled">-->
                                                <!--<li>DinarCoin Balance: 2 DinarCoins</li>-->
                                                <!--<li>DinarCoin Price: $205.32 USD (0.3561627677031908 BTC)</li>-->
                                            <!--</ul>-->
                                            <!--<br>-->
                                            <!--<form action="#" data-parsley-validate="" novalidate="">-->
                                                <!--<div class="form-group">-->
                                                    <!--<label for="userName">Amount of DinarCoin to mint</label>-->
                                                    <!--<input type="number" placeholder="1DNC" class="form-control">-->
                                                <!--</div>-->
                                                <!--<div class="form-group">-->
                                                    <!--<label for="userName">Wallet To Use</label>-->
                                                    <!--<select class="form-control">-->
                                                        <!--<option>Please Choose</option>-->
                                                        <!--<option>BTC - 123345536279</option>-->
                                                        <!--<option>ETC - 223444567432</option>-->

                                                    <!--</select>-->
                                                <!--</div>-->
                                                <!--<div class="form-group">-->
                                                    <!--<label for="userName">Choose your destination for mint :</label>-->
                                                    <!--<select class="form-control">-->
                                                        <!--<option>Please Choose</option>-->
                                                        <!--<option>SmartX Address :-->
                                                            <!--0xc0d594d4dccf49f79e43e427a696678da6bc11ba</option>-->

                                                    <!--</select>-->
                                                <!--</div>-->
                                                <!--<div class="form-group">-->
                                                    <!--<label >Your Security Password*</label>-->
                                                    <!--<input  type="password" placeholder="Security Password"-->
                                                        <!--required="" class="form-control" data-parsley-id="8">-->
                                                    <!--<small>Please Confirm the send with your security password</small>-->
                                                <!--</div>-->
                                                <!--<div class="form-group text-right m-b-0">-->
                                                    <!--<button class="btn btn-default waves-effect waves-light" type="submit">-->
                                                        <!--Send-->
                                                    <!--</button>-->
                                                    <!--<button type="reset" class="btn btn-default waves-effect waves-light m-l-5">-->
                                                        <!--Cancel-->
                                                    <!--</button>-->
                                                <!--</div>-->
                                            <!--</form>-->
                                        <!--</div>-->
                                        <!--<div class="tab-pane" id="Burn">-->
                                            <!--<ul class="list-unstyled">-->
                                                <!--<li>DinarCoin Balance: 2 DinarCoins</li>-->
                                                <!--<li>DinarCoin Price: $162.32 USD (0.2861627677031908 BTC)</li>-->
                                            <!--</ul>-->
                                            <!--<br>-->
                                            <!--<form action="#" data-parsley-validate="" novalidate="">-->
                                                <!--<div class="form-group">-->
                                                    <!--<label for="userName">Amount of DinarCoin to burn</label>-->
                                                    <!--<input type="number" placeholder="1DNC" class="form-control">-->
                                                <!--</div>-->
                                                <!--<div class="form-group">-->
                                                    <!--<label for="userName">Wallet To Use</label>-->
                                                    <!--<select class="form-control">-->
                                                        <!--<option>Please Choose</option>-->
                                                        <!--<option>BTC - 123345536279</option>-->
                                                        <!--<option>ETC - 223444567432</option>-->

                                                    <!--</select>-->
                                                <!--</div>-->
                                                <!--<div class="form-group">-->
                                                    <!--<label for="userName">Choose your destination for burn :</label>-->
                                                    <!--<select class="form-control">-->
                                                        <!--<option>Please Choose</option>-->
                                                        <!--<option>BTC Address : 2321nasdhWdqwoiuye128y9821y98983y</option>-->
                                                        <!--<option>ETH Address : x372831987fjkhdfkjhjkhkjhkjhjkhdsf1237</option>-->

                                                    <!--</select>-->
                                                <!--</div>-->
                                                <!--<div class="form-group">-->
                                                    <!--<label >Your Security Password*</label>-->
                                                    <!--<input  type="password" placeholder="Security Password"-->
                                                        <!--required="" class="form-control" data-parsley-id="8">-->
                                                    <!--<small>Please Confirm the send with your security password</small>-->
                                                <!--</div>-->
                                                <!--<div class="form-group text-right m-b-0">-->
                                                    <!--<button class="btn btn-default waves-effect waves-light" type="submit">-->
                                                        <!--Send-->
                                                    <!--</button>-->
                                                    <!--<button type="reset" class="btn btn-default waves-effect waves-light m-l-5">-->
                                                        <!--Cancel-->
                                                    <!--</button>-->
                                                <!--</div>-->

                                            <!--</form>-->

                                            <!--<div class="row">-->

                                                <!--<div class="col-lg-12">-->
                                                    <!--<br>-->
                                                    <!--<p class="text-danger">Current Order (0)</p>-->
                                                    <!--<table class="table table-striped table-color">-->
                                                        <!--<tbody>-->
                                                            <!--<tr>-->
                                                                <!--<td>Order Time</td>-->
                                                                <!--<td>Type</td>-->
                                                                <!--<td>Resource</td>-->
                                                                <!--<td>Order Price</td>-->
                                                                <!--<td>Order Volume</td>-->
                                                                <!--<td>Residual Volume</td>-->
                                                                <!--<td>Status</td>-->
                                                                <!--<td>Operation</td>-->
                                                            <!--</tr>-->
                                                            <!--<tr>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                            <!--</tr>-->
                                                        <!--</tbody>-->
                                                    <!--</table>-->
                                                    <!--<br>-->
                                                    <!--<p class="text-danger">Order History</p>-->
                                                    <!--<table class="table table-striped table-color">-->
                                                        <!--<tbody>-->
                                                            <!--<tr>-->
                                                                <!--<td>Order Time</td>-->
                                                                <!--<td>Type</td>-->
                                                                <!--<td>Resource</td>-->
                                                                <!--<td>Order Price</td>-->
                                                                <!--<td>Order Volume</td>-->
                                                                <!--<td>Any Trading Price</td>-->
                                                                <!--<td>Trading Volume</td>-->
                                                                <!--<td>Trading Amount</td>-->
                                                                <!--<td>Status</td>-->
                                                            <!--</tr>-->
                                                            <!--<tr>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                                <!--<td>&nbsp;</td>-->
                                                            <!--</tr>-->
                                                        <!--</tbody>-->
                                                    <!--</table>-->
                                                <!--</div>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                            <p></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                            <!--<button type="button" class="btn btn-primary waves-effect waves-light" @click="step = 2">Save changes</button>-->
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
