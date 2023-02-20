// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract priceFeed {
    uint256 price = 245000000000;

    function getLatestPrice() external view returns (uint256) {
        return price;
    }
}
