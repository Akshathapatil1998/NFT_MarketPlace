"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BookOpenIcon, FaceSmileIcon, PlusCircleIcon, ShoppingBagIcon, WrenchIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="min-h-screen bg-[#b9c2c4] text-black">
        {/* Header Section */}
        <header className="py-6 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold text-black">NFT Marketplace</h1>
            <div className="flex items-center space-x-4">
              <p className="font-medium">Connected Address:</p>
              <Address address={connectedAddress} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-6xl font-extrabold mb-6">Enter the NFT Universe</h2>
            <p className="text-2xl mb-12">Create, Showcase, and Trade Your NFTs with Ease.</p>
            <Link href="/mintCollection" passHref>
              <button className="bg-white text-[#b9c2c4] hover:bg-gray-100 px-10 py-4 rounded-full text-2xl font-bold transition duration-300 ease-in-out">
                Start Creating
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12">Explore Our Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={<PlusCircleIcon className="h-16 w-16 text-white" />}
                title="Create Collections"
                description="Design your unique NFT collections effortlessly. Here's what you can do:
                - **Upload Images**: Upload your images to IPFS for decentralized storage.
                - **Set Metadata**: Define the name, symbol, and supply of your collection.
                - **Mint NFTs**: Mint your NFTs with just a few clicks, ensuring they are unique and verifiable on the blockchain.
                - **Customize**: Customize your collection's appearance, including the background, logo, and banner."
                link="/mintCollection"
                color="bg-[#85929E]"
              />
              <FeatureCard
                icon={<BookOpenIcon className="h-16 w-16 text-white" />}
                title="View Collections"
                description="Browse and showcase your created NFT collections. Here's what you can do:
                - **View Details**: See detailed information about each NFT, including its metadata, ownership history, and current status.
                - **Share**: Share your collections with others, allowing them to view and interact with your NFTs.
                - **Manage**: Organize your collections, add or remove NFTs, and update collection details.
                - **Explore**: Discover other users' collections, find inspiration, and engage with the NFT community."
                link="/displaycollection"
                color="bg-[#A9A9A9]"
              />
              <FeatureCard
                icon={<WrenchIcon className="h-16 w-16 text-white" />}
                title="View Auctions"
                description="Participate in active NFT auctions. Here's what you can do:
                - **Bid**: Place bids on your favorite NFTs, set your maximum bid, and track the auction progress.
                - **Track**: Monitor the auction status, see current bids, and receive notifications when you're outbid.
                - **Decentralized**: All auctions are fully decentralized, ensuring transparency and security through smart contracts.
                - **Auction Types**: Choose from various auction types like English, Dutch, or sealed-bid auctions."
                link="/viewauction"
                color="bg-[#C0C0C0]"
              />
              <FeatureCard
                icon={<ShoppingBagIcon className="h-16 w-16 text-white" />}
                title="Purchased NFTs"
                description="Keep track of the NFTs you’ve acquired. Here's what you can do:
                - **View Purchases**: See all the NFTs you've purchased, including their details and current value.
                - **Manage**: Transfer or sell your NFTs as needed, manage your collection, and track the value and rarity of your assets.
                - **Portfolio**: View your portfolio, track your investments, and analyze the performance of your NFTs.
                - **Alerts**: Set up alerts for price changes, new listings, or when your NFTs are involved in auctions."
                link="/ownednfts"
                color="bg-[#D3D3D3]"
              />
            </div>
          </div>
        </section>

        {/* Created By Section */}
        <section className="py-12 bg-white text-[#b9c2c4]">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Created By</h3>
            <div className="flex flex-col items-center">
              <p className="text-xl font-medium">Team Name: Cryptocurrency and Smart Contracts</p>
              <ul className="list-disc list-inside mt-4 text-lg">
                <li>Akshatha Patil</li>
                <li>Sumanayana Konda</li>
                <li>Ruthwik Bommenahalli Gowda</li>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-[#b9c2c4] text-white">
          <div className="container mx-auto text-center">
            <p className="text-sm">&copy; 2024 NFT Marketplace. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  link,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}) => {
  return (
    <div className={`flex flex-col ${color} shadow-lg px-6 py-12 text-center items-center max-w-sm rounded-3xl transition duration-300 ease-in-out transform hover:scale-105`}>
      <div className="mb-6">{icon}</div>
      <h4 className="font-bold text-2xl mb-4 text-white">{title}</h4>
      <p className="text-lg mb-6 text-white">{description}</p>
      <Link href={link} className="text-white hover:underline text-xl">
        Explore
      </Link>
    </div>
  );
};

export default Home;
