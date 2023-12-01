import { client } from '../utils';

client.relationship.list({tokenId: "2", contract: "0x309c205347e3826472643f9b7ebd8a50d64ccd9e"})
  .then(({relationships}) => {
    console.log(relationships);
  });