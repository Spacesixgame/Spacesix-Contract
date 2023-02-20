
const contract = require('../utils/Connect');
const ethers = require('ethers');


async function alaki() {
let log=await contract.getNFTS()

return log;
}
alaki().then(res=>{

   function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
           !isNaN(parseFloat(str))
  }
let datas=[]
  res.forEach(element => {
  let tx=new Map()
  let temp=new Map();
  for (const [key, value] of Object.entries(element)) {
    const isNum= isNumeric(key)
    if (isNum) {
      continue;
    }
  

    if (isNumeric(value.toString())) {
      tx.set(key,value.toString())
      temp.set(key , value.toString());
      continue;
      
    }
    temp.set(key , value);

  }
  datas.push(temp)

});

console.log(datas);
}).catch(err=>{
  console.log(err)
})

