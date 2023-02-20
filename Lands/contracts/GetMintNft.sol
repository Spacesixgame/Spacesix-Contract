// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IGetMintNft.sol";

contract GetMintNft {

    struct EachNFT {
        uint16 level;
        uint16 count;
        uint256 amount;
        uint256 tokenId;
        string metaData;
    }

    struct Transaction {
        string metaData;
        address nftOwner;
        bool didStake;
        uint16 level;
        uint256 stakedTime;
        uint256 tokenId;
        uint256 amount;
        uint256 nftTokenId;
    }

    IGetMintNft collectionContract;

    constructor(address _collectionAddress) {
        collectionContract = IGetMintNft(_collectionAddress);
    }


    function getNFTS() public view returns(EachNFT[] memory) {
        uint256 tokenId = collectionContract.tokenId();
        uint256 itemCount = tokenId - 1;
        uint256 currentIndex;
        EachNFT[] memory items = new EachNFT[](itemCount);
        for (uint256 i = 1; i < itemCount + 1; i++) {
            EachNFT memory nft = EachNFT(
                collectionContract.getNFT(i).level,
                collectionContract.getNFT(i).count,
                collectionContract.getNFT(i).amount,
                collectionContract.getNFT(i).tokenId,
                collectionContract.getNFT(i).metaData
            );
            items[currentIndex] = nft;
            currentIndex++;
        }
        return items;
    }

    function getTransactions() public view returns(Transaction[] memory) {
        uint256 itemCount = collectionContract._tokenIds() - 10000; 
        uint256 tokenId = collectionContract._tokenIds();
        uint256 currentIndex;
        Transaction[] memory items = new Transaction[](itemCount + 1);
        for (uint256 i = 10000; i <= tokenId ; i++) {
            Transaction memory _tx = Transaction(
                collectionContract.getTransaction(i).metaData,
                collectionContract.getTransaction(i).nftOwner,
                collectionContract.getTransaction(i).didStake,
                collectionContract.getTransaction(i).level,
                collectionContract.getTransaction(i).stakedTime,
                collectionContract.getTransaction(i).tokenId,
                collectionContract.getTransaction(i).amount,
                collectionContract.getTransaction(i).nftTokenId
            );
            items[currentIndex] = _tx;
            currentIndex++;
        }
        return items;
    }


    function getMyNfts(address _userAddress) public view returns(Transaction[] memory) {
        uint256 itemCount = collectionContract._tokenIds();
        uint256 myNftsCount;
        uint256 currentIndex;
        for (uint256 i = 10000; i <= itemCount  ; i++) {
            address nftOwner = collectionContract.getTransaction(i).nftOwner;
            if (_userAddress == nftOwner) {
                myNftsCount++;
            }
        }
        Transaction[] memory items = new Transaction[](myNftsCount);
        for (uint256 i = 10000; i <= itemCount ; i++) {
            address nftOwner = collectionContract.getTransaction(i).nftOwner;
            if (_userAddress == nftOwner) {
                Transaction memory _tx = Transaction(
                    collectionContract.getTransaction(i).metaData,
                    collectionContract.getTransaction(i).nftOwner,
                    collectionContract.getTransaction(i).didStake,
                    collectionContract.getTransaction(i).level,
                    collectionContract.getTransaction(i).stakedTime,
                    collectionContract.getTransaction(i).tokenId,
                    collectionContract.getTransaction(i).amount,
                    collectionContract.getTransaction(i).nftTokenId
                );
                items[currentIndex] = _tx;
                currentIndex++;
            }
        }
        return items;
    }
    
    
}
