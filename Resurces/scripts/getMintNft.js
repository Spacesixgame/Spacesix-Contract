// 0x60F4823c6B53d032011Dc9863D21AfA8db9A8149const address="0x359093423404DC7F9a64E05B6C64327aEbadDa45";
const hardhat = require('hardhat');
const abi = require('../artifacts/contracts/GetMintNft.sol/GetMintNft.json').abi;
// const {provider,contract} = require('../utils/connectLocalhost');

const contractAddress="0x8A791620dd6260079BF849Dc5567aDC3F2FdC318"
const ethers = require('ethers');
const provider=new ethers.providers.JsonRpcProvider()

const contract = new ethers.Contract(contractAddress, abi, provider);
const signers=hardhat.ethers.getSigners()


async function alaki() {
  const [wallet,signer]=await signers
    // console.log(wallet);3,"252000000000000000000",0,1,"0x116F0BdBDc03dd620EB7EE7550184D38B9442eaa"
// let log=await contract.getTransactions()
// let log=await contract.getNFT(1)
// const alaki=await provider.getBlockNumber()
// console.log("wallet");
// console.log(log);
// log.then(res=>console.log(res))
// return log;
// TxID
}
alaki().then(res=>{
console.log(res);
}).catch(err=>{
  console.log(err)
})

