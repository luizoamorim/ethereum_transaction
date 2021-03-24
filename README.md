# Ethereum transaction

On the Ethereum network we have two types of transactions:

- Message calls
- Contract creation

## Transaction fields

Let's go over transaction's fields in a little detail. 

### Nonce

Is a transaction count from the sender's account. Every transaction that occurs needs to have a unique incrementing nonce. The first transaction you send from your account will have a nonce of zero.

### Gas price

Is the price the sender is willing to pay per unit of a gas.
Is a similar concept like miner fees in the Bitcoin. Ethereum uses gas to determine the reward miners received for executing contracts. The price set here is the incentive miners have to mine new transactions.

### Gas limit

Specifies the maximum number of gas that the contract can spend. This is useful for a few reasons that we'll go over it in a later section.

### To

Specifies the recipient's address.

### Values

The amount of Ether you want send is shown in the value field.

### Data, Init

Information used to record creation and execution of smart contrats.

# Creating transactions




