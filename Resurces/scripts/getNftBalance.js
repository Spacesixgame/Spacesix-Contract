const ethers = require('ethers');
const hre = require('hardhat');

const abi = require('../artifacts/contracts/MintNft.sol/MintNft.json').abi;
const contractAddress="0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";


let provider = new ethers.providers.JsonRpcProvider();
const contract = new hre.ethers.Contract(contractAddress, abi,provider);

const signers=hre.ethers.getSigners()

async function alaki() {
    const [wallet]=await signers


    const log=await contract.balanceOf(wallet.address,"1")
    
    // let log=await contract.connect(wallet).mintNFT("1","1","21321312",1,1,wallet.address)
    
    // console.log(hre.network.provider);
    return log;
    }
    alaki().then(res=>{
    console.log("wallet");
    
    console.log(res);
    }).catch(err=>{
      console.log(err)
    })