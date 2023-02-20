const MintNft = artifacts.require("MintNft");
const Stake = artifacts.require("Stake");
const GetMintNft = artifacts.require("GetMintNft");

module.exports = function (deployer, network, accounts) {
  deployer.then(async () => {
    await deployer.deploy(MintNft);
    await deployer.deploy(Stake, MintNft.address);
    await deployer.deploy(GetMintNft, MintNft.address);
  })
}




// 0x1Cb9f1c18b2310ebc3c153A021e27e86736382D7
//0x3e997507DdA8A3672E330442aCC8E87fa01145C8



// last tstnet version
// 0xD3A64779473D06865315AfBadf1Fb1Ae530604BA Mint Nft
// 0xDb03E947186B83583BABDB8c947b8a09849eD2FF Stake



//0x97bd6616203C274360F7E1faDFE1Fa8EAB7C8d7D Mint Nft - the bug from last version was stake contract address in mint nft
//0xF3836f1199763b3E23f101C0A2709e18a0ABD4fc Stake - the bug from last version was stake contract address in mint nft\



// 0x616B1cE833be3c89a0A248578902BCD7A734D853 mintnft bnb buy unstake bug
// 0xAaB4546C198D1bEBE3341B3B135235b5e16E3B9f stake fake time added both contracts
// 0x136A68B1e8147b53636Ad4A74b1eE8a4CE0f85B9 get nfts and ...








// 0x7Ca93270bB89675B52f7a5A4D5EaC17e3Fe907C2 mint nft mainnet
// 0xB879D36bc9E3E05286f271ADdB2b45f691Eb41Dd stake mainnet
// 0xD5AD5a2023A74A0EB4F9D483e8C4847bBfcF9077 getmintnft mainnet



// 0xad830C40Cc56569a9F8a926995F509C1872bC08E  mintNft //nftOWner address for mint added 
// 0x9586D48A31886D2c7903E37E53d505d1801f5b48  stake // nothing
// 0x1Ed5b5aBCDF8211077CF1E09Ac1C8C7A56d16561 getMintNft // nothing


// 0xcB9ed56dB9960aa9ea305a1A2776e7eF64aa34d3  // mint nft withouht busd check balance
// 0xdD673e7693D57ff4360f73f28978290201Af4F76   //stake nothing
// 0x60F4823c6B53d032011Dc9863D21AfA8db9A8149 // getmintnft nothing



//version of testnet of the mainnet contracts for the test mainnet activites on testnet
//0xA662aCf314B2EaBDa5B171eb2b9666C0fe886f97 mintnft
//0x45279C0f9dE2A98078dF9F4d5E6F2bE1fEc01f2c stake
// 0x500c1c3D16827b07a059F94c670f7CE67E36944b getmintnft





// Last version of testnet include new owner feautures 
// This is the final version
// 0xD56d40B9B24388a266723C4A2d5e30e200d1e2a0 getmintnft
// 0x7Ce165a79B043fd77Fe35B2DDbd93DFd30644E7E stake
// 0x33Ed3336Cb2Bf0CdDA5EAE7C336bdfC649F2a77d mintnft