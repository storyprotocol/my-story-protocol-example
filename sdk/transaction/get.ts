import { client } from '../utils';

client.transaction.get({ transactionId: '0x69b927fd21f90f142138d404b3b51d4f211aca04899e20461700b8255791940049000000' })
  .then(({transaction}) => {
    console.log(transaction);
  });