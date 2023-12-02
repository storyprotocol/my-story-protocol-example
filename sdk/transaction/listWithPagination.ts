import { client } from '../utils';

client.transaction.list({
  options: {
    pagination: {
    offset: 5,
    limit: 3
}}})
  .then((data) => {
    console.log(data);
  });