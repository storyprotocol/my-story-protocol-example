import { client } from '../utils';

client.ipAsset.get({ ipAssetId: '1000000000001', franchiseId: '396' })
  .then(({ data }) => {
    console.log(data);
  });