import { client } from '../utils';

client.ipAsset.list().then((data) => {
  console.log(data);
});