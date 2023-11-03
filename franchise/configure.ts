import { client } from '../utils';

// Configure a franchise
client.franchise.configure({ franchiseId: '396' }).then(({ txHash }) => {
  console.log(txHash);
});