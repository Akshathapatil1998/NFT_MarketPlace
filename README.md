# NFT-Marketplace

### Project Overview

The NFT Marketplace project aims to provide a decentralized platform for creating, viewing, and auctioning NFTs. Here are some key points:

- **Decentralized**: The entire marketplace operates on the blockchain, ensuring transparency and security.
- **NFT Collection Creator**: Users can create their own NFT collections by uploading images to IPFS and minting them as NFTs.
- **Auction System**: Users can auction their NFTs through a decentralized interface, allowing for a variety of auction types.
- **No Backend**: All functionality is handled on-chain, reducing the need for a centralized server.

### Project Goals

- **Engineering Quality**: The project focuses on delivering a bug-free, smooth-performing application.
- **Uniqueness**: The marketplace aims to offer unique features or user experiences not commonly found in other NFT marketplaces.

### Future Enhancements

- **Integration with More Blockchains**: Expand support to other EVM-compatible blockchains.
- **Advanced Auction Types**: Implement more complex auction mechanisms like Dutch auctions or sealed-bid auctions.
- **User Interface Improvements**: Enhance the UI/UX for better user engagement and accessibility.

### Project Timeline

- **Phase 1**: NFT Collection Creator (Completed)
- **Phase 2**: NFT Auction System (In Progress)
- **Phase 3**: Additional Features and Refinements (Planned)

## 🚀 Live Demo

[NFT Marketplace on Vercel](https://nft-market-place-nextjs.vercel.app/)

## 🌟 Features

- **NFT Collection Creator**: Create your own NFT collection from IPFS-hosted images
- **Collection Viewer**: View all your created NFT collections in one place
- **NFT Auctions**: Auction off your NFTs through a decentralized interface
- **Decentralized Architecture**: No backend, fully on-chain functionality

## 🛠 Tech Stack

- **Smart Contracts**: Solidity, OpenZeppelin
- **Development Environment**: Foundry
- **Frontend**: NextJS, RainbowKit, Wagmi, Viem, TypeScript
- **Blockchain**: Tenderly Testnet
- **Deployment**: Vercel (frontend), Tenderly (smart contracts)

## 🏁 Getting Started

### Prerequisites

- Node.js (>= v18.18)
- Yarn (v1 or v2+)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nft-marketplace.git
   cd nft-marketplace

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd my-dapp-example
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Foundry. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/foundry/foundry.toml`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/foundry/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/foundry/script` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn foundry:test`

- Edit your smart contracts in `packages/foundry/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/foundry/script`

## Frontend
<img width="1458" alt="Screenshot 2024-12-10 at 8 29 26 PM" src="https://github.com/user-attachments/assets/7f70d2a1-48fa-455e-83eb-c5f9f1948452">


## 👥 Done By

This project was developed by:
- Akshatha Patil
- Sumanayana Konda
- Ruthwik Bommenahalli Gowda

