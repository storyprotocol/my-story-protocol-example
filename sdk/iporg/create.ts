// franchise/create.ts
import { client, account } from '../utils';

// Create a new IP Org
client.ipOrg.create({
  name: "Alice in Wonderland Series",
  symbol: "ALICE",
  owner: account.address,
  ipAssetTypes: ['STORY', 'CHARACTER'],
  txOptions: { waitForTransaction: true }
}).then(({ txHash, ipOrgId }) => {
  console.log("txHash:", txHash);
  console.log("ipOrgId:", ipOrgId);
});
