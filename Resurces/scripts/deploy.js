const hre = require("hardhat");
const routPath = require('../utils/routePath');
const {join} = require('path');
const fs = require('fs');
// const ContractName="MintNft"

const ContractName="GetMintNft"


async function main() {

    const Contract = await hre.ethers.getContractFactory(ContractName);
    // const contract = await Contract.deploy("0xe9e7cea3dedca5984780bafc599bd69add087d56","0x40bb32cf53ec527c2fdd8dca67bb88385db53021");
    // const contract = await Contract.deploy("0xB691f972969F4F292414a82cE1cC5aDa2C629dB2");
// 0xB691f972969F4F292414a82cE1cC5aDa2C629dB2
  // const contract = await Contract.deploy("0x04E52952d50B84363E856649db1b7941acc0C15F","0x60C5e2F00A63d3310a5dc0D0010bcb6874e7B589");
  
    const contract = await Contract.deploy("0x1031Da8cF0e62Eb7A6AB9dfa8954cb5cCf10e1a2");

    // const contract = await Contract.deploy("0x5FbDB2315678afecb367f032d93F642f64180aa3","0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");

    // const contract = await Contract.deploy();
    // const contract = await Contract.deploy("0x688894b4BA2Df346B12C12f60828589E77ef719E");
    // const contract = await Contract.deploy("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");

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
  