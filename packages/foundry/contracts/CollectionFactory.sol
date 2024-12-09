// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "./NFTCollection.sol";

contract CollectionFactory {
    event CollectionCreated(address indexed collectionAddress, string name, string symbol, string collectionURI);

    function createCollection(string memory name, string memory symbol, string memory collectionURI) public returns (address) {
        NFTCollection newCollection = new NFTCollection(name, symbol, collectionURI);
        newCollection.transferOwnership(msg.sender);
        emit CollectionCreated(address(newCollection), name, symbol, collectionURI);
        return address(newCollection);
    }
}