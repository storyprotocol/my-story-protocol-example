import { client } from '../utils';

client.ipAsset.get({ ipAssetId: '1', franchiseId: '432' })
  .then(({ data }) => {
    console.log(data);
  });