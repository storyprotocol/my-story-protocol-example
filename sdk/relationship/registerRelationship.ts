import { client, IP_ASSET_REGISTRY_CONTRACT } from '../utils';

client.relationship.register({
  ipOrgId: "0x86310d77f44e66d2db850266f3f600256d123579",
  relType: "APPEAR_IN",
  srcContract: IP_ASSET_REGISTRY_CONTRACT,
  srcTokenId: "1",
  dstContract: IP_ASSET_REGISTRY_CONTRACT,
  dstTokenId: "2",
  preHookData: [],
  postHookData: [],
  txOptions: {waitForTransaction: true}
}).then(response => {
  console.log(response);
});