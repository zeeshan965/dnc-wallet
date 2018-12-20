
<style>
.spinner {
  position: relative; /* [1] */
  display: inline-block;
  width: 1em; /* [2] */
  height: 1em; /* [2] */
  font-size: 32px; /* [3] */
  border-bottom: 1px solid; /* [4] */
  vertical-align: middle;
  overflow: hidden; /* [5] */
  text-indent: 100%; /* [5] */
  -webkit-animation: 0.5s spinner linear infinite;
  -moz-animation: 0.5s spinner linear infinite;
  animation: 0.5s spinner linear infinite;

  /**
		 * 1. Make the spinner a circle.
		 */
  &,
  &:after {
    border-radius: 100%; /* [1] */
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid; /* [1] */
    opacity: 0.5; /* [2] */
  }
}

/**
	 * Size variants (built by adjusting `font-size`).
	 */
.spinner--small {
  font-size: 16px;
}

@-webkit-keyframes spinner {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes spinner {
  to {
    -moz-transform: rotate(360deg);
  }
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

/**
	 * Demo elements.
	 */

.btn {
  font: inherit;
  cursor: pointer;

  border: none;
  padding: 1em 2em;
  border-radius: 3px;
  .spinner {
    margin-right: 3px;
  }
}
</style>

<template>
    <div>
        <div id="new_wallet" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title" id="myModalLabel">Create a New Account</h4>
                    </div>
                    <div class="modal-body">
                        <h4>We need a few more details before we create new account address for your digital assets</h4>
                        <div class="alert alert-danger">
                            <p>
                                <strong>
                                    Please take great care when creating your password it is the key to the security of
                                    your digital assets
                                </strong>
                            </p>
                            <p>
                                <span class="translation_missing" title="translation missing: en.views.accounts.newaccount.recommend">Recommend</span>
                                <a href="" target="_blank">Common
                                    Password Mistakes</a>
                            </p>
                            <p>
                                If you lose or forget your password your coins are unrecoverable. Write your password
                                down and keep it safe.
                            </p>
                            <p>
                                <strong>
                                    You must test sending and receiving a small amount of digital asset to this account
                                    before you use it to hold larger amounts.

                                </strong>
                            </p>
                            <p>
                                <strong>
                                    dinardirham.com is not responsible for any losses, please take care.
                                </strong>
                            </p>
                        </div>
                        <hr>
                        <form method="post">
                            <fieldset>
                                <div class="nav nav-pills">
                                <div class="form-group"><label>Wallet</label>
                                    <div class="checkbox checkbox-info checkbox-circle"><input id="myCheck" @click="step = 1;disableCheckbox()" type="checkbox"><label for="myCheck">
                                    <a data-toggle="pill" href="#home">DinarCoin</a>
                            </label>
                            </div>
                                <!-- <div class="checkbox checkbox-info checkbox-circle"><input @click="ethstep = 1" id="cb_post1" type="checkbox"><label for="cb_post1">
                                EtherCoin
                            </label>
                            </div> -->
                            </div>
                            </div>
                                <!--<div v-if="step == 1">-->
                                <!--<div class="form-group" >-->
                                    <!--<div class="form-group"><label>key Name</label><input type="text" value="" class="form-control "></div>-->
                                <!--</div>-->
                                <!--<button @click="step = 2" class="btn btn-primary waves-effect waves-light"-->
                                        <!--type="button">Create Wallet</button>-->
                                <!--</div>-->
                            </fieldset>
                            <fieldset id = "hiddenDiv" v-if=" step == 1 || step == 2 || step == 3 || step == 4" @click.prevent=''>
                                <div class="form-group" v-if="step == 2">
                                    <h3>Save your Keystore File.</h3>
                                    <!-- <div class="form-group"><p class="help-block">You now need to supply a secure password for this account.</p></div> -->
                                    <button class="btn btn-lg btn-primary" @click="step = 3;saveFile()">Save keystore/json</button>
                                    <p class="text-white">
                                        **Do not lose it!** It cannot be recovered if you lose it.

                                        **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.

                                        **Make a backup!** Secure it like the millions of dollars it may one day be worth.
                                    </p>
                                </div>
                                <div class="form-group" v-if="step == 3">
                                    <button class="btn btn-lg btn-primary" data-dismiss="modal" @click="step = 4;removeClick()" >I Understand Continue</button>
                                </div>

                                <div class="form-group" v-if="step == 4">
                                    <!--<button class="btn btn-lg btn-primary">Print Paper Wallet</button>-->

                                </div>
                                <div v-if="step == 1">
                                    <div class="form-group" >
                                        <div class="form-group"><label></label>
                                        <!-- <input type="text" value=""  v-model="walletName" class="form-control "> -->
                                        </div>
                                    </div>

                                      <!-- fake button for 'loading' -->


                                    <div class="tab-content">
                                        <div id="home" class="tab-pane fade in active">
                                            <button id="myBtn"  @click="disabledWalletBtn();createNewWallet()" class=" btn btn-primary waves-effect waves-light"
                                                    type="button" >
                                                <!--<span class="spinner  spinner&#45;&#45;small" >Loading…</span>-->
                                                {{ createWallet }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>


                    <div id="spinnerr" style="display: none">
    <vue-simple-spinner ></vue-simple-spinner>
</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                        <!-- <button type="button" class="btn btn-primary waves-effect waves-light" @click="step = 2">Save changes</button> -->
                    </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>

</template>
<script>
import axios from "axios";
// Import web3 Library
import Web3 from "web3";
// Import Web3-eth-accounts
import Web3EthAccounts from "web3-eth-accounts";
// Import ethereumjs-wallet
//import ethereumJsWallet  from 'ethereumjs-wallet';
var ethereumJsWallet = require("ethereumjs-wallet");
// Initialize the Web3 provider
//var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa'));

//var WalletService = require('./wallet');
  var WalletService = require('./../../services/wallet');




export default {
  data: function() {
    return {
      step: 0,
      ethstep: 0,
        loaderr: false,
      myDate: new Date().toISOString().slice(0, 10),
      web3: "",
      account:"",
      newAccountAddress: "",
      newAccount: "",
      acconntPrivateKey: "",
      key: "",
      walletFromPrivateKey: "",
      fileData: "",

      createWallet: "Create Wallet"
    };
  },

  methods: {
    disabledWalletBtn: function() {

        var _this = this;
        _this.createWallet = "Creating Wallet";
      document.getElementById("myBtn").disabled = true;
      
    },
    saveFile: function() {
      //Random String
      var chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      var string_length = 15;
      var randomstring = "";
      for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
      }
      const data = this.fileData;
      const blob = new Blob([data], { type: "text/plain" });
      const e = document.createEvent("MouseEvents"),
        a = document.createElement("a");
      a.download = `UTC-${this.myDate}-.${randomstring}`;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["utc/json", a.download, a.href].join(":");
      e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
    },
    createNewWallet: function() {
        $('#spinnerr').show();
        var _this = this;
        setTimeout(function(){
            // _this.web3 = new Web3(
            //     new Web3.providers.HttpProvider(
            //         "https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa"
            //     )
            // );
            
            
            _this.web3 = WalletService.initializeWalletProvider();
              
                           
            var account = WalletService.initializeWeb3EthAccount();
            
            _this.newAccountAddress = account.create();
            console.log("Account Public Address", _this.newAccountAddress.address);
            console.log("Account Private Key", _this.newAccountAddress.privateKey);
            _this.newAccount = _this.newAccountAddress.address;

            _this.generateKeyStoreFile();
            WalletService.getBalance();
            console.log("process completed");
            _this.step = 2; // this one should be here because we want the stoep 2 to arrive after completing the process, or else it will arrive just after clicking button
            $('#spinnerr').hide();
            _this.createWallet = "Create Wallet";
        }, 500);

    },

    generateKeyStoreFile: function() {
        var _this = this;
      //    console.log('Account Balance' + web3.eth.getBalance(this.newAccount));
      _this.acconntPrivateKey = "" + _this.newAccountAddress.privateKey;
      _this.acconntPrivateKey = _this.acconntPrivateKey.substring(2);
      console.log("Account Private Key with substring", this.acconntPrivateKey);
      //  this.key = Buffer.from(this.private,'hex');
      _this.key = new Buffer(_this.acconntPrivateKey, "hex");
      _this.walletFromPrivateKey = ethereumJsWallet.fromPrivateKey(this.key);
      _this.fileData = _this.walletFromPrivateKey.toV3String("password");
      console.log(
        "File Data is : ",
        _this.fileData
      );

    },
    clearDinarCheckBox : function(){
        document.getElementById("myCheck").checked = false;
    },
       disableCheckbox : function() {
    document.getElementById("myCheck").disabled = true;

},

      removeClick : function() {
          var _this = this;
          document.getElementById("myCheck").disabled = false;
          _this.clearDinarCheckBox();
    }
  },

  mounted: function() {
    // $("#cb_post").on("click", function() {
    //   $("#hiddenDiv").toggle();
    // });

    $("#cb_post1").on("click", function() {
      $("#hiddenDiv1").toggle();
    });
    $(function() {
      $("input:checkbox").on("click", function() {
        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);
        if ($box.is(":checked")) {
          // the name of the box is retrieved using the .attr() method
          // as it is assumed and expected to be immutable
          var group = "input:checkbox[name='" + $box.attr("name") + "']";
          // the checked state of the group/box on the other hand will change
          // and the current value is retrieved using .prop() method
          $(group).prop("checked", false);
          $box.prop("checked", true);
        } else {
          $box.prop("checked", false);
        }
      });
    });
  }
};
</script>
