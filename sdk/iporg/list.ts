import { client } from '../utils';

// List IP Orgs with default pagination parameter
client.ipOrg.list().then(({ ipOrgs }) => {
  console.log(ipOrgs);
});