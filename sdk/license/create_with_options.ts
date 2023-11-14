import { client } from '../utils';
import { ethers } from 'ethers';

const abiCoder = new ethers.utils.AbiCoder(); // For encoding the array of parameters.

// Create a license with options
client.license.create({
  franchiseId: "432",
  ipAssetId: "1",
  licenseURI: "https://www.storyprotocol.xyz",
  options: {
    ownerAddress: "0xc0246081FD87Fc0aa29570F7ABafD0A69a2Ca05F",
    revoker: "0xc0246081FD87Fc0aa29570F7ABafD0A69a2Ca05F",
    isSublicensable: true
  }
}).then(({ txHash }) => {
  console.log(txHash);
});