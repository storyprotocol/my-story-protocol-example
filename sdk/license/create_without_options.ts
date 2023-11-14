import { client } from '../utils';

// Create a license without options
client.license.create({
  franchiseId: "432",
  ipAssetId: "1",
  licenseURI: "https://www.storyprotocol.xyz",
}).then(({ txHash }) => {
  console.log(txHash);
});