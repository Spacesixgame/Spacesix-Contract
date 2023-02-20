const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')

const contractAddress = '0xcB9ed56dB9960aa9ea305a1A2776e7eF64aa34d3';
const mintNftAbi = require('../build/contracts/MintNft.json').abi;

const token = async () => {
    const provider = new HDWalletProvider(privateKey, 'https://bsc-dataseed1.binance.org')
    const web3 = new Web3(provider)
    const contract = new web3.eth.Contract(mintNftAbi, contractAddress);
    
    // const stakeAddress = await contract.methods.stakeAddress().call()
    // console.log(stakeAddress);
    // const getTransaction_ = await contract.methods.getTransaction(10400).call()
    // console.log(getTransaction_);
    // const ownerp = await contract.methods.owner().call()
    // console.log(ownerp);

    // const changeOwner = await contract.methods.changeOwner('0xDaeA92cc30392Bf55a5E52a632f3BB90AaDD9010').send({from : address})
    // console.log(changeOwner);

    // const setStakeAddress = await contract.methods.setStakeAddress("0xdD673e7693D57ff4360f73f28978290201Af4F76").send({from : address})
    // console.log(setStakeAddress);


    // const getNFTS = await contract.methods.getNFTS().call()
    // console.log(getNFTS);



    // const addNfts = await contract.methods
    //     .addNfts(51, 2, 1, 10, 90, [
    //         "https://ipfs.io/ipfs/QmcZYNAxzy7gCZ1TmU84L28kbqQ32Le6o9EACKinh4Sh4i",
    //         "https://ipfs.io/ipfs/QmVbDYYpGxskzskYEr1yMJy89tB2SpuGaDEk2X1FdUFYRg",
    //         "https://ipfs.io/ipfs/QmRm43SGTYkVbCEpgabz3ZkT65jMYY83eNqkQ1p2fxriFS",
    //         "https://ipfs.io/ipfs/QmZPmPYVes9g21tLCGkQm3RBhCaTVdei5BaJfZtCMYFXbh",
    //         "https://ipfs.io/ipfs/QmcK4mjgfRHNRq25mH6BDgdfujd7McCvYZYnhraGrfQDHq",
    //         "https://ipfs.io/ipfs/QmWREwXMemNGqvztEomqJ39Zb1nwUsaGEDk7mCiVNETMVa",
    //         "https://ipfs.io/ipfs/QmZAwn4fMHXyAh2pg5tRAQkK6g8FGUVsfrtxmMzzaEaLN1",
    //         "https://ipfs.io/ipfs/QmfT9Lp4dvMSFceugmmfaeQkoouo4afyS6WpTu8dYxfcXv",
    //         "https://ipfs.io/ipfs/QmUoAwQC81hTtGqFoCJ4MSRk3ZyQvvg3xnrhYDGdcgYwCi",
    //         "https://ipfs.io/ipfs/QmNZ7L7nSNudjoekJBrPBjmHuSy97yyq5K2qLHHZCXoi7B",
    //         "https://ipfs.io/ipfs/QmeUGzmBxYVg4W7bh8jgpx6D5B5fj3ERaNSjcpWL1mKQdd",
    //         "https://ipfs.io/ipfs/QmdwUMkXCAe2WhxL5z14ssxk4CxJbikt2qzxWHNn3vvRNJ",
    //         "https://ipfs.io/ipfs/QmTUW2FmL4uAMEBKK885gasyMCLwZisK1ngVf1N8UVMPSL",
    //         "https://ipfs.io/ipfs/QmanbRPw7YyTGe4vHzBXM4HKgf7yhvHPouUFNZSxkWYw39",
    //         "https://ipfs.io/ipfs/QmZ27buRHTPLHbC9rAVGCsCMSXryQASbx16ph3iTqSbQ4o",
    //         "https://ipfs.io/ipfs/QmRLQP6jUQn8fg2dennXJ1skAYv7ZZ4vMAyMTjsxjfGDbU",
    //         "https://ipfs.io/ipfs/QmaFszU5EBWxyiyxGurNX933uzp5A6vcyxHdtm8QLYbptG",
    //         "https://ipfs.io/ipfs/QmahdPCx9q9ZdU1P3tX8Zkt2zJ7WByWixfUetBstb6dCE7",
    //         "https://ipfs.io/ipfs/QmY8a5gB719DTZ5GMkW6bBsvGtvnF5xhykE214aKmfzUQN",
    //         "https://ipfs.io/ipfs/Qmc6bTsJq8WMxxVFnbuX1ghtfCcK66VLppEVr92GSb99j2",
    //         "https://ipfs.io/ipfs/QmQLURcDB8vEurpBYHf8rabZjztqrXSgAQz4Di3eQGNQGV",
    //         "https://ipfs.io/ipfs/QmPjBk3kuqHaCkzcLHL7wBAKdqWRGihNjsFCrdkf2A5pFb",
    //         "https://ipfs.io/ipfs/QmXDtjHNzvBfiR7WYJvjLzcJibxrTYfBzD6yN7cqUzSuvp",
    //         "https://ipfs.io/ipfs/QmZ2SDJsvqDQxGyVRJYgFDxyeHG2fwbRHcBNaXg1CeGLZR",
    //         "https://ipfs.io/ipfs/QmUkXPBbhgzJn8H4dZ44z3CHrBEVqwcp1mrGCc8rdBSzE7",
    //         "https://ipfs.io/ipfs/QmWJEJkjjTs4sQCEEEByU71wjYGgiwYfGE8PdyjGwtkYV8",
    //         "https://ipfs.io/ipfs/Qmf8HxAPQewNN3VbDbFnbxritV5wGjqnieKfNbsvskSUHU",
    //         "https://ipfs.io/ipfs/QmdCZ78Z5ndvFtVvJ7fUCJs2K48BXySUm8gHoLKTp2FSgw",
    //         "https://ipfs.io/ipfs/QmeHUrzDpa42apm8Pby8Yt4gzV9xNxdneHRbcGoepn159B",
    //         "https://ipfs.io/ipfs/QmYpm7mC4rXkqxPawd5nSdZw9tAngv8UuuMYyvB34sJqKe",
    //         "https://ipfs.io/ipfs/QmR8WyMPxMQez9dV6Q4Wds6oXVD15dpe9SvBNyKFEaqAC2",
    //         "https://ipfs.io/ipfs/QmRUEyR72GgsA2327igpJb91qj14hJdN1FeSxBZtm1eFX6",
    //         "https://ipfs.io/ipfs/QmYtoj8Pfx5hqjGAgoDaEMT3pDEqHsrKrGf5ZMsrjsK71c",
    //         "https://ipfs.io/ipfs/Qme4nJXD2R3VStN6BurCLcFaBzngajXiC5cp3mYecYWyWr",
    //         "https://ipfs.io/ipfs/QmYUV1pnq4KGsF7n2ayEymhMekA9x1UocKSccfNoRQaDhy",
    //         "https://ipfs.io/ipfs/QmZYCx98FEmJMvCDvV38sLJhRmB7Y389s8LbDtAEYfzbMM",
    //         "https://ipfs.io/ipfs/QmWveJieDr8e3LQwkfcL19gvnwC7nV1DwfpmFHWXPWyQYg",
    //         "https://ipfs.io/ipfs/QmSS5EPCPAjHrKDK2JPpqry3qp162ixqFnfeMTSgrso2LE",
    //         "https://ipfs.io/ipfs/QmcZjqju2i2L1senLeB5dBW8B1E4hrGSanZUqxiS8kN7c1",
    //         "https://ipfs.io/ipfs/QmU4eYxa1DJpvPYxu3M6XjT7vRCNtzjAnMsVwCHRPoVb8G",
    //         "https://ipfs.io/ipfs/QmW5qbpoQR3etJCDsoU4LrgPQXPFU8zMgtnAxkkNhFrDST",
    //         "https://ipfs.io/ipfs/QmNRwArrJeetfpQAfMCFUVNWQQbuUXmL8RDuMPFZ35kwxt",
    //         "https://ipfs.io/ipfs/QmSpY7ai8YRT48LGTBMsx34KExYvJ1SBQyVZ9iEnCMh9op",
    //         "https://ipfs.io/ipfs/Qmeo6JzuwLSufPmiqS5m9dnDv6rCLYj1tcbF3G8MQ2ABKY",
    //         "https://ipfs.io/ipfs/QmNbqSfVtuufXdYyYVxsPePnDMo9ZALAm4dDLbn2y1oqfH",
    //         "https://ipfs.io/ipfs/QmQDaWewj8bGybD3RP8WqZC5waZ6rRaWgP9ihXC5uSXypx",
    //         "https://ipfs.io/ipfs/QmaPn8QcVfRU5huGdxNQTNZxGjCX3dzqmqFmrVXxvh4RdK",
    //         "https://ipfs.io/ipfs/QmRYfZ3DryGXvUpFG1wQSUTXcRXDQoBCEbji4t5jM5sxrd",
    //         "https://ipfs.io/ipfs/QmeSYQPeAndJLnu4fBoTRniw4Qkf4o52Va5QMMVFRoPHQr",
    //         "https://ipfs.io/ipfs/QmZpFaqGePRAMPm5KFetZfcRTsjbR17YggtdawMD3RC5W6",
    //         "https://ipfs.io/ipfs/QmPde6rvWyadzgH6aQa2HCBc7ubiqWfVyrk11wASeZzTaC"
    //     ])
    //     .send({ from: address })
    // console.log(addNfts);


    // const addNfts = await contract.methods
    // .addNfts(38, 5, 2, 10, 205, [
    //     "https://ipfs.io/ipfs/QmWteqjnFHQePtgVcGw2hfSZSB1ebU35Apwhzi9NqyL63a",
    //     "https://ipfs.io/ipfs/QmYjD3697ormPvb5Nxmnutuuje74aJF3iHXjz1tq4j1Hqa",
    //     "https://ipfs.io/ipfs/QmXQXb1PwNhryrqHCuSKejyy6iw6rrbXrJU57BhWjCwwDD",
    //     "https://ipfs.io/ipfs/QmcHhjBTxQU6eS7nbnA8v824sSmwnyYodozyzKgLg7m3Ps",
    //     "https://ipfs.io/ipfs/QmPCzrZCmzKzeWtdjNGJk9eoBVv4mR9arCpSkrmFUDUZwE",
    //     "https://ipfs.io/ipfs/Qma5Bnbx4qxEk6Nhk7JjarAWot5Z44pQLgkgY5tvQKc8HP",
    //     "https://ipfs.io/ipfs/Qmb1TX4XahjWutuCbzkiesMeg92MCKenzDzBDdGjAv9w8a",
    //     "https://ipfs.io/ipfs/QmZonZEzSa6MixEEwzkVT6MKkGumi7ucvgEbC9YM6L5MgQ",
    //     "https://ipfs.io/ipfs/QmPA6gQs1U1jfLTqFHW7LhtvL2CyqEAqyeercEQjr61zhq",
    //     "https://ipfs.io/ipfs/Qmc3QhRytbaomYghJVFaL86YvbRD4zjE8h2xQ6uL9HrFx2",
    //     "https://ipfs.io/ipfs/QmQaFpcuCdNdhgiSTUxUMQ5uQRZppA8LGGKRHxNqt1apKh",
    //     "https://ipfs.io/ipfs/Qmdv2bn6NKnmNCp29phRq2hYzpaaMRf5Cvv88u5uhjt5vA",
    //     "https://ipfs.io/ipfs/Qmef9bFLEupdox9C2rG2H3hSZwj779kdGtv1jxM3T3hBpX",
    //     "https://ipfs.io/ipfs/QmQGbHN7rvYswWfE1Vd5chAf7f1cy9kokhPdWcixoBnUWv",
    //     "https://ipfs.io/ipfs/QmY2Avcg9R32f2aL28AFKsEgkS23AKRpN8kwgs1n4cdnoL",
    //     "https://ipfs.io/ipfs/QmWQQFGjhtK4D1VQ5YH3zYnpQ18rEMbEpww2J35Y4tPyRm",
    //     "https://ipfs.io/ipfs/QmTNXw5sQXe94V1Yigp62A7LuNH6KskW2Cwcnp44JFbURy",
    //     "https://ipfs.io/ipfs/Qme6Bu7kLUdPVzbqVsy82mTjNCapuxoAAxYwwHhEtA7pWu",
    //     "https://ipfs.io/ipfs/QmXE2UrBUC7wTBk3QNAgLtZrPvBAW3sUyfy2LHZZCwoopM",
    //     "https://ipfs.io/ipfs/QmaBAzA1cnbyZPJ6jE5L8rUm9zHz4R3AwKua3DW1GtDvEH",
    //     "https://ipfs.io/ipfs/QmNU426ACUiFZSPiSF3QmDCXrNcaf6EZ4rQTSALfoBx6AR",
    //     "https://ipfs.io/ipfs/QmT3VEKSFZaWQ9HbdbQDBZ6MXs8ScB3ViXSX29BJygzMgs",
    //     "https://ipfs.io/ipfs/Qmd8bNR2gfHJCaVVNAw9wxUQBsZRAzTCUafgfxoXxspQ3Y",
    //     "https://ipfs.io/ipfs/QmZzA1f99smgerXmDUvvZGnRCWKZV5X5WEZn7Y98a1dRkx",
    //     "https://ipfs.io/ipfs/Qmd6gy6keWjvpZKcn9eAjmqNAyCFiEbAHgMgje88aMqRyL",
    //     "https://ipfs.io/ipfs/QmXrRaASGA6tt8fozcr4nqoGCZYtZf1c2Vr2bATSUYsXPg",
    //     "https://ipfs.io/ipfs/QmUV8X1NSzg9mM6zn7ytJow6VjdnjoFj9PMuqXZr2aTnSk",
    //     "https://ipfs.io/ipfs/QmeBnwBiYbqfsZF5YntJ5DotFxqRbLkb9rrFbFWKvBWW7P",
    //     "https://ipfs.io/ipfs/Qme2TqMKjF97LEBHJN655cxDT9DDpGtQApHJfuA16LSCts",
    //     "https://ipfs.io/ipfs/Qmaa8WtjtTC9nCY376oKhS3Pi1ip8PMrTiXKo28Yx944Eg",
    //     "https://ipfs.io/ipfs/QmT2pdLL12NGzfc35FqR9koAcXiaFzYnvvF7RPAahxY8Yo",
    //     "https://ipfs.io/ipfs/Qma2x6N35FkUqLVjrTvZAgtUufHeokyjSZdpwEBP5aHWmJ",
    //     "https://ipfs.io/ipfs/QmfGwK2QMriHBMgwW2Ag4wsiNQ4FkEgck1NDYwr977E5Vk",
    //     "https://ipfs.io/ipfs/Qmeck8XEpwR88RWHpYFvAbaKkLseNz8a7amyrpRGP9wRQd",
    //     "https://ipfs.io/ipfs/Qmf69bRHo5tMicyv5oesobC4m1krAPYq4bW2VTpjRaoEJy",
    //     "https://ipfs.io/ipfs/QmTXGgvcdYaJkct8kPzDNB9QrxDNNwuWJJVDNGQdui4kMK",
    //     "https://ipfs.io/ipfs/QmSBsZ7Zs66RgbfaCLD7YjTy6WxZqXQDAu11SnwcY8HGZf",
    //     "https://ipfs.io/ipfs/QmVvtch749PN1iX4oLuSPtTREvyPh8j4UzKWwkVW8Gtrsx"
    // ])
    //     .send({ from: address })
    // console.log(addNfts);



    // const addNfts = await contract.methods
    //     .addNfts(25, 12, 3, 10, 412, [
    //         "https://ipfs.io/ipfs/QmXFsrKAGka6GezPiUJEn8JxctbYthNxLDjcvYzRjEJ6La",
    //         "https://ipfs.io/ipfs/QmPKm9LQ53L1dCVrceEUqTdxgjswAAS5fMpYAnmFJQYgVs",
    //         "https://ipfs.io/ipfs/QmeWY2P2CUfZygzqVgo9TMxsVyHvjU5saWyDym4Ts1Fnjx",
    //         "https://ipfs.io/ipfs/QmYfZ5XtKFYbSqnKuNUr6TJuxkKWnW1ZWs3XfGB2Qy3Vzt",
    //         "https://ipfs.io/ipfs/QmRu3QhgMXqRNiBFHdagbjtUPcatED5Rv56v9c663BwTvL",
    //         "https://ipfs.io/ipfs/QmVaD8xeRvgewYD9G8zb5HUuQE5wYxjpyFNPyrkrmSdCCT",
    //         "https://ipfs.io/ipfs/QmNwZ4shcA5bZiMJroZVACdaM7TeYjtsEDMLxDgt4qer2k",
    //         "https://ipfs.io/ipfs/QmPfjhmTctZp6ehVpyCoXULAMc4FG38i6rYCHppyquL4Yh",
    //         "https://ipfs.io/ipfs/QmYBSHKgm4Zr2Uc4NwrKPiW8kSM58JWKFXqq86LGW217jm",
    //         "https://ipfs.io/ipfs/QmPHp8XwqoRgTpnnAYxn7N4WcDpXv5WPNfGPnEX3HGdkJQ",
    //         "https://ipfs.io/ipfs/QmRNH8nbCBbTKbHjEDDLDqVYsuzcSMZcZLcAxrknnRruH6",
    //         "https://ipfs.io/ipfs/QmeYmNaG4nSMUPr2yTDhyF77eiAcdj5UNCdaPqPHtQLiQc",
    //         "https://ipfs.io/ipfs/QmNLoVQgEP4mynnJWyteSq44tfY3dLNMFShXGd5TUssN5N",
    //         "https://ipfs.io/ipfs/QmdXT4AmSjnsijo3XfCpYqXFXVhpsVRrfsAfwUi7hqU1sp",
    //         "https://ipfs.io/ipfs/QmdphkpU3uUYwu6pXd13JVzrpYh2eiY4WRVQ5gh45wZRF3",
    //         "https://ipfs.io/ipfs/QmeKbW39SdWjXRirVaBQB26V7eoLE4kUKQomSGwEB9nr8s",
    //         "https://ipfs.io/ipfs/QmYYaN3rtvDiUSm4wijNesMcdnixtGtam2ebTLcgu5wc6s",
    //         "https://ipfs.io/ipfs/QmcAqynBq49kcLXfL72548uHot54qK62k1bdVUMCVu3EHy",
    //         "https://ipfs.io/ipfs/QmWLBDQSREBTaiDtEBgZ8Wv24Nhustnwxa71AJcw65AC4d",
    //         "https://ipfs.io/ipfs/QmaiEMhyj8XVoF8FfpBVejsiZTwyD1MAft7Hwrmb8jFRCV",
    //         "https://ipfs.io/ipfs/Qme6YxKkxGmFVYQm85NhWpNhh5PqmQWgV2d62oTQxfKghV",
    //         "https://ipfs.io/ipfs/QmNXkPUySaAAfUq8UwmxyhyeZcKtzBDkSc6ffApyETKURw",
    //         "https://ipfs.io/ipfs/QmS22m3MoPuERi975efQXYSqsSrd1QjgTHCyZBVCmLbDjP",
    //         "https://ipfs.io/ipfs/QmfTNrpnzTtrrQKE4L7qCtgCULhqK8WM7CrWH2LQ2nukPE",
    //         "https://ipfs.io/ipfs/QmSvM2Cy5FwrE1RLznyjmvQAcF4tHJDKr2fdqgPWmq4B6H"
    //     ])
    //     .send({ from: address })
    // console.log(addNfts);


    // const addNfts = await contract.methods
    //     .addNfts(11, 70, 4, 10, 800, [
    //         "https://ipfs.io/ipfs/QmdhDZZLtm1q6nMmut39C9Xc25yEk1a4m131iPcieYLBaR",
    //         "https://ipfs.io/ipfs/QmPx24mqWzcwzGjzRY12Ki5kPrsMZ7XjcHRvNhPzjYN5jj",
    //         "https://ipfs.io/ipfs/QmeVY8xFMQNtbp6aiJqgTUjCYzQpaQvyyV2gB1M2sgUF2f",
    //         "https://ipfs.io/ipfs/QmQnPXKN4s4C1agDfmJpikYfA4pbZXyL8oXAgAqrWzdU5i",
    //         "https://ipfs.io/ipfs/QmVtZpu6NBtuLwQjF55GhAngmhPSqTiuzkzBGm3mLVoYkX",
    //         "https://ipfs.io/ipfs/QmSjzm3ijQj2Xkg2e3aZJbe7sKMNa7pMmJFooo9wFc1n9R",
    //         "https://ipfs.io/ipfs/QmUAomzsz8ZvcZfzT8V57yJYLeExgtW4WLGmgeLkvxkeJ5",
    //         "https://ipfs.io/ipfs/QmSdSTwCydjJyEfDLQikC6JG5KCqztkxJiG7aeoxmiHCvo",
    //         "https://ipfs.io/ipfs/QmbX1asJM3ZonWEPAFe5yGN8MoYuQoWpnA1U251ri3wWkD",
    //         "https://ipfs.io/ipfs/QmVcsEziH1fsQsqzxbj9gXi9hs5D5FEEgTVXkWwFTrbmcx",
    //         "https://ipfs.io/ipfs/QmTHm9pix4Bg32ex1FPqB11em9uqz4BEmYYk8g8z4hvBNe"
    //     ])
    //     .send({ from: address })
    // console.log(addNfts);



}
