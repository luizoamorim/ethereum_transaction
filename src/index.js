/**#######################
##    Configuration    ##
#######################*/

// Step 1: Set up the appropriate configuration
var Web3 = require('web3');
var EthereumTx = require('ethereumjs-tx').Transaction;
var web3 = new Web3('HTTP://127.0.0.1:7545')

// Step 2: Set the sending and receiving address for the transaction
var sendingAddress = '0x2e2772717A7B944326085C08E5C2d1D02Af37257';
var receivingAddress = '0x5969D71011f61E93deA5EB919abfE854A4AC0920';

// Step 3: Check the balance of each address
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

// Step 4: Set up the transaction using the transaction variables as shown
var rawTransaction = {
    nonce: web3.utils.toHex(5),
    to: receivingAddress,
    gasPrice: web3.utils.toHex(50000000000000),
    gasLimit: web3.utils.toHex(30000),
    value: web3.utils.toHex(2000000),
    data: web3.utils.toHex("")
}

/**#############################
##    Sign the transaction    ##
###############################*/

// Step 5: Sign the transaction with the Hex value
// of the private key of the sending Address
var privateKeySender = '941474c0fdd059f6b618daa03d4ac165e77ec1e890c663cdc8b8c70a30e16c0c';
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex');
var transaction = new EthereumTx(rawTransaction);
transaction.sign(privateKeySenderHex);

/**###########################################
##    Send the transaction to the network   ##
############################################*/

// Step 6: Send the serialized signed transaction to the
// Ethereum network.
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);