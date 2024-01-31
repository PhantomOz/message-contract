# MyMessage

This is a simple Solidity contract that allows anyone to set and get a message.

## Prerequisites

- [Hardhat](https://github.com/ethereum/solidity/blob/develop/README.md) - a development environment for compiling, testing, debugging and deploying Ethereum contracts
- [Node.js](https://github.com/SRI-CSL/solidity/blob/boogie/README.md) - a JavaScript runtime for running Hardhat scripts
- [MetaMask](https://ethereum.stackexchange.com/questions/30090/how-do-i-compile-a-smart-contract-from-github) - a browser extension for interacting with Ethereum contracts

## Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/yourname/MyMessage.git
cd MyMessage
npm install
```

## Usage

To compile the contract, run:

```bash
npx hardhat compile
```

To test the contract, run:

```bash
npx hardhat test
```

To deploy the contract to a local network, run:

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

To deploy the contract to a public network, edit the `hardhat.config.js` file with your network settings and API keys, and run:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

To interact with the contract using Hardhat console, run:

```bash
npx hardhat console --network <network-name>
```

## This contract is deployed on sepolia and its contract address: `0x47538A7EFDB6F7E2D80Eda7FF087b4692Ec56cb4`
