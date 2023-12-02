import { client } from '../utils';

client.hook.get({hookId: "0xa26ba8224fb6173063f63388685f80708a6f4d96"})
  .then(({hook}) => {
    console.log(hook);
  });