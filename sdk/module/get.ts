import { client } from '../utils';

client.module.get({moduleId: "0x4231c45c32b53ba61d8d04ad05255ccbf3e5dbd2"})
  .then(({module}) => {
    console.log(module);
  });