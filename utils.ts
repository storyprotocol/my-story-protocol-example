// utils.ts
import { StoryClient, Environment } from "@story-protocol/core-sdk";
import { ethers } from "ethers";
import { config } from "dotenv";
config();

const RPC_URL = process.env.RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

// Signer from private key
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// Instantiate the Story Client, test environment required for alpha release
export const client = StoryClient.newClient({
  environment: Environment.TEST,
  signer
});
