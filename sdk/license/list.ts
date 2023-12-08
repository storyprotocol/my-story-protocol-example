import { client } from '../utils';

// List all licenses
client.license.list({
  ipAssetId: '0',
  ipOrgId: '0xc427727a7a19ea5b87fc472aaddec2f3b7ae5561'
}).then(({ licenses }) => {
  console.log(licenses);
});