// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "./interfaces/IMintNft.sol";
// import "./interfaces/ILandMintNFT.sol";

// contract GetMintNft {
//     struct Transaction {
//         string metaData;
//         address nftOwner;
//         bool didStake;
//         uint16 level;
//         uint256 stakedTime;
//         uint256 tokenId;
//         uint256 amount;
//         uint256 nftTokenId;
//     }

//     ILandMintNft collectionContract;
//     IMintNft SpaceShip;

//     constructor(address _collectionAddress, address _spaceShip) {
//         collectionContract = ILandMintNft(_collectionAddress);
//         SpaceShip = IMintNft(_spaceShip);
//     }

//     function getTransactions() public view returns (Transaction[] memory) {
//         uint256 itemCount = collectionContract._tokenIds() - 10000;
//         uint256 tokenId = collectionContract._tokenIds();
//         uint256 currentIndex;
//         Transaction[] memory items = new Transaction[](itemCount + 1);
//         for (uint256 i = 10000; i <= tokenId; i++) {
//             Transaction memory _tx = Transaction(
//                 collectionContract.getTransaction(i).metaData,
//                 collectionContract.getTransaction(i).nftOwner,
//                 collectionContract.getTransaction(i).didStake,
//                 collectionContract.getTransaction(i).level,
//                 collectionContract.getTransaction(i).stakedTime,
//                 collectionContract.getTransaction(i).tokenId,
//                 collectionContract.getTransaction(i).amount,
//                 collectionContract.getTransaction(i).nftTokenId
//             );
//             items[currentIndex] = _tx;
//             currentIndex++;
//         }
//         return items;
//     }

//     function mint() external {
//         Transaction[] memory items = getTransactions();
//         for (uint256 i = 0; i < items.length; i++) {
//             if (items[i].level == 3) {
//                 uint256 amount = SpaceShip.getNFT(1).amount;
//                 SpaceShip.mintNFT(1, amount, 0, 1, items[i].nftOwner);
//             }
//             if (items[i].level == 4) {
//                 uint256 amount = SpaceShip.getNFT(2).amount;
//                 SpaceShip.mintNFT(2, amount, 0, 2, items[i].nftOwner);
//             }
//         }
//     }

//     function chaingOwner(address _owner) external {
//         SpaceShip.changeOwner(_owner);
//     }
// }
