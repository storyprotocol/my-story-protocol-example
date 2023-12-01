import { client } from '../utils';

// Create an IPA bound license
client.license.create({
  ipOrgId: "0x4c1f8c1035a8cE379dd4ed666758Fb29696CF721",
  isCommercial: false,
  ipaId: 1,
  preHooksCalldata: [],
  postHooksCalldata: [],
  txOptions: {waitForTransaction: true}
}).then(response => {
  console.log(response);
});