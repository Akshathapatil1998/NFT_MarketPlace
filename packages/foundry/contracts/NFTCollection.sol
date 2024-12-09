
// pragma solidity ^0.8.22;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";


// contract NFTCollection is ERC721URIStorage, Ownable {
//     // Replace Counters usage with this
//     uint256 private _tokenIds = 0;

//     constructor(string memory name, string memory symbol) ERC721(name, symbol) Ownable(msg.sender) {}

//     function createToken(string memory tokenURI) public returns (uint256) {
//         _tokenIds++;
//         uint256 newTokenId = _tokenIds;
//         _safeMint(msg.sender, newTokenId);
//         _setTokenURI(newTokenId, tokenURI);
//         return newTokenId;
//     }

//     function totalSupply() public view returns (uint256) {
//         return _tokenIds;
//     }
// }



// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCollection is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    string public collectionURI;

    event TokenCreated(uint256 indexed tokenId, address indexed owner, string tokenURI);

    constructor(string memory name, string memory symbol, string memory _collectionURI) ERC721(name, symbol) Ownable(msg.sender) {
        collectionURI = _collectionURI;
    }

    function createToken(string memory tokenURI) public returns (uint256) {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        emit TokenCreated(newTokenId, msg.sender, tokenURI);
        return newTokenId;
    }

    function batchCreateTokens(string[] memory tokenURIs) public returns (uint256[] memory) {
        uint256[] memory newTokenIds = new uint256[](tokenURIs.length);
        for (uint i = 0; i < tokenURIs.length; i++) {
            newTokenIds[i] = createToken(tokenURIs[i]);
        }
        return newTokenIds;
    }

    function setCollectionURI(string memory _collectionURI) public onlyOwner {
        collectionURI = _collectionURI;
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIds;
    }
}