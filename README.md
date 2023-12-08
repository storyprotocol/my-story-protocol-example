# The Developer Quickstart Examples of Story Protocol

This is repository contains all the examples mentioned in Story Protocol Document Website. The code examples in the repository is used for demonstrating how to use Story Protocol SDK.

Please read the [Tutorial for Developers](https://docs.storyprotocol.xyz/docs/developer-tutorial) for the full steps for creating and setting up the project.

# Run the tutorial for developers and the SDK examples

Here are the steps to run the examples in this repository.

### Install the dependencies

```
$ npm install
```

### Create an `.env` file

Then create the `.env` file in the current folder with the following environment variables:

```
# Endpoint of Story Protocol API
NEXT_PUBLIC_API_BASE_URL=

# Deployed smart contracts on Sepolia network
NEXT_PUBLIC_STORY_PROTOCOL_CONTRACT=
NEXT_PUBLIC_IP_ASSET_REGISTRY_CONTRACT=
NEXT_PUBLIC_IP_ORG_CONTROLLER_CONTRACT=
NEXT_PUBLIC_RELATIONSHIP_MODULE_CONTRACT=
NEXT_PUBLIC_REGISTRATION_MODULE_CONTRACT=
NEXT_PUBLIC_LICENSE_REGISTRY_CONTRACT=
NEXT_PUBLIC_MODULE_REGISTRY_CONTRACT=

# RPC Endpoint for Sepolia network
RPC_URL=https://rpc.ankr.com/eth_sepolia

# Private key of the wallet to interact with Story Protocol SDK
PRIVATE_KEY="<KEEP_ME_SECRET>"
```

> Note: Please reach out Story Protocol Team to get the latest values for above environment variables with prefix `NEXT_PUBLIC_`.


### Run an example with the file name

Use the `ts-node` package to run a script at location:

```
$ npx ts-node <PATH_TO_TYPESCRIPT_FILE>
```

For example:

```
$ npx ts-node sdk/iporg/get.ts
```

If you want to run the tutorial for developers, use the following command:

```
$ npx ts-node sdk/tutorial/tutorial.ts
```

# Smart Contract Examples

This repository contains the smart contracts for demonstrating hook creation, the code repository doesn't contain the building script for these smart contracts, please refer to [Build and manage a hook by example](https://docs.storyprotocol.xyz/docs/build-a-hook-by-example) for the instructions to use these smart contracts.