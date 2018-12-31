<template>
    <div>
        <section  class="block txstatus__1">
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

        <div v-if="txError === false">
            <section class="block txstatus__2">

                <div class="cont-md" >
                    <h3 class="text-success ng-scope" translate="tx_FoundOnChain">Transaction Found</h3>
                    <h5><a href="https://etherscan.io/tx/" target="_blank" rel="noopener noreferrer"
                           class="ng-binding"> </a></h5>
                    <p><strong translate="tx_FoundOnChain_1" class="ng-scope">Your transaction was successfully mined
                        and is on the blockchain.</strong></p>

                </div>
                <div>
                    <h4 translate="tx_Details" class="cont-md ng-scope">Transaction Details</h4>
                    <br>
                    <table class="table table-striped txstatus__2 cont-md">
                        <!-- ng-show="tx.status=='foundOnChain' || foundInPending'"-->
                        <tbody>
                        <tr>
                            <td>TX Hash</td>
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
                                <a target="_blank" rel="noopener noreferrer" class="ng-binding">
                                    0x41e98269C80a7133De019261f6F4d96d77cc6821
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td translate="OFFLINE_Step2_Label_1" class="ng-scope">To Address</td>
                            <td>
                                <a target="_blank" rel="noopener noreferrer" class="ng-binding">
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

                        </tbody>
                    </table>
                </div>
            </section>
        </div>
        <div v-if="txError === true">
            <section class="block txstatus__2 sh">

                <div class="cont-md" >
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
                txError: '',
                txResposne: '',
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

                        console.log("stsstuu siis" + _this.txStatus);
                        var resposne = transactionStatus.transactionStatus(_this.txStatus).then((res) => {

                            console.log("tx Status ffffffffffffffffffffffffffffffffffffffffffff =>" + res);
                            if(res){
                                this.txResposne = res;
                                this.txError = false;
                            }

                        }).catch((error) => {

                           this.txError = true;
                           console.log('I am inside error  section ');
                        });

                    }

                });
            }
        },
        mounted() {


        }
    }


</script>

<style scoped>
    .block {
        margin: 1.5rem 2rem !important;
        background-color: #262c3b;
        -webkit-box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, .07);
        box-shadow: 16px 16px 47px 2px rgba(0, 0, 0, .07);
        padding: 1.5rem 2rem;
        min-height: 1.5rem;
        margin: 1rem auto;
        position: relative !important;
        z-index: 99;
    }

    p {
        color: rgba(255, 255, 255, 0.8) !important;
    }

    ul {
        color: rgba(255, 255, 255, 0.8);
        list-style: none;
    }

    .footer {
        background-color: #2c3345;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        bottom: 0px;
        color: #98a6ad;
        text-align: left !important;
        padding: 20px 30px;
        position: relative;
        right: 0;
        left: 240px;
    }
</style>
