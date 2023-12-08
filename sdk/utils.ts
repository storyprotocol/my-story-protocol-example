// utils.ts
import { StoryClient } from "@story-protocol/core-sdk";
import { privateKeyToAccount } from "viem/accounts";
import { config } from "dotenv";
config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x";
export const account = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);
export const IP_ASSET_REGISTRY_CONTRACT = process.env.NEXT_PUBLIC_IP_ASSET_REGISTRY_CONTRACT || "0x";

// Instantiate the Story Client for readonly operations, using default 
export const realonlyClient = StoryClient.newReadOnlyClient({});

// Instantiate the Story Client, test environment required for alpha release.
// The private key is also required for written operations.
export const client = StoryClient.newClient({account});