const address="0x359093423404DC7F9a64E05B6C64327aEbadDa45";
const contract = require('../utils/Connect');
const ethers = require('ethers');


async function alaki() {
    // console.log(wallet);
let log=await contract.mintNFT(3,"252000000000000000000",0,1,"0x116F0BdBDc03dd620EB7EE7550184D38B9442eaa")
// console.log("wallet");

return log;
}
alaki().then(res=>{
console.log("wallet");

console.log(res);
}).catch(err=>{
  console.log(err)
})