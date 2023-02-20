// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./IPriceFeed.sol";


contract MintNft is ERC721URIStorage, ReentrancyGuard {
    using SafeERC20 for IERC20;
    address public BUSD;
    address public ChainLinkPriceFeed;
    uint256 public _tokenIds;

    constructor() ERC721("SpaceSix", "SCX") {
        owner = msg.sender;//Mainnet
        owner = 0xF436fbfB8Fb33618Ae650D6Dc9bbC71813A669A6;
        _tokenIds = 9999;
        // BUSD = 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56;//Mainnet
        BUSD = 0x04E52952d50B84363E856649db1b7941acc0C15F;//BSC_Tesnet
        // ChainLinkPriceFeed = 0x40Bb32Cf53EC527C2FDd8Dca67Bb88385DB53021;//Mainnet
        ChainLinkPriceFeed = 0xbc66fE8d432cc5E01D5A688778ba299057526f00;//BSC_Testnet
    }

    
    modifier totalSupplyCheck() {
        uint256 totalNfts = totalSupply() + 9999;
        require(_tokenIds < totalNfts , "TotalSupplyEr");
        _;
    }

    function mintNFT(
        uint256 _currentId,
        uint256 _amount,
        uint8 _type,
        uint8 _howMany,
        address _nftOwner
    ) external payable totalSupplyCheck nonReentrant returns (bool) {
        uint256 currentId = _currentId;
        uint256 amount = _amount;
        uint8 howMany = _howMany;
        uint8 s_type = _type;
        address nftOwner = _nftOwner;
        string memory metaData = AllNfts[currentId].metaData;
        uint16 level = AllNfts[currentId].level;
        uint16 count = AllNfts[currentId].count;
        uint256 finalAmount = AllNfts[currentId].amount * howMany;
        uint256 tokenId = AllNfts[currentId].tokenId;
        

        require(amount == finalAmount, "amount");
        require(count > 0, "stock");
        require(count >= howMany, "available");

        if (s_type == 0) {
            require(msg.sender == owner ,"onlyOwner");
        }else if (s_type == 1){
            SafeERC20.safeTransferFrom(IERC20(BUSD), msg.sender, owner, finalAmount);
            nftOwner = msg.sender;
        }else {
            // address ownerAddress = payable(0xDaeA92cc30392Bf55a5E52a632f3BB90AaDD9010);//Mainnet
            address ownerAddress = payable(0xF436fbfB8Fb33618Ae650D6Dc9bbC71813A669A6);//BSC_Testnet
            uint bnbPrice = toBnbPrice(currentId ,howMany);
            require(msg.value >= bnbPrice , "this is not nft price");
            (bool sent,) = ownerAddress.call{value: msg.value}("");
            require(sent, "Failed to send Ether");
            nftOwner = msg.sender;
        }

        EachNFT storage currentItem = AllNfts[currentId];
        currentItem.count -= howMany;

        for (uint256 i = 1; i <= howMany; i++) {
            _tokenIds += 1;
            _mint(nftOwner, _tokenIds);
            _setTokenURI(_tokenIds, metaData);

            Transaction memory newTransaction = Transaction(
                metaData,
                nftOwner,
                false,
                level,
                0,
                _tokenIds,
                finalAmount,
                tokenId
            );

            transactions[_tokenIds] = newTransaction;
        }
        return true;
    }


    function toBnbPrice(uint256 _tokenId , uint8 _howMany) public view returns(uint) {
        uint bnb = uint(IPriceFeed(ChainLinkPriceFeed).getLatestPrice());
        uint nftPrice = AllNfts[_tokenId].amount * 10**18;
        nftPrice = nftPrice * _howMany;
        bnb = bnb * 10 ** 10;
        nftPrice = nftPrice / bnb;
        nftPrice = nftPrice / 10**15;
        nftPrice = nftPrice * 10**15;
        return nftPrice;
    }

    function updateTokenURI(uint256 _tokenId, string memory _tokenURI) public onlyOwner {
        _updateTokenURI(_tokenId, _tokenURI);
    }

    function changeTransferLock(bool _change) public onlyOwner {
        _transferLock = _change;
    }

    function setStakeAddress(address _stakeAddress) public onlyOwner {
        require(stakeAddress == address(0));
        stakeAddress = _stakeAddress;
    }

    function stake(uint256 _tokenId , uint256 _endTime) public {
        require (msg.sender == stakeAddress , "This is not stake address");
        Transaction storage currentItem = transactions[_tokenId];
        currentItem.didStake = true;
        currentItem.stakedTime = _endTime;
    }


    function unStake(uint256 _tokenId) public {
        require (msg.sender == stakeAddress , "This is not stake address");
        Transaction storage currentItem = transactions[_tokenId];
        currentItem.didStake = false;
        currentItem.stakedTime = 0;
    }

    function totalSupply() public pure returns (uint256) {
        return 1255;
    }

    function getNFT(uint256 _tokenid) external view returns(EachNFT memory){
        return AllNfts[_tokenid];
    }

    function getTransaction(uint256 _tokenid) external view returns(Transaction memory){
        return transactions[_tokenid];
    }

}



