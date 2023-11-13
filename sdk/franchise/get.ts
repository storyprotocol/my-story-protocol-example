// franchise/get.ts
import { client } from '../utils';

// Get a franchise
client.franchise.get({ franchiseId: '396' }).then(({ data }) => {
  console.log(data);
});
