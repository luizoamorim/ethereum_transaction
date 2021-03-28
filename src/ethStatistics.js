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
 * Uncle blocks are created in Ethereum blockchains when two blocks 
 * are mined and submitted to the ledger at roughly the same time. 
 * Only one can enter the ledger as a block, and the other does not.
 * Miners are rewarded for uncle blocks in the Ethereum system, whereas
 * orphan blocks in Bitcoin were not rewarded.
 */

// Returns the number of transaction in a given block.
web3.eth.getBlockTransactionCount(6)
.then(console.log);