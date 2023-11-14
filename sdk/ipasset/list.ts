import { client } from '../utils';

client.ipAsset.list({ franchiseId: '432' }).then(({ data }) => {
  console.log(data);
});