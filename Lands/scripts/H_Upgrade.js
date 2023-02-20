const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')

const contractAddress = '0x60F4823c6B53d032011Dc9863D21AfA8db9A8149';
const GetMintNft = require('../build/contracts/GetMintNft.json').abi;

const GetNfts2 = '0xE857A6b4f34Bd99eBE2f2a5c9fC6276ceCDe2eec';
const GetNftsAbi = require('./GetNfts2.json').abi;

const mintNft = '0xcB9ed56dB9960aa9ea305a1A2776e7eF64aa34d3';
const mintNftAbi = require('../build/contracts/MintNft.json').abi;


const token = async () => {
    const provider = new HDWalletProvider(privateKey, 'https://bsc-dataseed1.binance.org')
    const web3 = new Web3(provider)

    const contract = new web3.eth.Contract(GetMintNft, contractAddress);
    const contract2 = new web3.eth.Contract(GetNftsAbi, GetNfts2);
    const contract3 = new web3.eth.Contract(mintNftAbi, mintNft);

    // const getTransactions = await contract2.methods.getMyNfts().call()
    const getNFTS = await contract.methods.getNFTS().call()
    console.log(getNFTS);
    // const owner = await contract3.methods.owner().call()
    // console.log(owner);

    // const getTransactionssss = await contract.methods.getNFTS().call()
    // console.log(getTransactionssss)

    
    // i = 0;
    // var total = 0;
    // setInterval(async() =>{
    //     console.log(getNFTS[i])
    //     var transactionAmount = getTransactions[i].amount
    //     console.log(transactionAmount);
    //     transactionAmount = transactionAmount / 10**18
    //     total = total + Number(transactionAmount)
    //     console.log(total);
        // var transactionUser = getTransactions[i].user
        // console.log(transactionAmount , transactionUser);
        // console.log(getTransactions);
        // let foundNft = getNFTS.find(t=>t.amount==transactionAmount)
        // console.log(foundNft.tokenId)



        i++
    // } , 100)
}
token()

// async function setMetadatas() {
//     setInterval(token,15000);
//     // intervalFunc()
// }


// setMetadatas()


    // getNFTS.forEach(element => {
    //     // console.log(element.amount);
    //     setInterval(()=>{
    //         console.log(element.amount);
    //     }, 15000);
    // });



    // const mintNFT = await contract3.methods.mintNFT(foundNft.tokenId,transactionAmount,'0','1' , transactionUser).send({from : address})
    //     console.log(mintNFT);