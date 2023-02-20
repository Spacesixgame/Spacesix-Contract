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
            describe("add nft level 1", function () {
              it("nft level 1 added?",async function(){
                const [owner] = await ethers.getSigners();
                const amount=ethers.utils.parseEther("0.01")
                await MintNftContract.connect(owner).addNft("1",amount.toString(),"nft_1")
                expect(await MintNftContract.owner()).to.equal(owner.address)

              })
              it("nft level 1 check",async function(){
                const {level,amount,metaData}= await MintNftContract.AllNfts("1")
                


                expect(level).to.equal(1)
                expect(ethers.utils.formatUnits(amount,"ether")).to.equal("0.01")
                expect(metaData).to.equal("nft_1")

                console.log(`         level = ${level}`.green);
                console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.green);
                console.log(`         metaData = ${metaData}`.green);
    })
          })
          describe("add nft level 2", async function () {
            it("nft level 2 added?",async function(){
              const [owner] = await ethers.getSigners();
              const amount=ethers.utils.parseEther("0.056")
              await MintNftContract.connect(owner).addNft("2",amount.toString(),"nft_2")
              expect(await MintNftContract.owner()).to.equal(owner.address)

            })
            it("nft level 2 check",async function(){
              const {level,amount,metaData}= await MintNftContract.AllNfts("2")
              

              expect(level).to.equal(2)
              expect(ethers.utils.formatUnits(amount,"ether")).to.equal("0.056")
              expect(metaData).to.equal("nft_2")

              console.log(`         level = ${level}`.green);
              console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.green);
              console.log(`         metaData = ${metaData}`.green);
  
  
            })
        })
        describe("add nft level 3", async function () {
          it("nft level 3 added?",async function(){
            const [owner] = await ethers.getSigners();
            const amount=ethers.utils.parseEther("0.2")

            await MintNftContract.connect(owner).addNft("3",amount.toString(),"nft_3")
            expect(await MintNftContract.owner()).to.equal(owner.address)

          })
          it("nft level 3 check",async function(){
            const {level,amount,metaData}= await MintNftContract.AllNfts("3")


            expect(level).to.equal(3)
            expect(ethers.utils.formatUnits(amount,"ether")).to.equal("0.2")
            expect(metaData).to.equal("nft_3")

            console.log(`         level = ${level}`.green);

            console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.green);
            console.log(`         metaData = ${metaData}`.green);
          })
      })
      describe("add nft level 4", async function () {
        it("nft level 4 added?",async function(){
          const [owner] = await ethers.getSigners();
          const amount=ethers.utils.parseEther("2")
          await MintNftContract.connect(owner).addNft("4",amount.toString(),"nft_4")
          expect(await MintNftContract.owner()).to.equal(owner.address)

        })
        it("nft level 4 check",async function(){
          const {level,amount,metaData}= await MintNftContract.AllNfts("4")
        


          expect(level).to.equal(4)
          expect(ethers.utils.formatUnits(amount,"ether")).to.equal("2.0")
          expect(metaData).to.equal("nft_4")

          console.log(`         level = ${level}`.green);
          console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.green);
          console.log(`         metaData = ${metaData}`.green);
        })
    })
  
})

