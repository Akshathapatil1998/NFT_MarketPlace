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
      <div className="min-h-screen bg-gradient-to-br from-green-500 via-green-400 to-green-300 text-white">
        {/* Header Section */}
        <header className="py-6 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold text-white">NFT Marketplace</h1>
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
              <button className="bg-white text-green-500 hover:bg-green-100 px-10 py-4 rounded-full text-2xl font-bold transition duration-300 ease-in-out">
                Start Creating
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12">Explore Our Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<PlusCircleIcon className="h-16 w-16 text-white" />}
                title="Create Collections"
                description="Design your unique NFT collections effortlessly."
                link="/mintCollection"
              />
              <FeatureCard
                icon={<BookOpenIcon className="h-16 w-16 text-white" />}
                title="View Collections"
                description="Browse and showcase your created NFT collections."
                link="/displaycollection"
              />
              <FeatureCard
                icon={<WrenchIcon className="h-16 w-16 text-white" />}
                title="View Auctions"
                description="Participate in active NFT auctions and bid on your favorites."
                link="/viewauction"
              />
              <FeatureCard
                icon={<ShoppingBagIcon className="h-16 w-16 text-white" />}
                title="Purchased NFTs"
                description="Keep track of the NFTs you’ve acquired."
                link="/ownednfts"
              />
            </div>
          </div>
        </section>

        {/* Created By Section */}
        <section className="py-12 bg-white text-green-500">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Created By</h3>
            <div className="flex flex-col items-center">
              <p className="text-xl font-medium">Team Name: Cryptocurrency and Smart Contracts</p>
              <ul className="list-disc list-inside mt-4 text-lg">
                <li>Akshatha Patil</li>
                <li>Sumanayana Konda</li>
                <li>Ruthwik Bommenahalli Gowda</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-green-500 text-white">
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
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col bg-green-600 shadow-lg px-6 py-12 text-center items-center max-w-sm rounded-3xl transition duration-300 ease-in-out transform hover:scale-105">
      <div className="mb-6">{icon}</div>
      <h4 className="font-bold text-2xl mb-4">{title}</h4>
      <p className="text-lg mb-6">{description}</p>
      <Link href={link} className="text-white hover:underline text-xl">
        Explore
      </Link>
    </div>
  );
};

export default Home;
