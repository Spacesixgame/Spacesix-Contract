require('dotenv').config({path:"../config/config.env"});
const hardhat = require('hardhat');
const ethers = require('ethers');


const abi = require('../artifacts/contracts/MintNft.sol/MintNft.json').abi;

const contractAddress="0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

const provider=new hardhat.ethers.providers.getDefaultProvider("http://127.0.0.1:8545/")

// const provider=new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/")
// const wallet=new ethers.Wallet(PRIVATE_KEY,provider);
const contract = new ethers.Contract(contractAddress, abi, provider);
// console.log("wallet");

module.exports = {contract,provider};
