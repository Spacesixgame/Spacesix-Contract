require('dotenv').config({path:"../config/config.env"});
const ethers = require('ethers');
const { network } = require('hardhat');
// const abi = require('../bin/contracts/GetMintNft.json').abi;
const abi = require('../artifacts/contracts/MintNft.sol/MintNft.json').abi;
const API_KEY=process.env.API_KEY
const PRIVATE_KEY=process.env.CLIENT_PRIVATE_KEY

const contractAddress="0x1C86b0DA46c0B18406C72C41dF640913C4b32D36";
const provider=new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org")

// const provider=new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-2-s2.binance.org:8545")
const wallet=new ethers.Wallet(PRIVATE_KEY,provider);
const contract = new ethers.Contract(contractAddress, abi, wallet);
// console.log("wallet");

module.exports = contract;
