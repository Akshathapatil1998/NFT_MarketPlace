//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/NFTCollection.sol";
import "./DeployHelpers.s.sol";

contract DeployNFTCollection is ScaffoldETHDeploy {
  // use `deployer` from `ScaffoldETHDeploy`
  function run() external ScaffoldEthDeployerRunner {
    NFTCollection nftCollection = new NFTCollection("AkshataNFT", "ANFT");
    console.logString(
      string.concat(
        "NFTCollection deployed at: ", vm.toString(address(nftCollection))
      )
    );
  }
}
