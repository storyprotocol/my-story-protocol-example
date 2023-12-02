import { client } from '../utils';

client.hook.list()
  .then(({hooks}) => {
    console.log(hooks);
  });