// utils.ts
import { StoryClient, Environment } from "@story-protocol/core-sdk";
import { privateKeyToAccount } from "viem/accounts";
import { config } from "dotenv";
config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x";

// Instantiate the Story Client for readonly operations, test environment required for alpha release
export const realonlyClient = StoryClient.newReadOnlyClient({ environment: Environment.TEST });

// Instantiate the Story Client, test environment required for alpha release.
// The private key is also required for written operations.
export const client = StoryClient.newClient({
  environment: Environment.TEST,
  account: privateKeyToAccount(PRIVATE_KEY as `0x${string}`)
});