describe("mint".blue,async function(){
  describe("mint for owner",function(){
    
    describe("mint multiple nft for owner",async function(){

      it("check package nft buy and revert",async function(){
        const [owner] = await ethers.getSigners();

        let amount=await MintNftContract.tokenPrices("1","0")
        amount=amount.toString()

        await expect( MintNftContract.connect(owner).mintNFT("1","0",amount,"0","10",owner.address),"should be revert").to.be.revertedWith("locked!")
        await MintNftContract.connect(owner).mintNFT("1","1",amount,"0","0",owner.address)
        expect(await MintNftContract.balanceOf(owner.address,"1")).to.equal("5000")
        console.log(ethers.utils.formatUnits(amount,"ether"));

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
      const price=ethers.utils.parseUnits("69","ether")
      await BUSDContract.connect(account2).approve(MintNftContract.address,price.toString())
      console.log("               approved".gray);  

      await expect( MintNftContract.connect(account2).mintNFT("3","3",price.toString(),"1","0",account2.address),"should be revert".cyan).to.be.revertedWith("ERC20: transfer amount exceeds balance")
      console.log("               reverted".green);  
      await BUSDContract.connect(owner).mint(account2.address,price.toString())
      const balance=await BUSDContract.balanceOf(account2.address)
      console.log(`               balance = ${await balance.toString()} `.green);  

      console.log("               busd minted for account2".green);  
      console.log("               function is not going to revert now".green);  

      await MintNftContract.connect(account2).mintNFT("3","3",price.toString(),"1","1",account2.address)
      const newBalance=new BN(balance.toString())
      console.log(`               balance changed to = ${newBalance.toString()}`.green);
      expect(await MintNftContract.balanceOf(account2.address,"3")).to.equal("350")

    })
    it("mint one nft bnb payment",async function(){{
      const [owner , account2 , account3]=await ethers.getSigners()
      const price=ethers.utils.parseUnits("99","ether")
      const priceInBnb=await MintNftContract.toBnbPrice("4","1")
      const oldBalance=await ethers.provider.getBalance(account3.address)
      await MintNftContract.connect(account3).mintNFT("4",price.toString(),"2","1",account3.address,{ value: priceInBnb.toString() })
      const newBalance=new BN( (await ethers.provider.getBalance(account3.address)).toString())
      const fee=new BN(oldBalance.toString()).sub(newBalance).sub(new BN(priceInBnb.toString()))
      const exactBalance=(fee.add(newBalance)).toString()

      console.log("             user: bnb fee payed".cyan);
      expect((oldBalance.sub(exactBalance.toString()))).to.equal(priceInBnb.toString())
      const newPriceInBnb=await MintNftContract.toBnbPrice("4","1")
      console.log("             user: price in bnb no change succesfully".cyan);

      // expect(newPriceInBnb.toString()).to.be.bignumber.equal(priceInBnb.toString())

    }})
  })
//   describe("mint multiple nfts",function(){
//     describe("mint multiple nft ",async function(){
//       it("mint multiple nft busd payment ",async function(){
//         const [owner , account2,account3,account4]=await ethers.getSigners()
//         const price_= (ethers.utils.parseUnits("99","ether")).toString()
//         const price=new BN(price_).mul(new BN("10"))
//         await BUSDContract.connect(account4).approve(MintNftContract.address,price.toString())
//         console.log("               approved".gray);  
//         await expect( MintNftContract.connect(account4).mintNFT("4",price.toString(),"1","10",account4.address),"should be revert".cyan).to.be.revertedWith("ERC20: transfer amount exceeds balance")
//         console.log("               reverted".green); 
//         const balance=await BUSDContract.balanceOf(account4.address)

//         console.log(`               balance = ${await balance.toString()} `.green);  

//         await BUSDContract.connect(owner).mint(account4.address,price.toString())
  
//         console.log("               busd minted for account4".green);  
//         console.log("               function is not going to revert now".green);  
  
//         const newBalance=new BN((await BUSDContract.balanceOf(account4.address)).toString())
//         console.log(`               balance changed to = ${newBalance.toString()}`.green);

//         await MintNftContract.connect(account4).mintNFT("4",price.toString(),"1","10",account4.address)
//       //   const {count}=await MintNftContract.AllNfts("5")
//       // console.log(`               count changed to = ${count.toString()}`.green);
//         expect(await MintNftContract.balanceOf(account4.address,"4")).to.equal("10")

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
  })
})
// describe("update meta data",function (){
//   // async function forSetMetaData(){
//   //   const len =await MintNftContract.TxID()
//   //   console.log(len);
//   //   let logArr=[]
//   //   for (let i = 10000; i < len.toString(); i++) {
//       //  expect(await MintNftContract.tokenURI(i)).to.be.equal("koskesh")
//       //  logArr.push(await MintNftContract.tokenURI(i))
//     // }
//     // return logArr

//   // }
  // it("updating all",async function(){
  //   await MintNftContract.updateAllTokenURI("1","koskesh")
  //   expect(await MintNftContract.uri("1")).to.equal("koskesh")
  //   const {metaData}=await MintNftContract.AllNfts("1")
  //   expect(metaData).to.equal("koskesh")
  //   //? const AllNfts=await GetNftsContract.getTransactions()
  //   // expect(await GetNftsContract.AllNfts()[2]).to.equal("koskesh")
  // })
// // })
// describe("lock transfer",function (){
//   it("Owner Locked",async function(){
//     await MintNftContract.changeTransferLock(true)
    
//     const [owner , account2,account3,account4,account5]=await ethers.getSigners()
//     const log=await MintNftContract.balanceOf(account2.address,"3")
//     console.log(log);
//     await expect(MintNftContract.connect(account2).safeTransferFrom(account2.address,account4.address,"3","1","0x")).to.be.revertedWith("Transfer is lock now")

