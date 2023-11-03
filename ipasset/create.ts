import { client } from '../utils';
import { IPAssetType } from '@story-protocol/core-sdk';

// Create an IP Asset
client.ipAsset.create({
  franchiseId: "396",
  ipAssetType: IPAssetType.STORY,
  ipAssetName: "Another Story",
  description: "A short story about how to develop apps",
  mediaUrl: "https://storyprotocol.readme.io/",
  to: "0xc9867532634f43D395d3D2eb3A616d39BF1A86E4",
  parentIpAssetId: "395",
}).then(({ txHash }) => {
  console.log(txHash);
});