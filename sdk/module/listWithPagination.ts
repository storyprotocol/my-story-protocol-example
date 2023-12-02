import { client } from '../utils';

client.module.list({
  options: {
    pagination: {
    offset: 1,
    limit: 2
}}})
  .then(({modules}) => {
    console.log(modules);
  });