![Beginners-Guide-to-Ethereum](https://user-images.githubusercontent.com/73957838/112249544-bce24480-8c36-11eb-9fb9-592d6f573a56.jpg)

# Ethereum transaction

On the Ethereum network we have two types of transactions:

- Message calls
- Contract creation

## Transaction fields

![Selection_121](https://user-images.githubusercontent.com/73957838/112249395-77257c00-8c36-11eb-8a73-73feec80216d.png)

Let's go over transaction's fields in a little more detail. 

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

At this code I'll make a transaction between two accounts. To do that, there's a few main things that need happen.

First I need to bring in the dependencies and set up my connection between Web3 and Ganache.

## web3.js

Makes possible the communication between an app and the ethereum blockchain.

## Ganache

It's a tool that allow us to use a local ethereum blockchain that preset 10 accounts with 100 ether each one.

