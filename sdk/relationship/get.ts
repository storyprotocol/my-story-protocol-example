import { client } from '../utils';

client.relationship.get({ relationshipId: '187' })
  .then(({relationship}) => {
    console.log(relationship);
  });