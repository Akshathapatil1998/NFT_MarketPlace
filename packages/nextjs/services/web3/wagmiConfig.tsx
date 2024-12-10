// import { wagmiConnectors } from "./wagmiConnectors";
// import { Chain, createClient, fallback, http } from "viem";
// import { hardhat, mainnet } from "viem/chains";
// import { createConfig } from "wagmi";
// import scaffoldConfig from "~~/scaffold.config";
// import { getAlchemyHttpUrl } from "~~/utils/scaffold-eth";
// const { targetNetworks } = scaffoldConfig;
// // We always want to have mainnet enabled (ENS resolution, ETH price, etc). But only once.
// export const enabledChains = targetNetworks.find((network: Chain) => network.id === 1)
//   ? targetNetworks
//   : ([...targetNetworks, mainnet] as const);
// export const wagmiConfig = createConfig({
//   chains: enabledChains,
//   connectors: wagmiConnectors,
//   ssr: true,
//   client({ chain }) {
//     const alchemyHttpUrl = getAlchemyHttpUrl(chain.id);
//     const rpcFallbacks = alchemyHttpUrl ? [http(), http(alchemyHttpUrl)] : [http()];
//     return createClient({
//       chain,
//       transport: fallback(rpcFallbacks),
//       ...(chain.id !== (hardhat as Chain).id
//         ? {
//             pollingInterval: scaffoldConfig.pollingInterval,
//           }
//         : {}),
//     });
//   },
// });
import { wagmiConnectors } from "./wagmiConnectors";
import { Chain, createClient, fallback, http } from "viem";
import { hardhat, mainnet } from "viem/chains";
import { createConfig } from "wagmi";
import scaffoldConfig from "~~/scaffold.config";
import { getAlchemyHttpUrl } from "~~/utils/scaffold-eth";

const { targetNetworks } = scaffoldConfig;

// We always want to have mainnet enabled (ENS resolution, ETH price, etc). But only once.
export const enabledChains = targetNetworks.find((network: Chain) => network.id === 1)
  ? targetNetworks
  : ([...targetNetworks, mainnet] as const);

export const wagmiConfig = createConfig({
  chains: enabledChains,
  connectors: wagmiConnectors,
  ssr: true,
  client({ chain }) {
    const alchemyHttpUrl = getAlchemyHttpUrl(chain.id);

    // Replace this with your Tenderly RPC URL
    const tenderlyRpcUrl = "https://virtual.optimism.rpc.tenderly.co/0f4ef84b-b6db-4298-8a70-468db7834d45";

    // Ensure there's a valid RPC URL before proceeding
    const rpcFallbacks = alchemyHttpUrl
      ? [http(alchemyHttpUrl)] // Use Alchemy's URL if available
      : [http(tenderlyRpcUrl)]; // Use Tenderly RPC URL as a fallback

    // Make sure there is always a fallback
    if (rpcFallbacks.length === 0) {
      throw new Error("No valid RPC URL provided.");
    }

    return createClient({
      chain,
      transport: fallback(rpcFallbacks),
      ...(chain.id !== (hardhat as Chain).id
        ? {
            pollingInterval: scaffoldConfig.pollingInterval,
          }
        : {}),
    });
  },
});
