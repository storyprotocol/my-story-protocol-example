import { client } from '../utils';

client.license.get({ licenseId: '5' })
  .then(({ data }) => {
    console.log(data);
  });