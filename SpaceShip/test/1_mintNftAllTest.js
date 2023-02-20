const {expect,use} = require('chai');
const { ethers } = require("hardhat");
const colors = require('colors');
// const chai = require('chai');
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
    let IncreaseAmountContract=Object;
    let GetNftsContract=Object
    let StakeContract=Object

        async function deployContracts(){
          const IncreaseAmount = await ethers.getContractFactory("IncreaseAmount");
          const increaseAmount= await IncreaseAmount.deploy();  
          await increaseAmount.deployed()
            
          const PriceFeed = await ethers.getContractFactory("priceFeed");
          const priceFeed= await PriceFeed.deploy();  
          await priceFeed.deployed()

          const BUSD = await ethers.getContractFactory("BUSD");
          const busd= await BUSD.deploy(ethers.utils.parseUnits("100","ether"));  
          await busd.deployed()

                
      
        
      
      
        
            const MintNft = await ethers.getContractFactory("MintNft");
            const mintNft= await MintNft.deploy(busd.address,priceFeed.address,increaseAmount.address);  
            await mintNft.deployed()
            const GetMintNft = await ethers.getContractFactory("GetMintNft");
            const getMintNft= await GetMintNft.deploy(mintNft.address);  
            await getMintNft.deployed()
            GetNftsContract=getMintNft

            MintNftContract=mintNft
            BUSDContract=busd
            PriceFeedContract=priceFeed
            IncreaseAmountContract=increaseAmount
            
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
                await MintNftContract.connect(owner).addNft("1","1250","100","nft_1")
                // expect(await MintNftContract.tokenId()).to.equal("1")
                expect(await MintNftContract.owner()).to.equal(owner.address)

              })
              it("nft level 1 check",async function(){
                const {level,count,amount,tokenId,metaData}= await MintNftContract.AllNfts("1")


                expect(level).to.equal(1)
                expect(count).to.equal(1250)
                expect(ethers.utils.formatUnits(amount,"ether")).to.equal("100.0")
                expect(tokenId).to.equal(1)
                expect(metaData).to.equal("nft_1")

                console.log(`         level = ${level}`.green);
                console.log(`         count = ${count}`.green);
                console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.green);
                console.log(`         tokenId = ${tokenId}`.green);
                console.log(`         metaData = ${metaData}`.green);
    
    
              })
          })
          describe("add nft level 2", async function () {
            it("nft level 2 added?",async function(){
              const [owner] = await ethers.getSigners();
              await MintNftContract.connect(owner).addNft("2","740","180","nft_2")
              // expect(await MintNftContract.tokenId()).to.equal("1")
              expect(await MintNftContract.owner()).to.equal(owner.address)

            })
            it("nft level 2 check",async function(){
              const {level,count,amount,tokenId,metaData}= await MintNftContract.AllNfts("2")


              expect(level).to.equal(2)
              expect(count).to.equal(740)
              expect(ethers.utils.formatUnits(amount,"ether")).to.equal("180.0")
              expect(tokenId).to.equal(2)
              expect(metaData).to.equal("nft_2")

              console.log(`         level = ${level}`.green);
              console.log(`         count = ${count}`.green);
              console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.green);
              console.log(`         tokenId = ${tokenId}`.green);
              console.log(`         metaData = ${metaData}`.green);
  
  
            })
        })
        describe("add nft level 3", async function () {
          it("nft level 3 added?",async function(){
            const [owner] = await ethers.getSigners();
            await MintNftContract.connect(owner).addNft("3","360","250","nft_3")
            // expect(await MintNftContract.tokenId()).to.equal("1")
            expect(await MintNftContract.owner()).to.equal(owner.address)

          })
          it("nft level 3 check",async function(){
            const {level,count,amount,tokenId,metaData}= await MintNftContract.AllNfts("3")


            expect(level).to.equal(3)
            expect(count).to.equal(360)
            expect(ethers.utils.formatUnits(amount,"ether")).to.equal("250.0")
            expect(tokenId).to.equal(3)
            expect(metaData).to.equal("nft_3")

            console.log(`         level = ${level}`.green);
          console.log(`         count = ${count}`.green);
          console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.green);
          console.log(`         tokenId = ${tokenId}`.green);
          console.log(`         metaData = ${metaData}`.green);
          })
      })
      describe("add nft level 4", async function () {
        it("nft level 4 added?",async function(){
          const [owner] = await ethers.getSigners();
          await MintNftContract.connect(owner).addNft("4","110","320","nft_4")
          expect(await MintNftContract.owner()).to.equal(owner.address)

        })
        it("nft level 4 check",async function(){
          const {level,count,amount,tokenId,metaData}= await MintNftContract.AllNfts("4")
          // const {amount}=await MintNftContract.AllNfts("1")
          

          expect(level).to.equal(4)
          expect(count).to.equal(110)
          expect(ethers.utils.formatUnits(amount,"ether")).to.equal("320.0")
          expect(tokenId).to.equal(4)
          expect(metaData).to.equal("nft_4")

          console.log(`         level = ${level}`.green);
          console.log(`         count = ${count}`.green);
          console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.green);
          console.log(`         tokenId = ${tokenId}`.green);
          console.log(`         metaData = ${metaData}`.green);
        })
    })
    describe("add nft level 5", async function () {
      it("nft level 5 added?",async function(){
        const [owner] = await ethers.getSigners();
        await MintNftContract.connect(owner).addNft("5","20","800","nft_5")
        expect(await MintNftContract.owner()).to.equal(owner.address)

      })
      it("nft level 5 check",async function(){
        const {level,count,amount,tokenId,metaData}= await MintNftContract.AllNfts("5")

        


        expect(level).to.equal(5)
        expect(count).to.equal(20)
        expect(ethers.utils.formatUnits(amount,"ether")).to.equal("800.0")
        expect(tokenId).to.equal(5)
        expect(metaData).to.equal("nft_5")

        console.log(`         level = ${level}`.green);
        console.log(`         count = ${count}`.green);
        console.log(`         amount = ${ethers.utils.formatUnits(amount,"ether").toString()}`.green);
        console.log(`         tokenId = ${tokenId}`.green);
        console.log(`         metaData = ${metaData}`.green);
      })
      
  })
})
        // )}            

