// franchise/get.ts
import { client } from '../utils';

// Get an IP Org with IP Org ID
client.ipOrg.get({ ipOrgId: '0x86310d77f44e66d2DB850266F3F600256D123549' }).then(({ ipOrg }) => {
  console.log(ipOrg);
});
