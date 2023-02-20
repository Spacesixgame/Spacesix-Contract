const hre = require("hardhat");
const routPath = require('../utils/routePath');
const {join} = require('path');
const fs = require('fs');
// const ContractName="IncreaseAmount"
const ContractName="MintNft"
// const ContractName="GetMintNft"
// const ContractName="Stake"

async function main() {

    const Contract = await hre.ethers.getContractFactory(ContractName);
    const contract = await Contract.deploy("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","0x40Bb32Cf53EC527C2FDd8Dca67Bb88385DB53021","0x930870808a3987A94c8b440f831A4C245787eAe4");
    // const contract = await Contract.deploy("0xa47cf3CE42C2045e071f1119e3e305ef1638a20A");
    // const contract = await Contract.deploy();
  
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
  