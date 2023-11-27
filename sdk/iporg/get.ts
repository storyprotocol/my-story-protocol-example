// franchise/get.ts
import { client } from '../utils';

// Get a franchise
client.ipOrg.get({ ipOrgId: '0x677b6822e208c51BA309D4eF338679711aAaBE32' }).then(({ ipOrg }) => {
  console.log(ipOrg);
});
