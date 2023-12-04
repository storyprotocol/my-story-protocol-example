
import { client } from '../utils';

client.relationship.registerRelationshipType({
  ipOrgId: "0x86310d77f44e66d2db850266f3f600256d123579",
  relType: "APPEAR_IN",
  relatedElements: {src: 1, dst: 1},
  allowedSrcs: ["1"],
  allowedDsts: ["0"],
  preHooksConfig: [],
  postHooksConfig: [],
  "txOptions": { waitForTransaction: true }
}).then(({txHash, success}) => {
  console.log("txHash:", txHash);
  console.log("success:", success);
});