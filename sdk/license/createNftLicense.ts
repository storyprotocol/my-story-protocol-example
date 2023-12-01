import { client } from '../utils';

// Create an NFT license
client.license.create({
  ipOrgId: "0x4c1f8c1035a8cE379dd4ed666758Fb29696CF721",
  isCommercial: false,
  licensee: "0xc0246081FD87Fc0aa29570F7ABafD0A69a2Ca05F",
  preHooksCalldata: [],
  postHooksCalldata: [],
  txOptions: {waitForTransaction: true}
}).then(response => {
  console.log(response);
});