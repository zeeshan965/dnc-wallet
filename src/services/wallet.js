
var Web3 = require('web3');
var Web3EthAccounts = require('web3-eth-accounts');
var Wallet = require('ethereumjs-wallet');
var ethereumJsWallet = require("ethereumjs-wallet");


export  function  initializeWalletProvider(){
    return new Web3(
        new Web3.providers.HttpProvider(
            "https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa"
        ));
}

export   function initializeWeb3EthAccount(){

    return new Web3EthAccounts(
        "https://rinkeby.infura.io/v3/4e962d53cc894df2a63436f519d1e9d0"
    );
}

export function getBalance(){
    var web3 = this.initializeWalletProvider();
    var balance = web3.eth.getBalance(
        "0x88951e18fEd6D792d619B4A472d5C0D2E5B9b5F0"
      );
      console.log(balance.c[0]);
      var balInit = balance.c[0];
      var balLast = "" + balance.c[1];
      balInit = balInit + balLast;
      console.log(balInit);

      var value = web3.fromWei(balInit, "ether");
      console.log(value);
}