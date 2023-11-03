import { client } from '../utils';

// List franchises
client.franchise.list().then(({ data }) => {
  console.log(data);
});