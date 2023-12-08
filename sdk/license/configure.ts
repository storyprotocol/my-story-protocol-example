import { client } from '../utils';
import { LicensorConfigEnum } from '@story-protocol/core-sdk'

// Create an IPA bound license
client.license.configure({
  ipOrg: "0xF509f04Ab4a926805312DD30accA4a2bcC18D98D",
  frameworkId: "SPUML-1.0",
  params: [
    {
      tag: "Attribution",
      value: {
        interface: "bool",
        data: [false],
      }
    }
  ],
  licensor: LicensorConfigEnum.Source,
  txOptions: {waitForTransaction: true}
}).then(response => {
  console.log(response);
});