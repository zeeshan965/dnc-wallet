const Web3 = require("web3");
const web3 = new Web3();
const Tx = require('ethereumjs-tx');
web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/t2utzUdkSyp5DgSxasQX"));

var fromAddress = "0x88951e18fEd6D792d619B4A472d5C0D2E5B9b5F0";
// var privateKey = "2bb290ea4c091b6998643a60b6d0e06afeaa2fe57f5fa4e02c1dc48bc7acd0db";
// var toAddress = "0x2ddA83aD0E10B2eF5A3E21aa267dd3418A3548a2";
// var Value = "1";

var gasPrice;
var gasLimit;
var privateKey;
var toAddress;
var Value;
export var txHash;
web3.eth.defaultAccount = fromAddress;


export function getTokenValue(tokenValue) {
    Value = tokenValue;
    Value = web3.utils.toWei(Value, 'ether');
    Value = parseInt(Value);
    console.log(Value);
    return Value;
}

export function gettoAddress(address) {

    console.log("DNC Get Address" + address);
    toAddress = address;
    console.log(toAddress);
    return toAddress;
}

// export function getPrivateKey(priKey) {
//
//     console.log("Private KEy inside function is " + priKey);
//     privateKey = priKey;
//     this.getTransactionCount();
//     return privateKey;
// }

gasPrice = web3.eth.getGasPrice().then(console.log);
gasLimit = 200000;


// export async function sendSigned(rawTransaction) {
//     var privKey = new Buffer(privateKey, 'hex');
//     const tx = new Tx(rawTransaction);
//
//     tx.sign(privKey);
//     var serializedTx = tx.serialize().toString('hex');
//     await web3.eth.sendSignedTransaction('0x' + serializedTx).on('transactionHash', function (transactionHash) {
//         txHash = transactionHash;
//         console.log("TxHash " + txHash);
//     });
// }
//
// export function getTransactionCount() {
//     web3.eth.getTransactionCount(web3.eth.defaultAccount).then(count => {
//         var rawTransaction = {
//             nonce: web3.utils.toHex(count),
//             gasPrice: web3.utils.toHex(2000000000),
//             gasLimit: web3.utils.toHex(gasLimit),
//             to: toAddress,
//             value: Value,
//             from: fromAddress,
//             _chainId: 0x03
//         };
//         sendSigned(rawTransaction);
//
//     }).catch((error) => {
//         console.log(error);
//     });
// }



export async function getTransactionCount(privateKey) {

    web3.eth.getTransactionCount(web3.eth.defaultAccount).then(count => {
        var rawTransaction = {
            nonce: web3.utils.toHex(count),
            gasPrice: web3.utils.toHex(2000000000),
            gasLimit: web3.utils.toHex(gasLimit),
            to: toAddress,
            value: Value,
            from: fromAddress,
            _chainId: 0x03
        };

        console.log("Send fucntion private key: " + privateKey);

        var privKey = new Buffer(privateKey, 'hex');
        // console.log(privKey);
        const tx = new Tx(rawTransaction);
        // console.log("Trasnaction objecct "+tx);

        tx.sign(privKey);
        var serializedTx = tx.serialize().toString('hex');
        // console.log("Serialized " + serializedTx);


        var res = web3.eth.sendSignedTransaction('0x' + serializedTx).on('transactionHash', function (transactionHash) {
            console.log("Transacction hash ::" + transactionHash);
            txHash = transactionHash;
            console.log("Txx Hashhh" + txHash);

        });
        setTimeout(function () {
            console.log("tx outside is " + txHash);
            return txHash;
        }, 2000);





        // console.log(rawTransaction);
        // sendSigned(rawTransaction);
        // sendSigned(rawTransaction).then(console.log);

    }).catch((error) => {
        console.log(error);
    });


}
export async function trxHash() {
    console.log("tx sssdsdsdsdsdsdsd" + txHash);
    return txHash;

}
    
