var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/t2utzUdkSyp5DgSxasQX"));




export  function getImportAccountDetail(accountAddress){
    var import_account = web3.eth.accounts.privateKeyToAccount(accountAddress);

    return import_account;

}
