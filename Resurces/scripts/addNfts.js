const contract = require('../utils/Connect');
const ethers = require('ethers');


async function alaki() {


// let log=await contract.connect(signer).addNft(1,ethers.utils.parseEther("0.01"),"https://ipfs.io/ipfs/QmWubixy9WSJHgTdjbQSnC28LDHMs4KQp5hxCu9rFtPWjW")
// let log=await contract.connect(signer).addNft(2,ethers.utils.parseEther("0.056"),"https://ipfs.io/ipfs/QmZwwcZ6XM4cLWy96NCxY5qzdGBnqQQ7Z2bxnxh4jBDzSa")
// let log=await contract.connect(signer).addNft(3,ethers.utils.parseEther("0.2"),"https://ipfs.io/ipfs/QmXJL8TaeS8SpyZPZK7PpWFhw9hzF2fCDaMbLhixVMskcT")
// let log=await contract.connect(signer).addNft(4,ethers.utils.parseEther("2"),"https://ipfs.io/ipfs/QmapDtn2VHCGfMAK5UVbbhgmNNBWyWresTceyY1mb13dVH")

// let log=await contract.addNft(1,ethers.utils.parseEther("0.01"),"https://ipfs.io/ipfs/QmWubixy9WSJHgTdjbQSnC28LDHMs4KQp5hxCu9rFtPWjW")
// let log=await contract.addNft(2,ethers.utils.parseEther("0.056"),"https://ipfs.io/ipfs/QmZwwcZ6XM4cLWy96NCxY5qzdGBnqQQ7Z2bxnxh4jBDzSa")
// let log=await contract.addNft(3,ethers.utils.parseEther("0.2"),"https://ipfs.io/ipfs/QmXJL8TaeS8SpyZPZK7PpWFhw9hzF2fCDaMbLhixVMskcT")
let log=await contract.addNft(4,ethers.utils.parseEther("2"),"https://ipfs.io/ipfs/QmapDtn2VHCGfMAK5UVbbhgmNNBWyWresTceyY1mb13dVH")
// 0xB691f972969F4F292414a82cE1cC5aDa2C629dB2

return log;
}
alaki().then(res=>{
console.log("wallet");

console.log(res);
}).catch(err=>{
  console.log(err)
})