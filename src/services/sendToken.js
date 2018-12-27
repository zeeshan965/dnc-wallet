const Web3 = require("web3");
const web3 = new Web3();
const Tx = require('ethereumjs-tx');
web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/t2utzUdkSyp5DgSxasQX"));
const abi = require('./abi');


var contractAddress = "0x3a84b2d899253a0D01aC89B948DB376c9af06064"; 
var contract =  new web3.eth.Contract(abi, contractAddress);

var fromAddress = "0x41e98269C80a7133De019261f6F4d96d77cc6821";
var privateKey = "c5e727fb526b73466e4c5c94d8c92fac960a35e9355b3235a5c209d4a2083613";
var toAddress = "0x88951e18fEd6D792d619B4A472d5C0D2E5B9b5F0";
var tokenValue = 1;

// tokenValue = web3.toWei(tokenValue, 'ether');

web3.eth.defaultAccount = fromAddress;
var data = contract.methods.transfer(toAddress, tokenValue).encodeABI();
var gasPrice = web3.eth.getGasPrice();
var gasLimit = 200000;

function sendSigned(rawTransaction) {
    // console.log(rawTransaction);
    var privKey = new Buffer(privateKey, 'hex');
    // console.log(privKey);
    const tx = new Tx(rawTransaction);
    // console.log(tx);

    tx.sign(privKey);
    var serializedTx = tx.serialize().toString('hex');  
    web3.eth.sendSignedTransaction('0x' + serializedTx).on('receipt', console.log)
  }

web3.eth.getTransactionCount(web3.eth.defaultAccount).then( count => {
    var rawTransaction = {
        nonce: web3.utils.toHex(count),
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(gasLimit),
        to: contractAddress,
        data: data,
        from: fromAddress,
        _chainId: 0x03
    };
    // console.log(rawTransaction);
    sendSigned(rawTransaction);
    // sendSigned(rawTransaction).then(console.log);

}).catch((error)=>{
    console.log(error);
});
