import { client } from '../utils';

client.relationshipType.list({ipOrgId: "0xF509f04Ab4a926805312DD30accA4a2bcC18D98D"})
  .then(({relationshipTypes}) => {
    console.log(relationshipTypes);
  });