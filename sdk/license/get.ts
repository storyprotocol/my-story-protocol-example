import { client } from '../utils';

client.license.get({ licenseId: '5' })
  .then(({ license }) => {
    console.log(license);
  });