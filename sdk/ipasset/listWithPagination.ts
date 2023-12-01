import { client } from '../utils';

// List IP Assets with pagination parameter:
// starting from the record at index 10 and return 5 results
client.ipAsset.list({options: {
  pagination: {
  offset: 10,
  limit: 5
}}}).then(({ipAssets}) => {
  console.log(ipAssets);
});