import { client } from '../utils';

// List license parameters for IP Org
client.license.listParams({
  ipOrgId: '0xc427727a7a19ea5b87fc472aaddec2f3b7ae5561'
}).then(({ licenseParams }) => {
  console.log(licenseParams);
});