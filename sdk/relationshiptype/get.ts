import { client } from '../utils';

client.relationshipType.get({
  ipOrgId: "0xF509f04Ab4a926805312DD30accA4a2bcC18D98D",
  relType: "APPEAR_IN"
}).then(({relationshipType}) => {
  console.log(relationshipType);
});