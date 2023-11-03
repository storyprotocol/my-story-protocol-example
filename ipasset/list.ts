import { client } from '../utils';

client.ipAsset.list({ franchiseId: '396' }).then(({ data }) => {
  console.log(data);
});