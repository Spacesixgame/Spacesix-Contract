const address="0x359093423404DC7F9a64E05B6C64327aEbadDa45";
const contract = require('../utils/Connect');
const ethers = require('ethers');


async function alaki() {
    
// let log=await contract.setTokenUri(1,"https://ipfs.io/ipfs/QmdygPMGW1t3KUxNYWes4EQV6Erhx3yiy8Nmj5sYjsJGkB")
// let log=await contract.setTokenUri(2,"https://ipfs.io/ipfs/QmPpEy5CxT9XitNikndYM71AkM6FYWUUHz4VdHf9kLSMvu")
// let log=await contract.setTokenUri(3,"https://ipfs.io/ipfs/QmWGV2xYu3v4jCJFn4UxxQGPF23KjjKK7a2B2eDwPRv8pG")
// let log=await contract.setTokenUri(4,"https://ipfs.io/ipfs/QmfLkSTY7GJARptanH8t43sjhzNxSXfYNiC4MYAKcuYCw1")


return log;
}
alaki().then(res=>{
console.log("wallet");

console.log(res);
}).catch(err=>{
  console.log(err)
})