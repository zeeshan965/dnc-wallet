<template>

    <div>
        <div class="content m-t-40">
            <div class="container">
                <!-- Page-Title -->
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <ol class="breadcrumb pull-right">

                                <li class="active">Dashboard</li>
                            </ol>
                            <h4 class="page-title text-left">Welcome !</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card-box">
                            <h4 class="header-title m-t-0 text-left">Wallet Information</h4>
                            <div class="row">
                                <div class="btn-group pull-right"
                                     style="margin: 19px;margin-top: -36px;margin-right: 10px;">
                                    <!-- CURRENCY, BOOTSTRAP DROPDOWN -->
                                    <!--<a class="btn btn-primary" href="javascript:void(0);">Currency</a>-->
                                    <label> Price :&nbsp;&nbsp; </label>
                                    <select class="select7" style="display: none;">
                                        <option value="USD" data-icon="assets/flag2/us.png">USD</option>
                                        <option value="SGD" data-icon="assets/flag2/sg.png">SGD</option>
                                        <option value="MYR" data-icon="assets/flag2/my.png">MYR</option>
                                        <option value="IDR" data-icon="assets/flag2/id.png">IDR</option>
                                        <option value="THB" data-icon="assets/flag2/th.png">THB</option>
                                        <option value="BD" data-icon="assets/flag2/bh.png">BHD</option>
                                        <option value="JPY" data-icon="assets/flag2/jp.png">JPY</option>
                                        <option value="IND" data-icon="assets/flag2/in.png">IND</option>
                                    </select>
                                    <div class="select7 ">
                                        <div class="select7__current">
                                            <span data-role="value" class="select7__current-value"
                                                  data-value="USD"><span
                                                    class="select7__icon"><img
                                                    src="assets/flag2/us.png"></span>USD</span><span
                                                class="select7__caret"></span>
                                        </div>
                                    </div>


                                </div>


                            </div>


                            <div class="table-responsive">
                                <table class="table table-striped table-color">
                                    <thead>
                                    <tr>
                                        <th>Assets</th>
                                        <th>Address</th>
                                        <th>We Buy</th>
                                        <th>We Sell</th>
                                        <th>Market</th>
                                        <th>Balance</th>
                                        <th>Action</th>
                                    </tr>

                                    </thead>
                                    <tbody>

                                    <!-- DNC Lisitng-->
                                    <tr v-for="(dncAddr,index) in DNCAddresses " :key="index">
                                        <!-- <tr > -->
                                        <td><img src="assets/images/icon/dinar-icon.png"> &nbsp; DNC</td>
                                        <td>{{ dncAddr}}</td>
                                        <td class="text-success"><strong><span id="currency_price"><i class="fa fa-usd"
                                                                                                      aria-hidden="true"></i> 167.35 </span></strong>
                                            <i class="fa fa-caret-up"
                                               aria-hidden="true"></i></td>
                                        <td class="text-success"><strong><span id="currency_price1"> <i
                                                class="fa fa-usd"
                                                aria-hidden="true"></i> 211.05 </span></strong> <i
                                                class="fa fa-caret-up"
                                                aria-hidden="true"></i></td>
                                        <td class="text-success"><strong><span id="currency_price2"> <i
                                                class="fa fa-usd"
                                                aria-hidden="true"></i> 211.05 </span></strong> <i
                                                class="fa fa-caret-up"
                                                aria-hidden="true"></i></td>
                                        <td><img src="assets/images/icon/dinar-icon2.png"> {{
                                            DNCAddressesBalance[index]
                                            }} DNC.
                                            <hr class="hr_b">
                                            <small><span id="currency_dnc"> <i class="fa fa-usd"
                                                                               aria-hidden="true"></i> 0.00 usd </span>
                                            </small>
                                        </td>
                                        <td>
                                            <button class="btn btn-block btn-default2 waves-effect waves-light m-b-5"
                                                    data-toggle="modal" data-target="#DNC-modal">My DinarCoin <i
                                                    class="glyphicon glyphicon-circle-arrow-right"></i></button>
                                        </td>
                                    </tr>
                                    <!--Eth Listing -->
                                    <tr  v-for="(addr,index) in userAddresses " :key="'eth'+index">
                                        <td><img src="assets/images/icon/eth-icon.png">&nbsp; ETH</td>
                                        <td>{{ addr}}</td>
                                        <td class="text-success"><strong><span id="currency_price_sl"> <i
                                                class="fa fa-usd"
                                                aria-hidden="true"></i> 10.44 </span></strong> <i class="fa fa-caret-up"
                                                                                                  aria-hidden="true"></i>
                                        </td>
                                        <td class="text-success"><strong><span id="currency_price_sl1"> <i
                                                class="fa fa-usd"
                                                aria-hidden="true"></i> 13.34 </span></strong> <i class="fa fa-caret-up"
                                                                                                  aria-hidden="true"></i>
                                        </td>
                                        <td class="text-danger"><strong><span id="currency_price_sl2"> <i
                                                class="fa fa-usd"
                                                aria-hidden="true"></i> 11.60 </span></strong> <i
                                                class="fa fa-caret-down"
                                                aria-hidden="true"></i></td>
                                        <td><img src="assets/images/icon/eth-icon2.png"> {{
                                            userAddressesBalance[index]
                                            }} ETH
                                            <hr class="hr_b">
                                            <small><span id="currency_eth"> <i class="fa fa-usd"
                                                                               aria-hidden="true"></i> 0.00 usd </span>
                                            </small>
                                        </td>
                                        <td>

                                            <button class="btn btn-block btn-default2 waves-effect waves-light m-b-5"
                                                    data-toggle="modal" data-target="#Etherium-modal">My EtherCoin <i
                                                    class="glyphicon glyphicon-circle-arrow-right"></i></button>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
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
    var DncToken = require('./../services/sendToken');


    export default {

        data: function () {
            return {

                WalletServiceProvider: WalletService,
                // DNC Variables
                DNCAddresses: WalletService.addresses,
                DNCAddressesBalance: WalletService.dncAddressesBlancess,
                //Eth Variables
                userAddresses: WalletService.addresses,
                userAddressesBalance: WalletService.addressesBlancess,

            }
        },


        mounted: function mounted() {

            var _this = this;

            console.log('ddddfdd ' + WalletService.addressesBlancess[0]);
            this.userBalance = WalletService.addressesBlancess[0];
           // DncToken.hi();
            //DncToken.getTransactionCount();


        }
    }
</script>
