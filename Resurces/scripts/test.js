const ethers = require('ethers');
const hardhat = require('hardhat');
hardhat.ethers.getSigners().then(res=>console.log(res))