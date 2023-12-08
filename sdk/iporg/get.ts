// franchise/get.ts
import { client } from '../utils';

// Get an IP Org with IP Org ID
client.ipOrg.get({ ipOrgId: '0xF509f04Ab4a926805312DD30accA4a2bcC18D98D' }).then(({ ipOrg }) => {
  console.log(ipOrg);
});
