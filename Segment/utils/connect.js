require('dotenv').config({path:"../config/config.env"});
const ethers = require('ethers');
const { network } = require('hardhat');
// const abi = require('../bin/contracts/GetMintNft.json').abi;
const abi = require('../artifacts/contracts/MintNft.sol/MintNft.json').abi;
const API_KEY=process.env.API_KEY
const PRIVATE_KEY=process.env.CLIENT_PRIVATE_KEY 

const contractAddress="0x0B1916ce30639704D9323c72109B683814FD871E";
const provider=new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org")

// const provider=new ethers.providers.JsonRpcProvider("https://bsc-testnet.public.blastapi.io")
const wallet=new ethers.Wallet(PRIVATE_KEY,provider);
const contract = new ethers.Contract(contractAddress, abi, wallet);
// console.log("wallet");

module.exports = contract;
