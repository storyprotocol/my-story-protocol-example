
import { client } from '../utils';

client.relationshipType.register({
  ipOrgId: "0xF509f04Ab4a926805312DD30accA4a2bcC18D98D",
  relType: "APPEAR_IN",
  relatedElements: {src: 1, dst: 1},
  allowedSrcIpAssetTypes: [1],
  allowedDstIpAssetTypes: [0],
  preHooksConfig: [],
  postHooksConfig: [],
  "txOptions": { waitForTransaction: true }
}).then(({txHash, success}) => {
  console.log("txHash:", txHash);
  console.log("success:", success);
});