import { client } from '../utils';

// Configure a franchise
client.franchise.configure({ franchiseId: '432' }).then(({ txHash }) => {
  console.log(txHash);
});