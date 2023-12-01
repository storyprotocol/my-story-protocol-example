import { client } from '../utils';

client.ipAsset.get({ ipAssetId: '207' })
  .then((ipAsset) => {
    console.log(ipAsset);
  });