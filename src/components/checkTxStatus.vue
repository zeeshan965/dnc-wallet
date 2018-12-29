<template>
    <div>
        <section class="block txstatus__1">
            <article class="row">
                <section class="col-xs-12 col-sm-8 col-sm-offset-2 text-center">
                    <h1 translate="NAV_CheckTxStatus" class="ng-scope">Check TX Status</h1>
                    <p translate="tx_Summary" class="ng-scope">During times of high volume (like during ICOs)
                        transactions can be pending for hours, if not days. This tool aims to give you the ability to
                        find and "cancel" / replace these TXs. <strong> This is not typically something you can do. It
                            should not be relied upon &amp; will only work when the TX Pools are full. <a
                                    target="_blank" rel="noopener noreferrer"
                                    href="https://kb.myetherwallet.com/transactions/check-status-of-ethereum-transaction.html">Please,
                                read about this tool here.</a></strong></p>
                </section>

                <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                    <form data-v-92875dbe="" action="#"
                          @submit.prevent="checkTransactionStatus" data-parsley-validate=""
                          novalidate="novalidate">
                        <input class="form-control ng-pristine ng-untouched ng-valid ng-empty is-invalid"
                               v-model="txStatus"
                               type="text"

                               name="txStatus"
                               placeholder="0x3f0efedfe0a0cd611f2465fac9a3699f92d6a06613bc3ead4f786856f5c73e9c"

                               v-validate="{ required: true}"

                               :class="{ 'is-invalid':  submitted && errors.has('txStatus') }"
                               aria-label="TX Hash">

                        <div style="color:red; text-align: left !important;" v-if=" submitted && errors.has('txStatus')"
                             class="invalid-feedback">{{ errors.first('txStatus') }}
                        </div>

                        <button style="margin:  15px" type="submit" role="button" class="btn btn-primary ng-scope">Check
                            TX Status
                        </button>

                    </form>
                </section>
            </article>
        </section>

        <div v-if="step == 2">
            <section class="block txstatus__2"
                     ng-show="txInfo.status==txStatus.mined || txInfo.status==txStatus.notFound || txInfo.status==txStatus.found">

                <div class="cont-md" ng-show="txInfo.status == txStatus.mined">
                    <h3 class="text-success ng-scope" translate="tx_FoundOnChain">Transaction Found</h3>
                    <h5><a href="https://etherscan.io/tx/" target="_blank" rel="noopener noreferrer"
                           class="ng-binding"> </a></h5>
                    <p><strong translate="tx_FoundOnChain_1" class="ng-scope">Your transaction was successfully mined
                        and is on the blockchain.</strong></p>
                    <ul>
                        <li translate="tx_FoundOnChain_2" class="ng-scope"><strong>If you see a red <code>( ! )</code>,
                            a <code>BAD INSTRUCTION</code> or <code>OUT OF GAS</code> error message</strong>, it means
                            that the transaction was not successfully <em>sent</em>. You cannot cancel or replace this
                            transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you
                            should double the gas limit you specified originally.
                        </li>
                        <li translate="tx_FoundOnChain_3" class="ng-scope"><strong>If you do not see any errors, your
                            transaction was successfully sent.</strong> Your ETH or Tokens are where you sent them. If
                            you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it
                            has been 24+ hours since you sent, please <a target="_blank" rel="noopener noreferrer"
                                                                         href="https://kb.myetherwallet.com/diving-deeper/ethereum-list-of-support-and-communities.html">contact
                                that service</a>. Send them the <em>link</em> to your transaction and ask them, nicely,
                            to look into your situation.
                        </li>
                    </ul>
                </div>

                <div class="cont-md ng-hide" ng-show="txInfo.status == txStatus.notFound">
                    <h3 class="text-danger ng-scope" translate="tx_notFound">Transaction Not Found</h3>
                    <p>
                        <strong translate="tx_notFound_1" class="ng-scope">This TX cannot be found in the TX Pool of the
                            node you are connected to.</strong>
                    </p>
                    <ul>
                        <li translate="tx_notFound_2" class="ng-scope">If you just sent the transaction, please wait 15
                            seconds and press the "Check TX Status" button again.
                        </li>
                        <li translate="tx_notFound_3" class="ng-scope">It could still be in the TX Pool of a different
                            node, waiting to be mined.
                        </li>
                        <li translate="tx_notFound_4" class="ng-scope">Please use the dropdown in the top-right &amp;
                            select a different ETH node (e.g. <code>ETH (Etherscan.io)</code> or <code>ETH
                                (Infura.io)</code> or <code>ETH (MyEtherWallet)</code>) and check again.
                        </li>
                    </ul>
                </div>

                <div class="cont-md ng-hide" ng-show="txInfo.status == txStatus.found">
                    <h3 class="text-warning ng-scope" translate="tx_foundInPending">Pending Transaction Found</h3>
                    <ul>
                        <li translate="tx_foundInPending_1" class="ng-scope">Your transaction was located in the TX Pool
                            of the node you are connected to.
                        </li>
                        <li translate="tx_foundInPending_2" class="ng-scope">It is currently pending (waiting to be
                            mined).
                        </li>
                        <li translate="tx_foundInPending_3" class="ng-scope">There is a chance you can "cancel" or
                            replace this transaction. Unlock your wallet below.
                        </li>
                    </ul>
                </div>

                <div ng-show="txInfo.status == txStatus.found || txInfo.status == txStatus.mined" class="">
                    <h4 translate="tx_Details" class="cont-md ng-scope">Transaction Details</h4>
                    <br>
                    <table class="table table-striped txstatus__2 cont-md">
                        <!-- ng-show="tx.status=='foundOnChain' || foundInPending'"-->
                        <tbody>
                        <tr>
                            <td translate="x_TxHash" class="ng-scope">TX Hash</td>
                            <td>
                                <a href="https://ropsten.etherscan.io/tx/0x15e1e7ea0057d89cffbe326c6b36744cbe8db332888d728b28c059502da834c9"
                                   target="_blank" rel="noopener noreferrer" class="ng-binding">
                                    0x15e1e7ea0057d89cffbe326c6b36744cbe8db332888d728b28c059502da834c9
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td translate="OFFLINE_Step1_Label_1" class="ng-scope">From Address</td>
                            <td>
                                <a href="https://ropsten.etherscan.io/address/0x41e98269c80a7133de019261f6f4d96d77cc6821"
                                   target="_blank" rel="noopener noreferrer" class="ng-binding">
                                    0x41e98269C80a7133De019261f6F4d96d77cc6821
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td translate="OFFLINE_Step2_Label_1" class="ng-scope">To Address</td>
                            <td>
                                <a href="https://ropsten.etherscan.io/address/0x3a84b2d899253a0d01ac89b948db376c9af06064"
                                   target="_blank" rel="noopener noreferrer" class="ng-binding">
                                    0x3a84b2d899253a0D01aC89B948DB376c9af06064
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td translate="SEND_amount_short" class="ng-scope">Amount</td>
                            <td class="ng-binding">
                                0 ETH
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a class="account-help-icon"
                                   href="https://kb.myetherwallet.com/transactions/what-is-nonce.html" target="_blank"
                                   rel="noopener noreferrer">
                                    <!--<img src="images/icon-help.svg" class="help-icon">-->
                                    <p class="account-help-text ng-scope" translate="NONCE_Desc">The nonce is the number
                                        of transactions sent from a given address. It ensures transactions are sent in
                                        order &amp; not more than once.</p>
                                </a>
                                <span translate="OFFLINE_Step2_Label_5" class="ng-scope">Nonce</span>
                            </td>
                            <td class="ng-binding">
                                377
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a class="account-help-icon"
                                   href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html" target="_blank"
                                   rel="noopener noreferrer">
                                    <!--<img src="images/icon-help.svg" class="help-icon">-->
                                    <p class="account-help-text ng-scope" translate="GAS_LIMIT_Desc">Gas limit is the
                                        amount of gas to send with your TX. <code>TX fee</code> = gas price * gas limit
                                        &amp; is paid to miners for including your TX in a block. Increasing this number
                                        will not get your TX mined faster. Sending ETH = <code>21000</code>. Sending
                                        Tokens = ~<code>200000</code>.</p>
                                </a>
                                <span translate="OFFLINE_Step2_Label_4" class="ng-scope">Gas Limit</span>
                            </td>
                            <td class="ng-binding">
                                90000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a class="account-help-icon"
                                   href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html" target="_blank"
                                   rel="noopener noreferrer">
                                    <!--<img src="images/icon-help.svg" class="help-icon">-->
                                    <p class="account-help-text ng-scope" translate="GAS_PRICE_Desc">Gas Price is the
                                        amount you pay per unit of gas. <code>TX fee = gas price * gas limit</code>
                                        &amp; is paid to miners for including your TX in a block. Higher the gas price =
                                        faster transaction, but more expensive. Default is <code>41 GWEI</code>.</p>
                                </a>
                                <span translate="OFFLINE_Step2_Label_3" class="ng-scope">Gas Price</span>
                            </td>
                            <td class="ng-binding">
                                1 GWEI
                                <small class="ng-binding">
                                    (1000000000 WEI)
                                </small>
                            </td>
                        </tr>
                        <!--
                          <tr>
                            <td>
                              <a class="account-help-icon"
                                 href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html"
                                 target="_blank"
                                 rel="noopener noreferrer">
                                   <img src="images/icon-help.svg" class="help-icon" />
                                   <p class="account-help-text" translate="TXFEE_Desc"></p>
                              </a>
                              <span translate="x_TXFee">
                                TX Fee
                              </span>
                            </td>
                            <td>
                              ({{ txFee.eth }} ETH)
                              <small>({{ txFee.usd }} USD)</small>
                            </td>
                          </tr>
                        -->
                        <tr>
                            <td translate="OFFLINE_Step2_Label_6" class="ng-scope">Data</td>
                            <td class="ng-binding">
                                0x42966c680000000000000000000000000000000000000000000000000000000000000001
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

    </div>
</template>
<script>

    var transactionStatus = require('./../services/sendToken');
    export default {
        data: function () {
            return {

                txStatus: '',
                submitted: false,
                step: 1,
            }
        },
        methods: {
            checkTransactionStatus(e) {
                console.log("Button Clicked");
                var _this = this;
                e.preventDefault();
                _this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        var txResposne;
                        console.log("stsstuu siis" + _this.txStatus);
                        var resposne = transactionStatus.transactionStatus(_this.txStatus).then((res) => {
                            txResposne = res;

                            console.log("REsposnen inside check statyus call" + txResposne);
                        });
                        _this.step =2;
                    }

                });
            }
            },
            mounted() {


            }
        }


</script>

<style>
    .block {
        margin: 1.5rem 2rem !important;
        background-color: #262c3b;
        -webkit-box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, .07);
        box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, .07);
        padding: 1.5rem 2rem;
        min-height: 1.5rem;
        margin: 1rem auto;
        position: relative;
    }

    p {
        color: rgba(255, 255, 255, 0.8) !important;
    }

    ul {
        color: rgba(255, 255, 255, 0.8);
        list-style: none;
    }
</style>
