// franchise/create.ts
import { client } from '../utils';

// Create a new franchise
client.franchise.create({
  franchiseName: "Alice in Wonderland, V2",
  franchiseSymbol: "Wonderland",
  franchiseDescription: "Fantastical journey, curious girl, whimsical characters, dreamlike adventures.",
}).then(({ txHash }) => {
  console.log(txHash);
});
