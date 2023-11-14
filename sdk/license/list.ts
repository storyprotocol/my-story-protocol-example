import { client } from '../utils';

client.license.list({ ipAssetId: '1', franchiseId: '432' }).then(({ data }) => {
  console.log(data);
});