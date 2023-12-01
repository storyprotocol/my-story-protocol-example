import { client } from '../utils';
import { IPAssetType } from '@story-protocol/core-sdk';

// Create an IP Asset
client.ipAsset.create({
  name: "A Simple Story",
  type: IPAssetType.STORY,
  ipOrgId: "0x86310d77f44e66d2db850266f3f600256d123579",
  owner: "0xc0246081FD87Fc0aa29570F7ABafD0A69a2Ca05F",
  mediaUrl: "https://arweave.net/m-3wkEOwmCwfkv1A25qgo8WS3O3t8a9-e-vi5vrejWE",
  txOptions: {waitForTransaction: true}
}).then(({ txHash, ipAssetId }) => {
  console.log("txHash:", txHash);
  console.log("ipAssetId:", ipAssetId);
});