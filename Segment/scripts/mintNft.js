const address="0x359093423404DC7F9a64E05B6C64327aEbadDa45";
const contract = require('../utils/Connect');
const ethers = require('ethers');


async function alaki() {
    // console.log(wallet);
let log=await contract.mintNFT(1,1,"10000000000000000000",0,"1","0x7a263eC0EF7a5312c5370063d3b0e26b935bF48b")
// console.log("wallet");

return log;
}
alaki().then(res=>{
console.log("wallet");

console.log(res);
}).catch(err=>{
  console.log(err)
})