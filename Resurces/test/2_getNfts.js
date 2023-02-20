const {expect,use} = require('chai');
const { ethers } = require("hardhat");
require('colors');
// console.log("skhfdis;jhdsfjdshhsgsgjfislbfsd");

// const chai = require('chai');
const {
    time,
    loadFixture

  } = require("@nomicfoundation/hardhat-network-helpers");
const BN = require('bn.js');
// use()
use(require('chai-bn')(BN))
let GetNftsContract=Object;

