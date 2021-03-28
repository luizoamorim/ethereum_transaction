var Web3 = require('web3');
var web3 = new Web3('HTTP://127.0.0.1:7545')

/**
 * Returns the current gas price oracle. The gas price is determined by the 
 * last few blocks median gas price.
 */ 
web3.eth.getGasPrice()
.then(console.log);

// Returns a blocks uncle by a given uncle index position.
web3.eth.getUncle(5, 4)
.then(console.log);

/**
 * What is a uncle block?
 * Orphaned blocks and unlike other blockchains, in 
 * Ethereum they are included and rewarded. The dashboard 
 * displays current block uncle count and that from last 50 blocks.
 */

// Returns the number of transaction in a given block.
web3.eth.getBlockTransactionCount(6)
.then(console.log);