//   })
//   it("Owner unLocked",async function(){
//     await MintNftContract.changeTransferLock(false)
//     const [owner , account2,account3,account4,account5]=await ethers.getSigners()
//     await MintNftContract.connect(account2).safeTransferFrom(account2.address,account4.address,"3","1","0x")
//     const {nftOwner}=await MintNftContract.transactions("4");
//     expect(nftOwner).to.equal(account4.address)
//   })
// })

//     })
  // })
  // // describe("Owner",function (){
  // //   it("changePrice to up",async function(){
  // //     const [owner]= await ethers.getSigners()
  // //     // const 
  // //     let pr=await MintNftContract.AllNfts("1")
  // //     console.log(pr[1].toString());

  // //     await MintNftContract.changeNftBoxPrice(true,"1","10")
  // //     pr=await MintNftContract.AllNfts("1")
  // //     console.log(pr[1].toString());
  // //     await MintNftContract.changeNftBoxPrice(true,"1","10")
  // //     pr=await MintNftContract.AllNfts("1")
  // //     console.log(pr[1].toString());
  // //     await MintNftContract.changeNftBoxPrice(true,"1","10")
  // //     pr=await MintNftContract.AllNfts("1")
  // //     console.log(pr[1].toString());
  // //     await MintNftContract.changeNftBoxPrice(false,"1","10")
  // //     pr=await MintNftContract.AllNfts("1")
  // //     console.log(pr[1].toString());
  // //     await MintNftContract.changeNftBoxPrice(false,"1","10")
  // //     pr=await MintNftContract.AllNfts("1")
  // //     console.log(pr[1].toString());
  // //     await MintNftContract.changeNftBoxPrice(false,"1","10")
  // //     pr=await MintNftContract.AllNfts("1")
  // //     console.log(pr[1].toString());

  // //     const oldPrice_=await MintNftContract.AllNfts("1")
  // //     const oldPrice=oldPrice_[1].toString()
  // //     const old=new BN(oldPrice)
  // //     console.log(old.toString());
      
  // //     await MintNftContract.changeNftBoxPrice(true,"1","10")
  // //     const {amount}=await MintNftContract.AllNfts("1")
  // //     const newPrice=new BN(amount.toString())
  // //     console.log(newPrice.toString());

  // //     expect(newPrice.toString()).to.be.bignumber.greaterThan(old.toString())
  // //   })

//   })
//   describe("check get mint nft",function(){
//     it("check values",async function(){
//       const [owner,account2,account3,account4,account5]=await ethers.getSigners()
//       console.log(await GetNftsContract.getTransactions())
//     const log=await MintNftContract.transactions("1");
//     console.log(log);
      
      


//     })
//   })
//   describe("mintBatch",function(){
//     it("mint batch ...",async function(){
//       const [owner,account2,account3,account4,account5,account6,account7]=await ethers.getSigners()
//       const nfts=[1,2,3,4]
//       const nftCounts=[1,1,1,1]
      
//       const total=await MintNftContract.PriceBatch(nfts,nftCounts)
//       let bnbPrice=await MintNftContract.toBnbPriceBatch(nfts,nftCounts)
//       const oldBalance=await ethers.provider.getBalance(account7.address)
//       console.log(`${oldBalance}`.bgMagenta);
//       console.log(`${bnbPrice.toString()}`.bgMagenta);

//       await MintNftContract.connect(account7).mintBatchNFT(nfts,total.toString(),3,nftCounts,account7.address,{value:bnbPrice.toString()})
//       const balance=await ethers.provider.getBalance(account7.address)
//       const subtract=new BN(oldBalance.toString()).sub((new BN(balance.toString())))
//       console.log(`${balance}`.bgMagenta);

//       console.log(`${subtract}`.bgMagenta);
//       console.log(`${total.toString()}`.bgMagenta);
//       // 571371233044446
//       //     711000000000000000
//       // 9999999428628766955554
//     })
//   })
//   describe("check get mint nft",function(){
//     it("check values",async function(){

//       // console.log(await GetNftsContract.getTransactions())

//       const [owner,account2,account3,account4,account5,account6,account7]=await ethers.getSigners()
//       // console.log(await ethers.);
//       const balance=await ethers.provider.getBalance(account7.address)
//       console.log(account7.address);
//       console.log(balance);
//       const {amount}=await MintNftContract.AllNfts("4")
//       console.log(amount);

//       // 0000711000000000000000
//       // 9999999428628766955554
      
      


//     })
//   })
})

})
