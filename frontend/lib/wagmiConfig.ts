import { createConfig, http } from "wagmi";
import { foundry, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [foundry, sepolia],
  connectors: [injected()],
  transports: {
    [foundry.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
});