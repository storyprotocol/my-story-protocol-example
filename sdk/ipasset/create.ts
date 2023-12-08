import { client, account } from '../utils';

// Create an IP Asset
client.ipAsset.create({
  name: "A Simple Story",
  typeIndex: 0,
  ipOrgId: "0xF509f04Ab4a926805312DD30accA4a2bcC18D98D",
  owner: account.address,
  mediaUrl: "https://arweave.net/m-3wkEOwmCwfkv1A25qgo8WS3O3t8a9-e-vi5vrejWE",
  txOptions: {waitForTransaction: true}
}).then(({ txHash, ipAssetId }) => {
  console.log("txHash:", txHash);
  console.log("ipAssetId:", ipAssetId);
});