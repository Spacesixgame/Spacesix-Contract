// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IGetMintNft.sol";

contract GetMintNft {
    struct EachNFT {
        uint16 level;
        uint256 amount;
        string metaData;
        uint16 tokenId;
    }

    struct Package {
        uint8 level;
        uint256[4] counts;
        uint256[4] prices;
    }

    struct Transaction {
        string metaData;
        address nftOwner;
        uint16 level;
        uint256 count;
        uint256 amount;
        uint16 tokenId;
    }

    IGetMintNft collectionContract;

    constructor(address _collectionAddress) {
        collectionContract = IGetMintNft(_collectionAddress);
    }

    function getCountOfMyNFT(address _userAddress)
        public
        view
        returns (uint256)
    {
        uint8 len = 4;

        uint256 index = 0;
        for (uint256 i = 1; i <= len; i++) {
            if (collectionContract.balanceOf(_userAddress, i) > 0) {
                index++;
            }
        }
        return index;
    }

    function getMyNfts(address _userAddress)
        public
        view
        returns (Transaction[] memory)
    {
        uint256 count = 4;
        uint256 len = getCountOfMyNFT(_userAddress);
        Transaction[] memory items = new Transaction[](len);
        uint256 index = 0;
        for (uint256 i = 1; i <= count; i++) {
            if (collectionContract.balanceOf(_userAddress, i) > 0) {
                items[index] = Transaction(
                    collectionContract.getNFT(uint8(i)).metaData,
                    _userAddress,
                    collectionContract.getNFT(uint8(i)).level,
                    collectionContract.balanceOf(_userAddress, i),
                    collectionContract.getNFT(uint8(i)).amount,
                    collectionContract.getNFT(uint8(i)).tokenId
                );
                index++;
            }
        }
        return items;
    }

    function getNFTS() public view returns (EachNFT[] memory) {
        uint256 tokenId = collectionContract.tokenId();
        uint256 itemCount = tokenId - 1;
        uint256 currentIndex;
        EachNFT[] memory items = new EachNFT[](itemCount);
        for (uint256 i = 1; i < itemCount + 1; i++) {
            EachNFT memory nft = EachNFT(
                collectionContract.getNFT(i).level,
                collectionContract.getNFT(i).amount,
                collectionContract.getNFT(i).metaData,
                collectionContract.getNFT(i).tokenId
            );
            items[currentIndex] = nft;
            currentIndex++;
        }
        return items;
    }

    function getPackages() public view returns (Package[] memory) {
        Package[] memory details = new Package[](4);
        for (uint256 i = 1; i <= 4; i++) {
            uint256[4] memory counts;
            uint256[4] memory prices;
            for (uint256 j = 0; j < 4; j++) {
                counts[j] = collectionContract.tokenAmounts(uint8(i), j);
                prices[j] = collectionContract.tokenPrices(uint8(i), j);
            }
            details[i - 1] = Package(uint8(i), counts, prices);
        }
        return details;
    }

    function getTransactions(uint256 start, uint256 end)
        public
        view
        returns (Transaction[] memory)
    {
        uint256 currentIndex;
        Transaction[] memory items = new Transaction[](end - start + 1);
        for (uint256 j = start; j <= end; j++) {
            address nftOwner = collectionContract.getTransaction(j).nftOwner;

            if (address(0) != nftOwner) {
                Transaction memory _tx = Transaction(
                    collectionContract.getTransaction(j).metaData,
                    collectionContract.getTransaction(j).nftOwner,
                    collectionContract.getTransaction(j).level,
                    collectionContract.balanceOf(nftOwner, j),
                    collectionContract.getTransaction(j).amount,
                    collectionContract.getTransaction(j).tokenId
                );
                items[currentIndex] = _tx;
            }
            currentIndex++;
        }
        return items;
    }
}
