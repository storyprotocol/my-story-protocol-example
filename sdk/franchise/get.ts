// franchise/get.ts
import { client } from '../utils';
import { GetFranchiseResponse } from '@story-protocol/core-sdk';

// Get a franchise
client.franchise.get({ franchiseId: '396' }).then((response: GetFranchiseResponse) => {
  console.log(response);
});
