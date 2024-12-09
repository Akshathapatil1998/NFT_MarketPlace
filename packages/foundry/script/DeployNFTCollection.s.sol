
// pragma solidity ^0.8.19;

// import "../contracts/NFTCollection.sol";
// import "./DeployHelpers.s.sol";

// contract DeployNFTCollection is ScaffoldETHDeploy {
//   // use `deployer` from `ScaffoldETHDeploy`
//   function run() external ScaffoldEthDeployerRunner {
//     NFTCollection nftCollection = new NFTCollection("AkshataNFT", "ANFT");
//     console.logString(
//       string.concat(
//         "NFTCollection deployed at: ", vm.toString(address(nftCollection))
//       )
//     );
//   }
// }


// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import "forge-std/Script.sol";
import "../contracts/NFTCollection.sol";
import "../contracts/CollectionFactory.sol"; // Adjust the path as needed



contract DeployNFTCollection is Script {
    function run() external {
        // Get the private key from the environment variables
        bytes32 privateKeyBytes = vm.envBytes32("PRIVATE_KEY");
        uint256 deployerPrivateKey = uint256(privateKeyBytes);
        
        // Start broadcasting with the deployer's private key
        vm.startBroadcast(deployerPrivateKey);

        // Deploy the CollectionFactory contract
        CollectionFactory factory = new CollectionFactory();

        // Create a sample NFT Collection using the factory
        factory.createCollection(
            "AkshataNFT", 
            "ANFT", 
            "https://gateway.pinata.cloud/ipfs/bafkreibq3anesg474rlpxjhvs2agwpfn37bplydfnkvnbuwpttv2q7cqse"
        );

        // Stop broadcasting after deployment
        vm.stopBroadcast();
    }
}
