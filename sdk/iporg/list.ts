import { client } from '../utils';

// List franchises
client.ipOrg.list().then(({ ipOrgs }) => {
  console.log(ipOrgs);
});