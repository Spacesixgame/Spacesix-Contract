// 0x60F4823c6B53d032011Dc9863D21AfA8db9A8149const address="0x359093423404DC7F9a64E05B6C64327aEbadDa45";
const contract = require('../utils/Connect');
const ethers = require('ethers');


async function alaki() {
    // console.log(wallet);3,"252000000000000000000",0,1,"0x116F0BdBDc03dd620EB7EE7550184D38B9442eaa"
let log=await contract.getNfts()
// console.log("wallet");

return log;
}
alaki().then(res=>{
// console.log("wallet");
let arr=[]
for (let i = 0; i < res.length; i++) {
    // const element = array[index];
    let {nftTokenId}=res[i]
    arr.push(nftTokenId.toString())
    
}
// const {nftTokenId}=res[0]
console.log(arr);

console.log(arr);
}).catch(err=>{
  console.log(err)
})

