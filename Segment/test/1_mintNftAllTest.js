const {expect,use} = require('chai');
const { ethers } = require("hardhat");
const colors = require('colors');
const {
    time,
    loadFixture

  } = require("@nomicfoundation/hardhat-network-helpers");
const BN = require('bn.js');
// use()
use(require('chai-bn')(BN))
// let address="";
let MintNftContract=Object;

describe("Mint Nft".yellow,function(){
    let BUSDContract=Object;
    let PriceFeedContract=Object;
    let GetNftsContract=Object

        async function deployContracts(){
            
          const PriceFeed = await ethers.getContractFactory("priceFeed");
          const priceFeed= await PriceFeed.deploy();  
          await priceFeed.deployed()

          const BUSD = await ethers.getContractFactory("BUSD");
          const busd= await BUSD.deploy(ethers.utils.parseUnits("100","ether"));  
          await busd.deployed()

            const MintNft = await ethers.getContractFactory("MintNft");
            const mintNft= await MintNft.deploy(busd.address,priceFeed.address);  
            await mintNft.deployed()
            const GetMintNft = await ethers.getContractFactory("GetMintNft");
            const getMintNft= await GetMintNft.deploy(mintNft.address);  
            await getMintNft.deployed()
            GetNftsContract=getMintNft

            MintNftContract=mintNft
            BUSDContract=busd
            PriceFeedContract=priceFeed
            
        }
        describe("deploy".bgWhite.black,async function(){
            it("is deployed?",async function(){
                const [owner]=await ethers.getSigners()
                await loadFixture(deployContracts)
                expect(await MintNftContract.owner()).to.equal(owner.address)
            })

        })
        describe("Deployment".bgWhite.black,async function () {
        
        
          it("Should set the right busd address", async function () {
            
            
          expect(await MintNftContract.BUSD()).to.equal(BUSDContract.address);
        });
        
        it("Should set the right Pricefeed address", async function () {
            
          
        expect(await MintNftContract.ChainLinkPriceFeed()).to.equal(PriceFeedContract.address);
      });
            
            it("Should set the right owner", async function () {
            
                const [owner]=await ethers.getSigners()
              expect(await MintNftContract.owner()).to.equal(owner.address);
            });
        
          });
          

        describe("mint nfts".bgWhite.black,function(){
          describe("add nfts".blue,function(){
            describe("add segments level 1".bgMagenta, function () {
              it("nft level 1 segment nose added?",async function(){
                const [owner] = await ethers.getSigners();
                await MintNftContract.connect(owner).addNft("1","1","35","level_1_Nose")

              })
              it("nft level 1 segment nose check",async function(){
                const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("1")


                expect(level).to.equal(1)
                expect(nftPart).to.equal(1)
                expect(ethers.utils.formatUnits(amount,"ether")).to.equal("35.0")
                expect(metaData).to.equal("level_1_Nose")

                console.log(`         level = ${level}`.white);
                console.log(`         part = ${nftPart}`.white);
                console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
                console.log(`         metaData = ${metaData}`.white);
    })
    it("nft level 1 segment tank added?",async function(){
      const [owner] = await ethers.getSigners();
      await MintNftContract.connect(owner).addNft("1","2","35","level_1_Tank")

    })
    it("nft level 1 segment tank check",async function(){
      const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("2")


      expect(level).to.equal(1)
      expect(nftPart).to.equal(2)
      expect(ethers.utils.formatUnits(amount,"ether")).to.equal("35.0")
      expect(metaData).to.equal("level_1_Tank")

      console.log(`         level = ${level}`.white);
      console.log(`         part = ${nftPart}`.white);
      console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
      console.log(`         metaData = ${metaData}`.white);
})

it("nft level 1 segment booster added?",async function(){
  const [owner] = await ethers.getSigners();
  await MintNftContract.connect(owner).addNft("1","3","35","level_1_Booster")

})
it("nft level 1 segment booster check",async function(){
  const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("3")


  expect(level).to.equal(1)
  expect(nftPart).to.equal(3)
  expect(ethers.utils.formatUnits(amount,"ether")).to.equal("35.0")
  expect(metaData).to.equal("level_1_Booster")

  console.log(`         level = ${level}`.white);
  console.log(`         part = ${nftPart}`.white);
  console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
  console.log(`         metaData = ${metaData}`.white);
})

it("nft level 1 segment engine added?",async function(){
  const [owner] = await ethers.getSigners();
  await MintNftContract.connect(owner).addNft("1","4","35","level_1_engine")

})
it("nft level 1 segment engine check",async function(){
  const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("4")


  expect(level).to.equal(1)
  expect(nftPart).to.equal(4)
  expect(ethers.utils.formatUnits(amount,"ether")).to.equal("35.0")
  expect(metaData).to.equal("level_1_engine")

  console.log(`         level = ${level}`.white);
  console.log(`         part = ${nftPart}`.white);
  console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
  console.log(`         metaData = ${metaData}`.white);
})
          })
            
        
      

    
  describe("add segments level 2".bgMagenta, function () {
        it("nft level 2 segment nose added?",async function(){
          const [owner] = await ethers.getSigners();
          await MintNftContract.connect(owner).addNft("2","1","63","level_2_Nose")

        })
        it("nft level 2 segment nose check",async function(){
          const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("5")


          expect(level).to.equal(2)
          expect(nftPart).to.equal(1)
          expect(ethers.utils.formatUnits(amount,"ether")).to.equal("63.0")
          expect(metaData).to.equal("level_2_Nose")

          console.log(`         level = ${level}`.white);
          console.log(`         part = ${nftPart}`.white);
          console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
          console.log(`         metaData = ${metaData}`.white);
})
it("nft level 2 segment tank added?",async function(){
const [owner] = await ethers.getSigners();
await MintNftContract.connect(owner).addNft("2","2","63","level_2_Tank")

})
it("nft level 2 segment tank check",async function(){
const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("6")


expect(level).to.equal(2)
expect(nftPart).to.equal(2)
expect(ethers.utils.formatUnits(amount,"ether")).to.equal("63.0")
expect(metaData).to.equal("level_2_Tank")

console.log(`         level = ${level}`.white);
console.log(`         part = ${nftPart}`.white);
console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
console.log(`         metaData = ${metaData}`.white);
})

it("nft level 2 segment booster added?",async function(){
const [owner] = await ethers.getSigners();
await MintNftContract.connect(owner).addNft("2","3","63","level_2_Booster")

})
it("nft level 2 segment booster check",async function(){
const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("7")


expect(level).to.equal(2)
expect(nftPart).to.equal(3)
expect(ethers.utils.formatUnits(amount,"ether")).to.equal("63.0")
expect(metaData).to.equal("level_2_Booster")

console.log(`         level = ${level}`.white);
console.log(`         part = ${nftPart}`.white);
console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
console.log(`         metaData = ${metaData}`.white);
})

it("nft level 2 segment engine added?",async function(){
const [owner] = await ethers.getSigners();
await MintNftContract.connect(owner).addNft("2","4","63","level_2_engine")

})
it("nft level 2 segment engine check",async function(){
const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("8")


expect(level).to.equal(2)
expect(nftPart).to.equal(4)
expect(ethers.utils.formatUnits(amount,"ether")).to.equal("63.0")
expect(metaData).to.equal("level_2_engine")

console.log(`         level = ${level}`.white);
console.log(`         part = ${nftPart}`.white);
console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
console.log(`         metaData = ${metaData}`.white);
})
    })



describe("add segments level 3".bgMagenta, function () {
      it("nft level 3 segment nose added?",async function(){
        const [owner] = await ethers.getSigners();
        await MintNftContract.connect(owner).addNft("3","1","88","level_3_Nose")

      })
      it("nft level 3 segment nose check",async function(){
        const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("9")


        expect(level).to.equal(3)
        expect(nftPart).to.equal(1)
        expect(ethers.utils.formatUnits(amount,"ether")).to.equal("88.0")
        expect(metaData).to.equal("level_3_Nose")

        console.log(`         level = ${level}`.white);
        console.log(`         part = ${nftPart}`.white);
        console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
        console.log(`         metaData = ${metaData}`.white);
})
it("nft level 3 segment tank added?",async function(){
const [owner] = await ethers.getSigners();
await MintNftContract.connect(owner).addNft("3","2","88","level_3_Tank")

})
it("nft level 3 segment tank check",async function(){
const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("10")


expect(level).to.equal(3)
expect(nftPart).to.equal(2)
expect(ethers.utils.formatUnits(amount,"ether")).to.equal("88.0")
expect(metaData).to.equal("level_3_Tank")

console.log(`         level = ${level}`.white);
console.log(`         part = ${nftPart}`.white);
console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
console.log(`         metaData = ${metaData}`.white);
})

it("nft level 3 segment booster added?",async function(){
const [owner] = await ethers.getSigners();
await MintNftContract.connect(owner).addNft("3","3","88","level_3_Booster")

})
it("nft level 3 segment booster check",async function(){
const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("11")


expect(level).to.equal(3)
expect(nftPart).to.equal(3)
expect(ethers.utils.formatUnits(amount,"ether")).to.equal("88.0")
expect(metaData).to.equal("level_3_Booster")

console.log(`         level = ${level}`.white);
console.log(`         part = ${nftPart}`.white);
console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
console.log(`         metaData = ${metaData}`.white);
})

it("nft level 3 segment engine added?",async function(){
const [owner] = await ethers.getSigners();
await MintNftContract.connect(owner).addNft("3","4","88","level_3_engine")

})
it("nft level 3 segment engine check",async function(){
const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("12")


expect(level).to.equal(3)
expect(nftPart).to.equal(4)
expect(ethers.utils.formatUnits(amount,"ether")).to.equal("88.0")
expect(metaData).to.equal("level_3_engine")

console.log(`         level = ${level}`.white);
console.log(`         part = ${nftPart}`.white);
console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
console.log(`         metaData = ${metaData}`.white);
})
  })

  describe("add segments level 4".bgMagenta, function () {
      it("nft level 4 segment nose added?",async function(){
        const [owner] = await ethers.getSigners();
        await MintNftContract.connect(owner).addNft("4","1","112","level_4_Nose")

      })
      it("nft level 4 segment nose check",async function(){
        const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("13")


        expect(level).to.equal(4)
        expect(nftPart).to.equal(1)
        expect(ethers.utils.formatUnits(amount,"ether")).to.equal("112.0")
        expect(metaData).to.equal("level_4_Nose")

        console.log(`         level = ${level}`.white);
        console.log(`         part = ${nftPart}`.white);
        console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
        console.log(`         metaData = ${metaData}`.white);
})
it("nft level 4 segment tank added?",async function(){
const [owner] = await ethers.getSigners();
await MintNftContract.connect(owner).addNft("4","2","112","level_4_Tank")

})
it("nft level 4 segment tank check",async function(){
const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("14")


expect(level).to.equal(4)
expect(nftPart).to.equal(2)
expect(ethers.utils.formatUnits(amount,"ether")).to.equal("112.0")
expect(metaData).to.equal("level_4_Tank")

console.log(`         level = ${level}`.white);
console.log(`         part = ${nftPart}`.white);
console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
console.log(`         metaData = ${metaData}`.white);
})

it("nft level 4 segment booster added?",async function(){
const [owner] = await ethers.getSigners();
await MintNftContract.connect(owner).addNft("4","3","112","level_4_Booster")

})
it("nft level 4 segment booster check",async function(){
const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("15")


expect(level).to.equal(4)
expect(nftPart).to.equal(3)
expect(ethers.utils.formatUnits(amount,"ether")).to.equal("112.0")
expect(metaData).to.equal("level_4_Booster")

console.log(`         level = ${level}`.white);
console.log(`         part = ${nftPart}`.white);
console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
console.log(`         metaData = ${metaData}`.white);
})

it("nft level 4 segment engine added?",async function(){
const [owner] = await ethers.getSigners();
await MintNftContract.connect(owner).addNft("4","4","112","level_4_engine")

})
it("nft level 4 segment engine check",async function(){
const {level,nftPart,amount,metaData}= await MintNftContract.AllNfts("16")


expect(level).to.equal(4)
expect(nftPart).to.equal(4)
expect(ethers.utils.formatUnits(amount,"ether")).to.equal("112.0")
expect(metaData).to.equal("level_4_engine")

console.log(`         level = ${level}`.white);
console.log(`         part = ${nftPart}`.white);
console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.white);
console.log(`         metaData = ${metaData}`.white);
})
  })

})

describe("mint".blue,async function(){
  describe("mint for owner",function(){
    
    describe("mint multiple nft for owner",async function(){

      it("owner nft check",async function(){
        const [owner] = await ethers.getSigners();

        let {amount}=await MintNftContract.AllNfts("1")
        amount=amount.toString()

        let howmany=new BN(10)
        let price=new BN(amount).mul(howmany).toString()

        await MintNftContract.connect(owner).mintNFT("1",price,"0","10",owner.address)
      
        expect(await MintNftContract.balanceOf(owner.address,"1")).to.equal("10")
        console.log(await MintNftContract.balanceOf(owner.address,"1"));

      })
      describe("owner paid no fee",async function(){
          it("bnb balance no change",async function(){
          const [owner] = await ethers.getSigners();

            const balance=await ethers.provider.getBalance(owner.address)
            const bnbBalance=balance.toString()

            expect(bnbBalance).to.be.bignumber.greaterThan(ethers.utils.parseUnits("9999","ether").toString())


          })

          it("busd balance no change",async function(){
          const [owner] = await ethers.getSigners();

            const balance=await BUSDContract.balanceOf(owner.address)

            expect(balance.toString()).to.equal(ethers.utils.parseUnits("100","ether").toString())

          })
        })
})
})
describe("mint for user",function (){
  describe("mint one nft",function(){
    it("mint one nft busd payment ",async function(){
      const [owner , account2]=await ethers.getSigners()
      const price=ethers.utils.parseUnits("88","ether")
      await BUSDContract.connect(account2).approve(MintNftContract.address,price.toString())
      console.log("               approved".gray);  

      await expect( MintNftContract.connect(account2).mintNFT("10",price.toString(),"1","1",account2.address),"should be revert".cyan).to.be.revertedWith("ERC20: transfer amount exceeds balance")
      console.log("               reverted".white);  
      await BUSDContract.connect(owner).mint(account2.address,price.toString())
      const balance=await BUSDContract.balanceOf(account2.address)
      console.log(`               balance = ${await balance.toString()} `.white);  

      console.log("               busd minted for account2".white);  
      console.log("               function is not going to revert now".white);  

      await MintNftContract.connect(account2).mintNFT("10",price.toString(),"1","1",account2.address)
      const newBalance=new BN(balance.toString())
      console.log(`               balance changed to = ${newBalance.toString()}`.white);
      expect(await MintNftContract.balanceOf(account2.address,"10")).to.equal("1")

    })
//     it("mint one nft bnb payment",async function(){{
//       const [owner , account2 , account3]=await ethers.getSigners()
//       const price=ethers.utils.parseUnits("99","ether")
//       const priceInBnb=await MintNftContract.toBnbPrice("4","1")
//       const oldBalance=await ethers.provider.getBalance(account3.address)
//       await MintNftContract.connect(account3).mintNFT("4",price.toString(),"2","1",account3.address,{ value: priceInBnb.toString() })
//       const newBalance=new BN( (await ethers.provider.getBalance(account3.address)).toString())
//       const fee=new BN(oldBalance.toString()).sub(newBalance).sub(new BN(priceInBnb.toString()))
//       const exactBalance=(fee.add(newBalance)).toString()

//       console.log("             user: bnb fee payed".cyan);
//       expect((oldBalance.sub(exactBalance.toString()))).to.equal(priceInBnb.toString())
//       const newPriceInBnb=await MintNftContract.toBnbPrice("4","1")
//       console.log("             user: price in bnb no change succesfully".cyan);

//       expect(newPriceInBnb.toString()).to.be.bignumber.equal(priceInBnb.toString())

//     }})
//   })
//   describe("mint multiple nfts",function(){
//     describe("mint multiple nft ",async function(){
//       it("mint multiple nft busd payment ",async function(){
//         const [owner , account2,account3,account4]=await ethers.getSigners()
//         const price_= (ethers.utils.parseUnits("99","ether")).toString()
//         const price=new BN(price_).mul(new BN("10"))
//         await BUSDContract.connect(account4).approve(MintNftContract.address,price.toString())
//         console.log("               approved".gray);  
//         await expect( MintNftContract.connect(account4).mintNFT("4",price.toString(),"1","10",account4.address),"should be revert".cyan).to.be.revertedWith("ERC20: transfer amount exceeds balance")
//         console.log("               reverted".white); 
//         const balance=await BUSDContract.balanceOf(account4.address)

//         console.log(`               balance = ${await balance.toString()} `.white);  

//         await BUSDContract.connect(owner).mint(account4.address,price.toString())
  
//         console.log("               busd minted for account4".white);  
//         console.log("               function is not going to revert now".white);  
  
//         const newBalance=new BN((await BUSDContract.balanceOf(account4.address)).toString())
//         console.log(`               balance changed to = ${newBalance.toString()}`.white);

//         await MintNftContract.connect(account4).mintNFT("4",price.toString(),"1","10",account4.address)
//       //   const {count}=await MintNftContract.AllNfts("5")
//       // console.log(`               count changed to = ${count.toString()}`.white);
//         expect(await MintNftContract.balanceOf(account4.address)).to.equal("10")

//         const nftLevel4=await MintNftContract.AllNfts("4")
//         const nftLevel4price=nftLevel4[1].toString()
//         const nft4price=ethers.utils.parseEther("99")
//         expect(nftLevel4price).to.equal(nft4price.toString())
//         console.log("             user: nft level 5 price changed by 5$ ".cyan);
        
  
  
//       })
//       it("mint multiple nft bnb payment",async function(){{
//         const [owner , account2,account3,account4,account5]=await ethers.getSigners()
//         const nftLevel4=await MintNftContract.AllNfts("4")
//         const nftLevel4price=nftLevel4[1].toString()
//         const price_= nftLevel4price
//         const price=new BN(price_).mul(new BN("10"))
//         const priceInBnb=await MintNftContract.toBnbPrice("4","10")
//         const bnbPrice=new BN(priceInBnb.toString())
//         const oldBalance=await ethers.provider.getBalance(account5.address)
//         const oldBalanceNoFee=new BN(oldBalance.toString()).sub(bnbPrice)
//         await MintNftContract.connect(account5).mintNFT("4",price.toString(),"2","10",account5.address,{ value: bnbPrice.toString()})
//         const newPriceInBnb=await MintNftContract.toBnbPrice("4","10")
//         expect(newPriceInBnb.toString()).to.equal(bnbPrice.toString())
//         const newBalance=await ethers.provider.getBalance(account5.address)
//         expect(oldBalanceNoFee.toString()).to.be.bignumber.greaterThan(newBalance.toString())
  
//       }})
//     })
//   })
// })
describe("update meta data",function (){
  
//   it("updating all",async function(){
//     await MintNftContract.updateAllTokenURI("1","koskesh")

//     const tokenIds=await MintNftContract.TxID()
  
//     const AllNfts=await GetNftsContract.getTransactions()
//     //   console.log(AllNfts);
//     expect(tokenIds.toString()).to.equal(AllNfts.length.toString())
//   })
// // // })
describe("lock transfer",function (){
  it("Owner Locked",async function(){
    await MintNftContract.changeTransferLock(true)
    
    const [owner , account2,account3,account4,account5]=await ethers.getSigners()
    await expect(MintNftContract.connect(owner).safeTransferFrom(owner.address,account4.address,"1","1","0x")).to.be.revertedWith("Transfer is lock now")

  })
  it("Owner unLocked",async function(){
    await MintNftContract.changeTransferLock(false)
    const [owner , account2,account3,account4,account5]=await ethers.getSigners()
    await MintNftContract.connect(owner).safeTransferFrom(owner.address,account4.address,"1","1","0x")
    // const {nftOwner}=await MintNftContract.transactions("10","1","0x");
    // expect(nftOwner).to.equal(account4.address)
  })
})

//     })
//   })
  describe("Owner",function (){
    it("changePrice to up",async function(){
      const [owner]= await ethers.getSigners()
      // const 
      let pr=await MintNftContract.AllNfts("1")
      console.log(pr[3].toString());

      await MintNftContract.changeSegmentPrice(true,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[3].toString());
      await MintNftContract.changeSegmentPrice(true,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[3].toString());
      await MintNftContract.changeSegmentPrice(true,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[3].toString());
      await MintNftContract.changeSegmentPrice(false,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[3].toString());
      await MintNftContract.changeSegmentPrice(false,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[3].toString());
      await MintNftContract.changeSegmentPrice(false,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[3].toString());

      const oldPrice_=await MintNftContract.AllNfts("1")
      const oldPrice=oldPrice_[3].toString()
      const old=new BN(oldPrice)
      console.log(old.toString());
      
      await MintNftContract.changeSegmentPrice(true,"1","10")
      const {amount}=await MintNftContract.AllNfts("1")
      const newPrice=new BN(amount.toString())
      console.log(newPrice.toString());

      expect(newPrice.toString()).to.be.bignumber.greaterThan(old.toString())
    })
    
  })
  describe("check get mint nft",function(){
    it("check values",async function(){
      const [owner,account2,account3,account4,account5]=await ethers.getSigners()
      console.log(await GetNftsContract.getMyNfts(owner.address));

      
      


    })
  })
})

})
//?

})
})
})
})

//?
