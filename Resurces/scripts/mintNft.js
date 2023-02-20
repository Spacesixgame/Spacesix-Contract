const ethers = require('ethers');
const hre = require('hardhat');


const abi = require('../artifacts/contracts/MintNft.sol/MintNft.json').abi;
const contractAddress="0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

const BUSD_ABI = require('../artifacts/contracts/test/BUSD.sol/BUSD.json').abi;
const BUSD_Address="0x5FbDB2315678afecb367f032d93F642f64180aa3"

let provider = new ethers.providers.JsonRpcProvider();
const contract = new hre.ethers.Contract(contractAddress, abi,provider);


const signers=hre.ethers.getSigners()
const BUSD = new hre.ethers.Contract(BUSD_Address, BUSD_ABI,provider);

async function alaki() {
const [wallet,signer2]=await signers
// 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
console.log(wallet.address);
console.log(await hre.ethers.provider.getBalance(wallet.address))
await BUSD.connect(signer2).approve(contractAddress,"100000000000000000000")
await BUSD.connect(wallet).mint(signer2.address,"10000000000000000000000000000")
const priceInBnb=await contract.toBnbPrice("3","1")
// await contract.connect(wallet).mintNFT("1","1","21321312",1,1,wallet.address)
// const balance=await BUSD.balanceOf(wallet.address
// await contract.connect(signer2).mintNFT("3","1","21321312",2,1,signer2.address,{ value: priceInBnb.toString() })
const log=await contract.TxID()


// console.log(hre.network.provider);
return log;
}
alaki().then(res=>{
console.log("wallet");

console.log(res);
}).catch(err=>{
  console.log(err)
})