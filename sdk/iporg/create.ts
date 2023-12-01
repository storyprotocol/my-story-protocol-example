// franchise/create.ts
import { client } from '../utils';

// Create a new IP Org
client.ipOrg.create({
  name: "Alice in Wonderland Series",
  symbol: "ALICE",
  owner: '0xc0246081FD87Fc0aa29570F7ABafD0A69a2Ca05F',
  ipAssetTypes: ['STORY', 'CHARACTER'],
  txOptions: { waitForTransaction: true }
}).then(({ txHash, ipOrgId }) => {
  console.log("txHash:", txHash);
  console.log("ipOrgId:", ipOrgId);
});
