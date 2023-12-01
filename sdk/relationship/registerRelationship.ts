import { client } from '../utils';

client.relationship.register({
  ipOrgId: "0x86310d77f44e66d2db850266f3f600256d123579",
  relType: "APPEAR_IN",
  srcContract: "0x309C205347E3826472643f9B7EbD8A50D64CCd9e",
  srcTokenId: "1",
  dstContract: "0x309C205347E3826472643f9B7EbD8A50D64CCd9e",
  dstTokenId: "2",
  preHookData: [],
  postHookData: [],
  txOptions: {waitForTransaction: true}
}).then(response => {
  console.log(response);
});