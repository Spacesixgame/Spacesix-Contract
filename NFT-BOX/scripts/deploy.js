const hre = require("hardhat");
const routPath = require('../utils/routePath');
const {join} = require('path');
const fs = require('fs');
const ContractName="MintNft"
// const ContractName="GetMintNft"


async function main() {

    const Contract = await hre.ethers.getContractFactory(ContractName);
    const contract = await Contract.deploy("0xe9e7cea3dedca5984780bafc599bd69add087d56","0x40bb32cf53ec527c2fdd8dca67bb88385db53021");
    // const contract = await Contract.deploy("0x40a5Fc85D02561dF5fAC18FCFb86Bcd26b26b8Cb");
    const logger = await contract.deployed();
    
    const deployLog=logger.deployTransaction
    const temp = new Map();

    for (const [key, value] of Object.entries(deployLog)) {

       if(key === "data"){
           continue;
       }
       temp.set(key , value);
     }
    console.log(logger.provider);
    console.log(logger.signer);
    console.log(temp);
    const LogArr=[logger.provider,logger.signer,temp]

    console.log(
      `address is : ${logger.address}`
    );
    
  }

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  