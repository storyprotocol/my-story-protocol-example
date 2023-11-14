// franchise/get.ts
import { client } from '../utils';

// Get a franchise
client.franchise.get({ franchiseId: '432' }).then(({ data }) => {
  console.log(data);
});
