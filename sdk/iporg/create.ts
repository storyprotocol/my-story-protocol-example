// franchise/create.ts
import { client } from '../utils';

// Create a new franchise
client.ipOrg.create({
  name: "Alice in Wonderland, V2",
  symbol: "ALICE2",
  owner: '0xc0246081FD87Fc0aa29570F7ABafD0A69a2Ca05F',
  ipAssetTypes: ['STORY', 'CHARACTER'],
  txOptions: { waitForTransaction: true }
}).then(({ txHash, ipOrgId }) => {
  console.log("txHash", txHash);
  console.log("ipOrgId", ipOrgId);
});
