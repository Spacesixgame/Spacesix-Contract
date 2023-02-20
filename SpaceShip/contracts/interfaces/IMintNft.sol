//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IMintNft {
    struct EachNFT {
        uint16 level;
        uint16 count;
        uint256 amount;
        uint256 tokenId;
        string metaData;
    }

    function stake(uint256 _tokenId, uint256 _endTime) external;

    function unStake(uint256 _tokenId) external;

    function getNFT(uint256 _tokenid) external view returns (EachNFT memory);

    function mintNFT(
        uint256 _currentId,
        uint256 _amount,
        uint8 _type,
        uint8 _howMany,
        address _nftOwner
    ) external payable;

    function changeOwner(address _newOwner) external;
}
