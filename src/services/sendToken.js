const Web3 = require("web3");
// const web3 = new Web3();

const Tx = require('ethereumjs-tx');

const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Lc2vdbhIswp6iQDRcmSa'));
// web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/t2utzUdkSyp5DgSxasQX"));
import router from './../router'

var abi = [{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "spender", "type": "address"}, {"name": "value", "type": "uint256"}],
    "name": "approve",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
        "name": "value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint8"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "cap",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "spender", "type": "address"}, {"name": "addedValue", "type": "uint256"}],
    "name": "increaseAllowance",
    "outputs": [{"name": "success", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "to", "type": "address"}, {"name": "value", "type": "uint256"}],
    "name": "mint",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "value", "type": "uint256"}],
    "name": "burn",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "account", "type": "address"}],
    "name": "isPauser",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "paused",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "renouncePauser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "from", "type": "address"}, {"name": "value", "type": "uint256"}],
    "name": "burnFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "account", "type": "address"}],
    "name": "addPauser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "account", "type": "address"}],
    "name": "addMinter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "renounceMinter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "spender", "type": "address"}, {"name": "subtractedValue", "type": "uint256"}],
    "name": "decreaseAllowance",
    "outputs": [{"name": "success", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "to", "type": "address"}, {"name": "value", "type": "uint256"}],
    "name": "transfer",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "account", "type": "address"}],
    "name": "isMinter",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "owner", "type": "address"}, {"name": "spender", "type": "address"}],
    "name": "allowance",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"name": "_name", "type": "string"}, {"name": "_symbol", "type": "string"}, {
        "name": "_decimals",
        "type": "uint8"
    }, {"name": "_cap", "type": "uint256"}], "payable": false, "stateMutability": "nonpayable", "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "account", "type": "address"}],
    "name": "Paused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "account", "type": "address"}],
    "name": "Unpaused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "account", "type": "address"}],
    "name": "PauserAdded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "account", "type": "address"}],
    "name": "PauserRemoved",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "account", "type": "address"}],
    "name": "MinterAdded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "account", "type": "address"}],
    "name": "MinterRemoved",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {"indexed": false, "name": "value", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {
        "indexed": true,
        "name": "spender",
        "type": "address"
    }, {"indexed": false, "name": "value", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}];


var contractAddress = "0x3a84b2d899253a0D01aC89B948DB376c9af06064";
var contract = new web3.eth.Contract(abi, contractAddress);

var fromAddress = "0x41e98269C80a7133De019261f6F4d96d77cc6821";

// export var privateKey = "2bb290ea4c091b6998643a60b6d0e06afeaa2fe57f5fa4e02c1dc48bc7acd0db";
// export var toAddress = "0x88951e18fEd6D792d619B4A472d5C0D2E5B9b5F0";
// export var tokenValue = 1;

// tokenValue = web3.toWei(tokenValue, 'ether');

export function hi() {
    alert('Hi to everyOne');
}

var data;
var gasPrice;
var gasLimit;
var privateKey;


export function getAddressAndTokenValues(toAddress, tokenValue) {
    console.log("DNC Get Address" + toAddress);
    console.log("DNC Get Balance" + tokenValue);

    web3.eth.defaultAccount = fromAddress;
    data = contract.methods.transfer(toAddress, tokenValue).encodeABI();
    console.log("DAta inside fucntion is" + data);

    return data;
}

export function getPrivateKey(priKey) {
    console.log("Private KEy inside function is " + priKey);

    privateKey = priKey;

    this.getTransactionCount();
    return privateKey;
}

console.log("Private keyy outise fucntion is " + privateKey);
console.log("DAta" + data);
//web3.eth.defaultAccount = fromAddress;
gasPrice = web3.eth.getGasPrice();
gasLimit = 200000;


export function sendSigned(rawTransaction) {
    console.log("Send fucntion private key: " + privateKey);

    var privKey = new Buffer(privateKey, 'hex');
    // console.log(privKey);
    const tx = new Tx(rawTransaction);
    // console.log("Trasnaction objecct "+tx);

    tx.sign(privKey);
    var serializedTx = tx.serialize().toString('hex');
    // console.log("Serialized " + serializedTx);
    web3.eth.sendSignedTransaction('0x' + serializedTx).on('transactionHash', console.log);

}


export function getTransactionCount() {

    web3.eth.getTransactionCount(web3.eth.defaultAccount).then(count => {
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

    }).catch((error) => {
        console.log(error);
    });


}

//0x15e1e7ea0057d89cffbe326c6b36744cbe8db332888d728b28c059502da834c9'


export async function transactionStatus(txStatus) {

    var data;

    await web3.eth.getTransactionReceipt(txStatus).then((res) => {
        console.log("Trasancction staatus respsoe is zzzzzzzzzzzzzzzzzzzzzzzz" + JSON.stringify(res));
        data = res;
    });


    return JSON.stringify(data);


}

 

