var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa'));
var Wallet = require('ethereumjs-wallet');
var Web3EthAccounts = require('web3-eth-accounts');


// var Wallet = require('ethereumjs-wallet');
// var ethereumJsWallet = require("ethereumjs-wallet");

export var addresses = [];
//Eth Address Balance
export var addressesBlancess = [];
//DNC Address Baalance
export var dncAddressesBlancess = [];

export function helloWorld() {
    alert('Hello World');
}


export function initializeWalletProvider() {
    return new Web3(
        new Web3.providers.HttpProvider(
            "https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa"
        ));
}

export function initializeWeb3EthAccount() {

    return new Web3EthAccounts(
        "https://rinkeby.infura.io/v3/4e962d53cc894df2a63436f519d1e9d0"
    );
}

export async function getBalance(address) {

    var data;
    var addressBalance = await web3.eth.getBalance(address).then((res) => {
        data = res;
    });
    console.log('Address Balance is ' + data);
    var newBalance = web3.utils.fromWei(data, 'ether');
    console.log('new Balance is ' + data);
    return newBalance;

}

export function unlockAccount(privateKey, password) {

    console.log('User private Key' + privateKey);
    var userPrivateKey = privateKey;
    console.log('User Password ' + password);

    console.log("Size of Private Key" + userPrivateKey.length);


    if (userPrivateKey.length < 64 || userPrivateKey.length > 64) {
        return false;
    }


    var key = Buffer.from(userPrivateKey, 'hex');


    var wallet = Wallet.fromPrivateKey(key);
    var unlocked = wallet.toV3String(password);

    // var parivateKeyCheck = Wallet.fromPrivateKey(userPrivateKey);

    console.log('Private Key checkzzzzzzzzzzz ' + JSON.stringify(wallet));


    var unlooked_json = JSON.parse(unlocked);

    console.log('Wallet ' + JSON.stringify(wallet));

    // return unlocked;
    return unlooked_json;
}
