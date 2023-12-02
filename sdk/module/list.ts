import { client } from '../utils';

client.module.list()
  .then(({modules}) => {
    console.log(modules);
  });