var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa'));
var Wallet = require('ethereumjs-wallet');

var Web3EthAccounts = require('web3-eth-accounts');
var Wallet = require('ethereumjs-wallet');
var ethereumJsWallet = require("ethereumjs-wallet");

export var addresses = [];
export var keyStoreAddresses = [];

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

export function getBalance() {
    
    web3.eth.getBalance("0x88951e18fEd6D792d619B4A472d5C0D2E5B9b5F0")
.then(function(balance){
    var value = web3.utils.fromWei(balance, 'ether');
    console.log('Balnce is zzzzz ' + value);
});

}

export function unlockAccount(privateKey, password) {

    console.log('User private Key' + privateKey);
    var userPrivateKey = privateKey;
    console.log('User Password ' + password);
    // userPrivateKey = userPrivateKey.substring(2);

    var key = Buffer.from(userPrivateKey, 'hex');
    var wallet = Wallet.fromPrivateKey(key);
    var unlocked = wallet.toV3String(password);

    ///phle humrey pass strign arae thi unki parse kr ky json object bnya hai then us mai sy address utha liya hai
    // jo addressa rha wo thek hai mai ny verify kr liya hai agy challty hen hum ab
    var unlooked_json = JSON.parse(unlocked);

    console.log('Wallet ' + JSON.stringify(wallet));

    // return unlocked;
    return unlooked_json;
}