describe("mint".blue,async function(){
  describe("mint for owner",function(){
    
    describe("mint multiple nft for owner",async function(){

      it("add price after transaction",async function(){
        const [owner] = await ethers.getSigners();

        let {amount}=await MintNftContract.AllNfts("1")
        amount=amount.toString()
        const PrevPrice=amount

        let howmany=new BN(10)
        let price=new BN(amount).mul(howmany).toString()
        // price.mul(10)


        // const prevAmount=amount
        await MintNftContract.connect(owner).mintNFT("1",price,"0","10",owner.address)
        
        const newPrice_=await MintNftContract.AllNfts("1")
        const newPrice=newPrice_[2].toString()
        console.log(`           old price = ${PrevPrice},new price =${newPrice}`.grey);
        expect(newPrice).to.be.bignumber.greaterThan(PrevPrice)
        expect(await MintNftContract.balanceOf(owner.address)).to.equal("10")


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
      const price=ethers.utils.parseUnits("250","ether")
      await BUSDContract.connect(account2).approve(MintNftContract.address,price.toString())
      console.log("               approved".gray);  

      await expect( MintNftContract.connect(account2).mintNFT("3",price.toString(),"1","1",account2.address),"should be revert".cyan).to.be.revertedWith("ERC20: transfer amount exceeds balance")
      console.log("               reverted".green);  
      await BUSDContract.connect(owner).mint(account2.address,price.toString())
      const balance=await BUSDContract.balanceOf(account2.address)
      console.log(`               balance = ${await balance.toString()} `.green);  

      console.log("               busd minted for account2".green);  
      console.log("               function is not going to revert now".green);  

      await MintNftContract.connect(account2).mintNFT("3",price.toString(),"1","1",account2.address)
      const newBalance=new BN(balance.toString())
      console.log(`               balance changed to = ${newBalance.toString()}`.green);
      const {count}=await MintNftContract.AllNfts("3")
      console.log(`               count changed to = ${count.toString()}`.green);

      expect(await MintNftContract.balanceOf(account2.address)).to.equal("1")
      const nftLevel2=await MintNftContract.AllNfts("2")
      const nftLevel2price=nftLevel2[2].toString()
      const nft2price=ethers.utils.parseEther("180")
      expect(nftLevel2price).to.equal(nft2price.toString())
      const nftLevel3=await MintNftContract.AllNfts("3")
      const nftLevel3price=nftLevel3[2].toString()
      const nft3price=ethers.utils.parseEther("252")
      expect(nftLevel3price).to.equal(nft3price.toString())
      console.log("             user: nft level 3 price changed by 2$ ".cyan);
      


    })
    it("mint one nft bnb payment",async function(){{
      const [owner , account2 , account3]=await ethers.getSigners()
      const price=ethers.utils.parseUnits("320","ether")
      const priceInBnb=await MintNftContract.toBnbPrice("4","1")
      const oldBalance=await ethers.provider.getBalance(account3.address)
      await MintNftContract.connect(account3).mintNFT("4",price.toString(),"2","1",account3.address,{ value: priceInBnb.toString() })
      const newBalance=new BN( (await ethers.provider.getBalance(account3.address)).toString())
      const fee=new BN(oldBalance.toString()).sub(newBalance).sub(new BN(priceInBnb.toString()))
      const exactBalance=(fee.add(newBalance)).toString()
      const {count}=await MintNftContract.AllNfts("4")
      console.log(`               count changed to = ${count.toString()}`.green);
      console.log("             user: bnb fee payed".cyan);
      expect((oldBalance.sub(exactBalance.toString()))).to.equal(priceInBnb.toString())
      const newPriceInBnb=await MintNftContract.toBnbPrice("4","1")
      console.log("             user: price in bnb change succesfully".cyan);

      expect(newPriceInBnb.toString()).to.be.bignumber.greaterThan(priceInBnb.toString())

    }})
  })
  describe("mint multiple nfts",function(){
    describe("mint multiple nft ",async function(){
      it("mint multiple nft busd payment ",async function(){
        const [owner , account2,account3,account4]=await ethers.getSigners()
        const price_= (ethers.utils.parseUnits("800","ether")).toString()
        const price=new BN(price_).mul(new BN("10"))
        await BUSDContract.connect(account4).approve(MintNftContract.address,price.toString())
        console.log("               approved".gray);  
        await expect( MintNftContract.connect(account4).mintNFT("5",price.toString(),"1","10",account4.address),"should be revert".cyan).to.be.revertedWith("ERC20: transfer amount exceeds balance")
        console.log("               reverted".green); 
        const balance=await BUSDContract.balanceOf(account4.address)

        console.log(`               balance = ${await balance.toString()} `.green);  

        await BUSDContract.connect(owner).mint(account4.address,price.toString())
  
        console.log("               busd minted for account4".green);  
        console.log("               function is not going to revert now".green);  
  
        const newBalance=new BN((await BUSDContract.balanceOf(account4.address)).toString())
        console.log(`               balance changed to = ${newBalance.toString()}`.green);

        await MintNftContract.connect(account4).mintNFT("5",price.toString(),"1","10",account4.address)
        const {count}=await MintNftContract.AllNfts("5")
      console.log(`               count changed to = ${count.toString()}`.green);
        expect(await MintNftContract.balanceOf(account4.address)).to.equal("10")

        const nftLevel5=await MintNftContract.AllNfts("5")
        const nftLevel5price=nftLevel5[2].toString()
        const nft5price=ethers.utils.parseEther("800")
        expect(nftLevel5price).to.equal(nft5price.toString())
        console.log("             user: nft level 5 price changed by 5$ ".cyan);
        
  
  
      })
      it("mint multiple nft bnb payment",async function(){{
        const [owner , account2,account3,account4,account5]=await ethers.getSigners()
        const nftLevel5=await MintNftContract.AllNfts("5")
        const nftLevel5price=nftLevel5[2].toString()
        const price_= nftLevel5price
        const price=new BN(price_).mul(new BN("10"))

        const priceInBnb=await MintNftContract.toBnbPrice("5","10")
        const bnbPrice=new BN(priceInBnb.toString())

        const oldBalance=await ethers.provider.getBalance(account5.address)
        await MintNftContract.connect(account5).mintNFT("5",price.toString(),"2","10",account5.address,{ value: bnbPrice.toString()})
        const newBalance=new BN( (await ethers.provider.getBalance(account5.address)).toString())
        const fee=new BN(oldBalance.toString()).sub(newBalance).sub(bnbPrice)
        const exactBalance=(fee.add(newBalance)).toString()
  
        console.log("             user: bnb fee payed".cyan);
        expect((oldBalance.sub(exactBalance.toString()))).to.equal(bnbPrice.toString())
        const newPriceInBnb=await MintNftContract.toBnbPrice("5","10")
        console.log("             user: price in bnb change succesfully".cyan);
        const {count}=await MintNftContract.AllNfts("5")
        console.log(`               count changed to = ${count.toString()}`.green);
        expect(newPriceInBnb.toString()).to.equal(bnbPrice.toString())
  
      }})
      it("revert cause count nft level 5",async function(){
        const [owner , account2,account3,account4,account5]=await ethers.getSigners()
        const nftLevel5=await MintNftContract.AllNfts("5")
        const nftLevel5price=nftLevel5[2].toString()
        const price_= nftLevel5price
        const price=new BN(price_).mul(new BN("1")) 
        await expect( MintNftContract.connect(account5).mintNFT("5",price.toString(),"1","1",account5.address),"should be revert".cyan).to.be.revertedWith("stock")
        console.log("               reverted".green);  
        
      })
    })
  })
})
describe("update meta data",function (){
  async function forSetMetaData(){
    for (let i = 17000; i < 20; i++) {
      // const element = array[i];
    expect( await MintNftContract.tokenURI(i.toString())).to.equal("koskesh")
    // console.log(log);
      
    }
    
    // console.log();
  }
  // it("updating ...",async function(){
  //   await MintNftContract.updateTokenURI("12000","bitch")
  //   expect( await MintNftContract.tokenURI("12000")).to.equal("bitch")
    
  // })
  it("updating all",async function(){
    await MintNftContract.updateAllTokenURI("5","koskesh")
  //  await forSetMetaData()
  const AllNfts=await GetNftsContract.getTransactions()
      // console.log(AllNfts);
  const alaki=await MintNftContract.transactions(12000)

    setTimeout(()=>{
      console.log(AllNfts);
    },5000)
    // expect( await MintNftContract.tokenURI("12000")).to.equal("koskesh")
    
  })
})
describe("lock transfer",function (){
  it("Owner Locked",async function(){
    await MintNftContract.changeTransferLock(true)
    
    const [owner , account2,account3,account4,account5]=await ethers.getSigners()
    await expect(MintNftContract.connect(account5).transferFrom(account5.address,account4.address,"17000")).to.be.revertedWith("Transfer is lock now")

  })
  it("Owner unLocked",async function(){
    await MintNftContract.changeTransferLock(false)
    const [owner , account2,account3,account4,account5]=await ethers.getSigners()
    await MintNftContract.transferFrom(owner.address,account5.address,"12000")
    const {nftOwner}=await MintNftContract.transactions("12000");
    expect(nftOwner).to.equal(account5.address)
  })
})

    })
  })
  describe("Owner",function (){
    it("changePrice to up",async function(){
      const [owner]= await ethers.getSigners()
      // const 
      let pr=await MintNftContract.AllNfts("1")
      console.log(pr[2].toString());

      await MintNftContract.changeSpaceShipPrice(true,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[2].toString());
      await MintNftContract.changeSpaceShipPrice(true,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[2].toString());
      await MintNftContract.changeSpaceShipPrice(true,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[2].toString());
      await MintNftContract.changeSpaceShipPrice(false,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[2].toString());
      await MintNftContract.changeSpaceShipPrice(false,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[2].toString());
      await MintNftContract.changeSpaceShipPrice(false,"1","10")
      pr=await MintNftContract.AllNfts("1")
      console.log(pr[2].toString());

      const oldPrice_=await MintNftContract.AllNfts("1")
      const oldPrice=oldPrice_[2].toString()
      const old=new BN(oldPrice)
      console.log(old.toString());
      
      await MintNftContract.changeSpaceShipPrice(true,"1","10")
      const {amount}=await MintNftContract.AllNfts("1")
      const newPrice=new BN(amount.toString())
      console.log(newPrice.toString());

      expect(newPrice.toString()).to.be.bignumber.greaterThan(old.toString())
    })

  })
  describe("Stake".yellow,function(){
    async function deployStakeContract(){
    const Stake = await ethers.getContractFactory("Stake");
    const stake= await Stake.deploy(MintNftContract.address);  
    await stake.deployed()


    StakeContract=stake
    }
    it("is deployed Stake?",async function(){
      const [owner]=await ethers.getSigners()
      await loadFixture(deployStakeContract)
      expect(await StakeContract.collectionAddress()).to.equal(MintNftContract.address)
  })
  describe("Do Stake",function(){
    async function unstakeAfterStake(account2,tokenId){
      setTimeout( function(account2){
        StakeContract.connect(account2.address).unStake(tokenId.toString())
      },1000*60)
    } 
    async function checkStakeAfterUnstake(tokenId){
      let stakeDetails=false
      setTimeout(async function(){
        const {didStake}=await MintNftContract.transactions(tokenId)
        // expect(didStake).to.equal(true)
        stakeDetails= didStake

      },1000*62)
      return stakeDetails
    } 
    it("stake with account 2",async function(){
      const [owner,account2]=await ethers.getSigners()
      const alki=await GetNftsContract.getMyNfts(account2.address)

      const nftId_=alki[0]
      const {tokenId}=nftId_
      await MintNftContract.setStakeAddress(StakeContract.address)
      await MintNftContract.connect(account2).approve(StakeContract.address,tokenId.toString())
      
      await StakeContract.connect(account2).stake(tokenId.toString(),0)
      
      
    })
    it("unStake",async function(){
      const [owner,account2]=await ethers.getSigners()
      const alki=await GetNftsContract.getMyNfts(account2.address)

      const nftId_=alki[0]
      const {tokenId}=nftId_
      await expect(StakeContract.connect(account2).unStake(tokenId.toString())).to.be.revertedWith("You can unstake your nft at this time")
    })
    it("unStake after stake Done",async function(){
      const [owner,account2]=await ethers.getSigners()
      const alki=await GetNftsContract.getMyNfts(account2.address)

      const nftId_=alki[0]
      const {tokenId}=nftId_
      
      await unstakeAfterStake(account2,tokenId)
    })
    it("did Stake?",async function(){
      const [owner,account2]=await ethers.getSigners()
      const alki=await GetNftsContract.getMyNfts(account2.address)

      const nftId_=alki[0]
      const {tokenId}=nftId_
      const {didStake}=await MintNftContract.transactions(tokenId)
      expect(didStake).to.equal(true)

    })
    it("check did Stake after unstake?",async function(){
      const [owner,account2]=await ethers.getSigners()
      const alki=await GetNftsContract.getMyNfts(account2.address)

      const nftId_=alki[0]
      const {tokenId}=nftId_
      const didStake=await checkStakeAfterUnstake(tokenId)
      console.log(didStake);
      
    })

  })

  })
  describe("Mint Nft".yellow,async function(){




  describe("get Nfts",function(){
    it("get my nfts",async function(){

      const AllNfts=await GetNftsContract.getTransactions()
      // console.log(AllNfts);
      const count_=await MintNftContract._tokenIds()
      const _count=new BN(count_.toString())
      const subBy=new BN("10000")
      const count=_count.sub(subBy).add(new BN("1"))
      expect(count.toString()).to.equal(AllNfts.length.toString())

    })
  })
})
  
})
