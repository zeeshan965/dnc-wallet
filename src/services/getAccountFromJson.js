var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/t2utzUdkSyp5DgSxasQX"));

var account;

export async function getprivateKeyFromJson(jsonData,password) {
    console.log("Fucnaaiton json data " + (jsonData));
    account = await web3.eth.accounts.decrypt(
        jsonData
        , password);

    console.log("Accoutn" + JSON.stringify(account.privateKey));
    return account;
}


console.log(account);