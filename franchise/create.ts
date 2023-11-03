// franchise/create.ts
import { client } from '../utils';
import { CreateFranchiseResponse } from '@story-protocol/core-sdk';

client.franchise.create({
  franchiseName: "Alice in Wonderland, V1",
  franchiseSymbol: "Wonderland",
  franchiseDescription: "Fantastical journey, curious girl, whimsical characters, dreamlike adventures.",
}).then((response: CreateFranchiseResponse) => {
  console.log(response);
});
