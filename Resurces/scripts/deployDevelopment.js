const hre = require("hardhat");
// const ContractName="BUSD"
const ContractName="priceFeed"
async function main() {

    const Contract = await hre.ethers.getContractFactory(ContractName);
    // const contract = await Contract.deploy("0x7ab4cC8A936D3D6aa84dD50eCefCFD2535F90598","0x60C5e2F00A63d3310a5dc0D0010bcb6874e7B589");
    const contract = await Contract.deploy();
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
  