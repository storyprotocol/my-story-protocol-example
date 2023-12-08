import { client } from '../utils';

// Create a license for an IP asset
client.license.create({
  ipOrgId: "0xF509f04Ab4a926805312DD30accA4a2bcC18D98D",
  parentLicenseId: "0",
  ipaId: "74",
  params:[
    {
      tag: "Channels-Of-Distribution",
      value: {
        interface: "string",
        data: ["Telegram"],
      }
    }
  ],
  preHookData: [],
  postHookData: [],
  txOptions: {waitForTransaction: true}
}).then(response => {
  console.log(response);
});