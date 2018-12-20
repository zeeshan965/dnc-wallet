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
                <div class="row">
                    <div class="col-md-12 col-md-offset-2">
                        <ul class="nav nav-pills">
                            <li class="active"><a data-toggle="pill" href="#home">Keystore / Jason File</a></li>
                            <li><a data-toggle="pill" href="#menu1">Private key</a></li>
                            <li><a data-toggle="pill" href="#menu2">Menu 2</a></li>
                        </ul>

                        <div class="tab-content">
                            <div id="home" class="tab-pane fade in active">
                                <section class="col-md-8 col-sm-6">
                                    <div >
                                    <h4 translate="ADD_Radio_2_alt">Select Your Wallet File</h4>
                                    <h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#d9534f" d="M256 0C114.844 0 0 114.844 0 256s114.844 256 256 256 256-114.844 256-256S397.156 0 256 0zm102.625 313.375c12.5 12.492 12.5 32.758 0 45.25C352.383 364.875 344.188 368 336 368s-16.383-3.125-22.625-9.375L256 301.25l-57.375 57.375C192.383 364.875 184.188 368 176 368s-16.383-3.125-22.625-9.375c-12.5-12.492-12.5-32.758 0-45.25L210.75 256l-57.375-57.375c-12.5-12.492-12.5-32.758 0-45.25 12.484-12.5 32.766-12.5 45.25 0L256 210.75l57.375-57.375c12.484-12.5 32.766-12.5 45.25 0 12.5 12.492 12.5 32.758 0 45.25L301.25 256l57.375 57.375z"></path></svg>
                                        This is <u>not</u> a recommended way to access your wallet.
                                    </h5>
                                    <div class="form-group" style="color: #ffffff;">
                                        Entering your private key on a website dangerous. If our website is compromised or you accidentally visit a different website, your funds will be stolen. Please consider:
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
                                    <div class="form-group">
                                        If you must, please <u>double-check the URL &amp; SSL cert</u>. It should say <code>https://www.myetherwallet.com</code> &amp; <code>MYETHERWALLET INC</code> in your URL bar.
                                    </div>
                                    <br>
                                    <!-- ngIf: requireFPass -->
                                    <div class="form-group">
                                        <a tabindex="0" role="button" class="btn btn-primary  ng-hide" ng-click="decryptWallet()" translate="ADD_Label_6_short">SELECT WALLET FILE...</a>
                                    </div>
                                </div>

                                </section>
                            </div>
                            <div id="menu1" class="tab-pane fade">
                                <div id="selectedTypeKey"  class="col-md-8">
                                    <h4 translate="ADD_Radio_3" class="">Paste Your Private Key</h4>
                                    <h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#d9534f" d="M256 0C114.844 0 0 114.844 0 256s114.844 256 256 256 256-114.844 256-256S397.156 0 256 0zm102.625 313.375c12.5 12.492 12.5 32.758 0 45.25C352.383 364.875 344.188 368 336 368s-16.383-3.125-22.625-9.375L256 301.25l-57.375 57.375C192.383 364.875 184.188 368 176 368s-16.383-3.125-22.625-9.375c-12.5-12.492-12.5-32.758 0-45.25L210.75 256l-57.375-57.375c-12.5-12.492-12.5-32.758 0-45.25 12.484-12.5 32.766-12.5 45.25 0L256 210.75l57.375-57.375c12.484-12.5 32.766-12.5 45.25 0 12.5 12.492 12.5 32.758 0 45.25L301.25 256l57.375 57.375z"></path></svg>
                                        This is <u>not</u> a recommended way to access your wallet.
                                    </h5>
                                    <div class="form-group">
                                        Entering your private key on a website is dangerous. If our website is compromised or you accidentally visit a different website, your funds will be stolen. Please consider:
                                    </div>
                                    <ul>
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
                                            <a href="https://kb.myetherwallet.com/getting-started/protecting-yourself-and-your-funds.html" target="_blank" rel="noopener noreferrer">
                                                Learning How to Protect Yourself and Your Funds
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="form-group">
                                        If you must, please <u>double-check the URL &amp; SSL cert</u>. It should say <code>https://www.myetherwallet.com</code> &amp; <code>MYETHERWALLET INC</code> in your URL bar.
                                    </div>
                                    <br>
                                    <div class="form-group">
        <textarea id="aria6" class="form-control ng-pristine ng-untouched ng-valid ng-empty is-invalid" ng-change="onPrivKeyChange()" ng-class="Validator.isValidPrivKey($parent.$parent.manualprivkey.length) ? 'is-valid' : 'is-invalid'" ng-keyup="$event.keyCode == 13 &amp;&amp; decryptWallet()" ng-model="$parent.$parent.manualprivkey" placeholder="Private Key
" rows="4"></textarea>
                                    </div>
                                    <!-- ngIf: requirePPass -->

                                </div>
                            </div>
                            <div id="menu2" class="tab-pane fade">
                                <h3>Menu 2</h3>
                                <p>Some content in menu 2.</p>
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
