var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/Lc2vdbhIswp6iQDRcmSa'));

var account;

export async function getprivateKeyFromJson(jsonData) {
    console.log("Fucnaaiton json data " + (jsonData));
    account = await web3.eth.accounts.decrypt(
        jsonData
        , 'password');

    console.log("Accoutn" + JSON.stringify(account.privateKey));
    return account;
}


console.log(account);