// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./interfaces/IPriceFeed.sol";
import "./interfaces/IGetMintNft.sol";

contract MintNft is ERC1155URIStorage, ReentrancyGuard {
    using SafeERC20 for IERC20;
    address public BUSD;
    address public ChainLinkPriceFeed;
    uint256 public TxID;

    constructor(address busd, address priceFeed) ERC1155("") {
        owner = msg.sender;
        BUSD = busd;
        ChainLinkPriceFeed = priceFeed;
    }

    function mintNFT(
        uint8 _tokenId,
        uint256 _amount,
        uint8 _type,
        uint8 _howMany,
        address _nftOwner
    ) external payable nonReentrant returns (bool) {
        require(_tokenId <= tokenID, "amount");
        uint8 tokenId = _tokenId;
        uint256 amount = _amount;
        uint8 howMany = _howMany;
        uint8 s_type = _type;
        address nftOwner = _nftOwner;
        string memory metaData = AllNfts[tokenId].metaData;
        uint8 level = AllNfts[tokenId].level;
        uint8 nftPart = AllNfts[tokenId].nftPart;
        uint256 finalAmount = AllNfts[tokenId].amount * howMany;

        require(amount == finalAmount, "amount");
        require(howMany > 0, "count 0");

        if (s_type == 0) {
            require(msg.sender == owner, "onlyOwner");
        } else if (s_type == 1) {
            SafeERC20.safeTransferFrom(
                IERC20(BUSD),
                msg.sender,
                owner,
                finalAmount
            );
            nftOwner = msg.sender;
        } else {
            address ownerAddress = payable(owner);
            uint256 bnbPrice = toBnbPrice(tokenId, howMany);
            require(msg.value >= bnbPrice, "this is not nft price");
            (bool sent, ) = ownerAddress.call{value: msg.value}("");
            require(sent, "Failed to send Ether");
            nftOwner = msg.sender;
        }
        _mint(nftOwner, tokenId, _howMany, "");
        TxID++;

        Transaction memory newTransaction = Transaction(
            metaData,
            nftOwner,
            level,
            nftPart,
            _howMany,
            finalAmount
        );

        transactions[TxID] = newTransaction;
        return true;
    }

    function toBnbPrice(uint8 _tokenID, uint32 _howMany)
        public
        view
        returns (uint256)
    {
        uint256 bnb = uint256(IPriceFeed(ChainLinkPriceFeed).getLatestPrice());
        uint256 nftPrice = AllNfts[_tokenID].amount * 10**18;
        nftPrice = nftPrice * _howMany;
        bnb = bnb * 10**10;
        nftPrice = nftPrice / bnb;
        nftPrice = nftPrice / 10**15;
        nftPrice = nftPrice * 10**15;
        return nftPrice;
    }

    function updateAllTokenURI(uint8 _tokenID, string memory _tokenURI)
        external
        onlyOwner
    {
        _setURI(_tokenID, _tokenURI);
        AllNfts[_tokenID].metaData = _tokenURI;
        for (uint256 i = 1; i <= TxID; i++) {
            if (transactions[i].tokenId == _tokenID) {
                transactions[i].metaData = _tokenURI;
            }
        }
    }

    function setTokenURI(uint8 _tokenID, string memory _tokenURI)
        external
        onlyOwner
    {
        _setURI(_tokenID, _tokenURI);
    }

    function changeTransferLock(bool _change) external onlyOwner {
        _transferLock = _change;
    }

    function getNFT(uint8 _tokenId) public view returns (EachNFT memory) {
        return AllNfts[_tokenId];
    }

    function getTransaction(uint256 _tokenid)
        external
        view
        returns (Transaction memory)
    {
        return transactions[_tokenid];
    }
}
