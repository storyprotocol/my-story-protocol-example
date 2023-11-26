import { client } from '../utils';

client.relationship.get({ licenseId: '5' })
  .then(({ data }) => {
    console.log(data);
  });