import { client } from '../utils';

client.transaction.list({ipOrgId: "0x86310d77f44e66d2db850266f3f600256d123579"})
  .then(({transactions}) => {
    console.log(transactions);
  });