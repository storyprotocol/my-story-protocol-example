import { client } from '../utils';
import { IPAssetType } from '@story-protocol/core-sdk';

// Create an IP Asset
client.ipAsset.create({
  franchiseId: "396",
  ipAssetType: IPAssetType.STORY,
  ipAssetName: "Another Story",
  description: "A short story about how to develop apps",
  mediaUrl: "https://storyprotocol.readme.io/",
  to: "0xc0246081FD87Fc0aa29570F7ABafD0A69a2Ca05F",
  parentIpAssetId: "395",
}).then(({ txHash }) => {
  console.log(txHash);
});