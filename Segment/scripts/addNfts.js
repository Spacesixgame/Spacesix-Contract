const address="0x359093423404DC7F9a64E05B6C64327aEbadDa45";
const contract = require('../utils/Connect');
const ethers = require('ethers');


async function alaki() {
    
// let log=await contract.addNft(1,1,35,"https://ipfs.io/ipfs/Qmbo35TkW3suhVuQNUCmQaJ7nMGEaz7smj5PLTY5g4VLhz")
// let log=await contract.addNft(1,2,35,"https://ipfs.io/ipfs/QmWZbFBux4z58wvD9KDyyUWpcZYyRkjTYxsnpFDjVJ8eh9")
// let log=await contract.addNft(1,3,35,"https://ipfs.io/ipfs/QmRYiWJNPfRN2MGWg7yuLoLyADwPD7AYXgexoU6b24Nmmt")
// let log=await contract.addNft(1,4,35,"https://ipfs.io/ipfs/QmbsVWKucBk2HidfpXKa1CrS55PTjWas7t7EetSksbzbz8")

// let log=await contract.addNft(2,1,63,"https://ipfs.io/ipfs/QmbH41RRNDDioDZkodLX3bKgQgTPfLNx8kEMoULXrEVBBm")
// let log=await contract.addNft(2,2,63,"https://ipfs.io/ipfs/QmWqajts12CsizgEqvR37BG9jyPmEqpy3JEvzPhHoMEnpf")
// let log=await contract.addNft(2,3,63,"https://ipfs.io/ipfs/QmdGcyJbT5URLSprhTj2k4nR6bKAtcHSSUYkwLuMqDFMjw")
// let log=await contract.addNft(2,4,63,"https://ipfs.io/ipfs/QmeQ9AviY8yTvKvvFKzxJhLpPKC4sUz9uVSRXzgoAzGBCs")

// let log=await contract.addNft(3,1,88,"https://ipfs.io/ipfs/QmeHnPNEedNvY2rmnUXcmPUuQPyZA2G9ShsPtWP92jpQV5")
// let log=await contract.addNft(3,2,88,"https://ipfs.io/ipfs/Qmex65iJEAkWVKr8Tn3zjUazY5UVo9Ba7eoqjyPNQiJzto")
// let log=await contract.addNft(3,3,88,"https://ipfs.io/ipfs/Qmejhxd4xogeD9XwfCEGkWcMTa3ZLVBDdrRsENUooFguHd")
// let log=await contract.addNft(3,4,88,"https://ipfs.io/ipfs/QmWeQS6fFE9Gxk7RRwisxn3rk4wPdTquYRS4emFC7sFHu3")

// let log=await contract.addNft(4,1,112,"https://ipfs.io/ipfs/QmdsuwTCyec6AfhrZyzMJMHLnY5XytFPGTuqnNy9TNC2Fc")
// let log=await contract.addNft(4,2,112,"https://ipfs.io/ipfs/QmaMKY17XSG4aWEZKXnDYfaLwDLMSJX1s4FqHa3upULnja")
// let log=await contract.addNft(4,3,112,"https://ipfs.io/ipfs/QmZtC5WmU5iqLPebkKf6Cx7E89HSWqw1ayVKHcFYwAXEyD")
let log=await contract.addNft(4,4,112,"https://ipfs.io/ipfs/QmP7PPVWDTNkbvrcxEp63CgCsNmMAEkCHU1MzqUEHsDJof")


return log;
}

alaki().then(res=>{
console.log("success");

console.log(res);
}).catch(err=>{
  console.log(err)
})

// contract.addNft(1,1,35,"https://ipfs.io/ipfs/Qmbo35TkW3suhVuQNUCmQaJ7nMGEaz7smj5PLTY5g4VLhz")
// let log=await contract.addNft(1,2,35,"https://ipfs.io/ipfs/QmWZbFBux4z58wvD9KDyyUWpcZYyRkjTYxsnpFDjVJ8eh9")
// let log=await contract.addNft(1,3,35,"https://ipfs.io/ipfs/QmRYiWJNPfRN2MGWg7yuLoLyADwPD7AYXgexoU6b24Nmmt")
// let log=await contract.addNft(1,4,35,"https://ipfs.io/ipfs/QmbsVWKucBk2HidfpXKa1CrS55PTjWas7t7EetSksbzbz8")

// https://ipfs.io/ipfs/Qmbo35TkW3suhVuQNUCmQaJ7nMGEaz7smj5PLTY5g4VLhz
// https://ipfs.io/ipfs/QmWZbFBux4z58wvD9KDyyUWpcZYyRkjTYxsnpFDjVJ8eh9
// https://ipfs.io/ipfs/QmRYiWJNPfRN2MGWg7yuLoLyADwPD7AYXgexoU6b24Nmmt
// https://ipfs.io/ipfs/QmbsVWKucBk2HidfpXKa1CrS55PTjWas7t7EetSksbzbz8


// https://ipfs.io/ipfs/QmbH41RRNDDioDZkodLX3bKgQgTPfLNx8kEMoULXrEVBBm
// https://ipfs.io/ipfs/QmWqajts12CsizgEqvR37BG9jyPmEqpy3JEvzPhHoMEnpf
// https://ipfs.io/ipfs/QmdGcyJbT5URLSprhTj2k4nR6bKAtcHSSUYkwLuMqDFMjw
// https://ipfs.io/ipfs/QmeQ9AviY8yTvKvvFKzxJhLpPKC4sUz9uVSRXzgoAzGBCs

// https://ipfs.io/ipfs/QmeHnPNEedNvY2rmnUXcmPUuQPyZA2G9ShsPtWP92jpQV5
// https://ipfs.io/ipfs/Qmex65iJEAkWVKr8Tn3zjUazY5UVo9Ba7eoqjyPNQiJzto
// https://ipfs.io/ipfs/Qmejhxd4xogeD9XwfCEGkWcMTa3ZLVBDdrRsENUooFguHd
// https://ipfs.io/ipfs/QmWeQS6fFE9Gxk7RRwisxn3rk4wPdTquYRS4emFC7sFHu3

// https://ipfs.io/ipfs/QmdsuwTCyec6AfhrZyzMJMHLnY5XytFPGTuqnNy9TNC2Fc
// https://ipfs.io/ipfs/QmaMKY17XSG4aWEZKXnDYfaLwDLMSJX1s4FqHa3upULnja
// https://ipfs.io/ipfs/QmZtC5WmU5iqLPebkKf6Cx7E89HSWqw1ayVKHcFYwAXEyD
// https://ipfs.io/ipfs/QmP7PPVWDTNkbvrcxEp63CgCsNmMAEkCHU1MzqUEHsDJof
