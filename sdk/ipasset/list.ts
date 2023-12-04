import { client } from '../utils';

client.ipAsset.list({ipOrgId: "0x9e8dc5a02169a21aa9a9e78ae7b01a1cd919eefb"}).then(({ipAssets}) => {
  console.log(ipAssets);
});