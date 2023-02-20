require('dotenv').config({path:"../config/config.env"});
const ethers = require('ethers');
const { network } = require('hardhat');
// const abi = require('../bin/contracts/GetMintNft.json').abi;
const abi = require('../artifacts/contracts/MintNft.sol/MintNft.json').abi;
const API_KEY=process.env.API_KEY
const PRIVATE_KEY=process.env.CLIENT_PRIVATE_KEY 

const contractAddress="0x1031Da8cF0e62Eb7A6AB9dfa8954cb5cCf10e1a2";
// const provider=new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org")
// const provider=new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org")


const provider=new ethers.providers.JsonRpcProvider("https://bsc-testnet.public.blastapi.io")
const wallet=new ethers.Wallet(PRIVATE_KEY,provider);
const contract = new ethers.Contract(contractAddress, abi, wallet);
// console.log("wallet");

module.exports = contract;
