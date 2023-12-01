import { client } from '../utils';

// List IP Orgs with pagination parameter:
// starting from the record at index 10 and return 5 results
client.ipOrg.list({options: {
  pagination: {
  offset: 10,
  limit: 5
}}}).then(({ ipOrgs }) => {
  console.log(ipOrgs);
});