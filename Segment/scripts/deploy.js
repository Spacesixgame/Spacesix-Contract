const hre = require("hardhat");
// const ContractName = "MintNft"
const ContractName="GetMintNft"


async function main() {

  const Contract = await hre.ethers.getContractFactory(ContractName);
  // const contract = await Contract.deploy("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","0x40Bb32Cf53EC527C2FDd8Dca67Bb88385DB53021");
  // const contract = await Contract.deploy("0x04E52952d50B84363E856649db1b7941acc0C15F","0x60C5e2F00A63d3310a5dc0D0010bcb6874e7B589");

  const contract = await Contract.deploy("0x7FE1a9e8ac319bb886BA249a8e9496CA5ddF4776");
  const logger = await contract.deployed();

  const deployLog = logger.deployTransaction
  const temp = new Map();

  for (const [key, value] of Object.entries(deployLog)) {

    if (key === "data") {
      continue;
    }
    temp.set(key, value);
  }
  console.log(logger.provider);
  console.log(logger.signer);
  console.log(temp);
  const LogArr = [logger.provider, logger.signer, temp]

  console.log(
    `address is : ${logger.address}`
  );

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
