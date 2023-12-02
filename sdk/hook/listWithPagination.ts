import { client } from '../utils';

client.hook.list({
  options: {
    pagination: {
    offset: 1,
    limit: 2
}}})
  .then(({hooks}) => {
    console.log(hooks);
  });