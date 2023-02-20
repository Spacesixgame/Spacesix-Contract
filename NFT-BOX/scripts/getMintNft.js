// 0x60F4823c6B53d032011Dc9863D21AfA8db9A8149const address="0x359093423404DC7F9a64E05B6C64327aEbadDa45";
const contract = require('../utils/Connect');
const ethers = require('ethers');


async function alaki() {
    // console.log(wallet);3,"252000000000000000000",0,1,"0x116F0BdBDc03dd620EB7EE7550184D38B9442eaa"
let log=await contract.toBnbPrice(1,1)
// let log=await contract.owner()

// console.log("wallet");

return log;
}
alaki().then(res=>{

console.log(res);
}).catch(err=>{
  console.log(err)
})


// 7000000000000000
// 7000000000000000