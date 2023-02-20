const Web3 = require('web3');
const web3 = new Web3("https://bsc-dataseed.binance.org")
const tx="0xd0fb2b2ea0f2f2c38fcc40bf61826e90f7289b1f2cb6a94584196fb3aa530b84"
async function test(){
const blockNumber=await web3.eth.getTransaction(tx)
return blockNumber
}
const block= test()
block.then(async (res)=>{
const blockNumber=res.blockNumber
const timestamp=await web3.eth.getBlock(await blockNumber)

console.log(timestamp.timestamp);

})
