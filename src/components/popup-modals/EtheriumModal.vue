
<template>
    <div>
        <div id="Etherium-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
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
                            <div class="tab-content">
                                <div>
                                    <br>
                                    <form action="#" data-parsley-validate="" novalidate="novalidate"
                                          >
                                        <div class="form-group">
                                            <label>Recipient Address</label>
                                            <input type="text" placeholder="Address" required="required"
                                                   data-parsley-id="8" class="form-control">

                                        </div>
                                        <div class="form-group">
                                            <label>Value</label>
                                            <input type="number" placeholder="Amount" required="required"
                                                    data-parsley-id="8" class="form-control">

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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                            <!--<button type="button" class="btn btn-primary waves-effect waves-light" @click="step = 2">Save changes</button>-->
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
                                               data-parsley-validate=""
                                              novalidate="novalidate">
                                            <div data-v-92875dbe="" class="form-group">
                                                <label data-v-92875dbe="">Enter Your Private Key</label>
                                                <input data-v-92875dbe="" type="password" placeholder="" required="required" data-parsley-id="8" class="form-control">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- /.modal-content -->

                        </div>
                        <!--modal end-->
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                step: false,
            }
        }
    }
</script>

