# Compound Sandbox Truffle Box

This box is meant to get developers set up with a functioning Compound (https://compound.finance) sandbox with which to build and test smart contracts on top of the protocol. It contains all of the Compound v2 smart contracts, mock ERC20 and cToken contracts, and a migration script to deploy to a local blockchain.

## Installation

1. Install Truffle globally

```
npm install -g truffle
```

2. Download this box inside of a new project directory. This will install all project dependencies.

```
truffle unbox SeanJCasey/compound-sandbox
```

3. Spin up a local blockchain. You can use Truffle's built-in `develop` command, or another tool such as Ganache UI.

```
truffle develop
```

4. Compile and deploy the smart contracts. (The `migrate` command compiles them as its first step).

Using `truffle develop`:
```javascript
migrate
```

Using another blockchain:
```javascript
truffle migrate
```

5. (if not using `truffle develop`) Enter the Truffle console to interact with the deployed smart contracts:

```
truffle console --network development
```

### Interacting with the Compound Sandbox

Use Truffle's built-in syntax to make calls or send transactions.
