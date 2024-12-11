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
      <div className="flex flex-col items-center flex-grow pt-10">
        {/* Header Section */}
        <header className="px-5 text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            NFT Marketplace
          </h1>
          <p className="text-xl text-gray-700">
            Create, Showcase, and Trade Your NFTs with Ease.
          </p>
          <div className="mt-4 flex justify-center items-center space-x-2">
            <p className="font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-8 mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Unlock the Power of NFTs</h2>
            <p className="text-lg">
              Mint, auction, and explore the world of digital ownership. Your journey into the NFT universe begins here.
            </p>
            <div className="mt-8">
              <Link href="/mintCollection" passHref>
                <button className="btn btn-primary px-8 py-4 rounded-full text-xl">Start Creating</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-base-200 w-full py-16 px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-700">Discover Our Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<PlusCircleIcon className="h-12 w-12 text-purple-500" />}
              title="Create Collections"
              description="Design your unique NFT collections effortlessly."
              link="/mintCollection"
            />
            <FeatureCard
              icon={<BookOpenIcon className="h-12 w-12 text-purple-500" />}
              title="View Collections"
              description="Browse and showcase your created NFT collections."
              link="/displaycollection"
            />
            <FeatureCard
              icon={<WrenchIcon className="h-12 w-12 text-purple-500" />}
              title="View Auctions"
              description="Participate in active NFT auctions and bid on your favorites."
              link="/viewauction"
            />
            <FeatureCard
              icon={<ShoppingBagIcon className="h-12 w-12 text-purple-500" />}
              title="Purchased NFTs"
              description="Keep track of the NFTs you’ve acquired."
              link="/ownednfts"
            />
          </div>
        </section>

        {/* Created By Section */}
        <section className="bg-base-100 w-full py-12 px-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-purple-700">Created By</h3>
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-700">Team Name: Cryptocurrency and Smart Contracts</p>
            <ul className="list-disc list-inside mt-4 text-purple-500">
              <li>Akshatha Patil</li>
              <li>Sumanayana Konda</li>
              <li>Ruthwik Bommenahalli Gowda</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-base-100 w-full py-6 text-center">
          <p className="text-sm text-gray-500">&copy; 2024 NFT Marketplace. All rights reserved.</p>
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
    <div className="flex flex-col bg-white shadow-xl px-8 py-10 text-center items-center max-w-sm rounded-2xl">
      <div className="mb-6">{icon}</div>
      <h4 className="font-bold text-xl mb-4 text-purple-700">{title}</h4>
      <p className="text-gray-700 mb-6">{description}</p>
      <Link href={link} className="text-purple-500 hover:underline text-lg">
        Explore
      </Link>
    </div>
  );
};

export default Home;

