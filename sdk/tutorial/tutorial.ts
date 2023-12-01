// sdk/tutorial.ts
import { client, account, IP_ASSET_REGISTRY_CONTRACT } from '../utils';
import { readFileSync, writeFileSync } from 'fs';

const main = async () => {

  // // Create an IP Org
  // const response = await client.ipOrg.create({
  //   name: "Wonderland",
  //   symbol: "LAND",
  //   owner: account.address,
  //   ipAssetTypes: ['STORY', 'CHARACTER'],
  //   txOptions: { waitForTransaction: true }
  // });
  // console.log(`IP Org created at transaction hash ${response.txHash}, IP Org ID: ${response.ipOrgId}`)

  // if (!response.ipOrgId) {
  //   console.error("IP Org ID is not returned back! Aborting ...")
  //   return;
  // }

  // // Verify the IP Org is created
  // const ipOrg = await client.ipOrg.get({ ipOrgId: response.ipOrgId });
  // console.log("IP Org content: ", ipOrg.ipOrg);

  // // Upload the image (WhiteRabbit.png) for IP Asset
  // const imageRabbitFile = readFileSync(__dirname + '/WhiteRabbit.png');
  // const imageRabbitPath = await client.platform.uploadFile(imageRabbitFile, 'image/x-png');
  // console.log("Image (WhiteRabbit.png) is uploaded to", imageRabbitPath.uri);

  // // Upload the image (AliceAndFlamingo.png) for IP Asset
  // const imageFlamingoFile = readFileSync(__dirname + '/AliceAndFlamingo.png')
  // const imageFlamingoPath = await client.platform.uploadFile(imageFlamingoFile, 'image/x-png');
  // console.log("Image (WhiteRabbit.png) is uploaded to", imageFlamingoPath.uri);

  // // Update the URL links in the markdown file
  // const mdOldFile = readFileSync(__dirname + '/AliceInWonderland.md', 'utf-8');
  // writeFileSync(
  //   __dirname + '/AliceInWonderland_new.md',
  //   mdOldFile.replace(/#Rabbit#/g, imageRabbitPath.uri).replace(/#Flamingo#/g, imageFlamingoPath.uri),
  //   'utf-8'
  // )

  // // Upload the new markdown file for IP Asset
  // const mdNewFile = readFileSync(__dirname + '/AliceInWonderland_new.md');
  // const mdFilePath = await client.platform.uploadFile(mdNewFile, 'image/markdown');
  // console.log("Markdown File (AliceInWonderland_new.md) is uploaded to", mdFilePath.uri);
  
  // // Create an IP Asset for the story content
  // const storyName = "Alice In Wonderland";
  // const storyCreation = await client.ipAsset.create({
  //   "name": storyName,
  //   "type": 0,
  //   "ipOrgId": response.ipOrgId,
  //   "owner": account.address,
  //   "mediaUrl": mdFilePath.uri,
  //   "txOptions": { waitForTransaction: true }
  // });
  // console.log(`IP Asset (${storyName}) created at transaction hash ${storyCreation.txHash}`,
  //   `IP Asset ID: ${storyCreation.ipAssetId}`);
  // const storyInfo = await client.ipAsset.get({ipAssetId: storyCreation.ipAssetId});
  // console.log("Story IP Asset Information", storyInfo);

  // // Create an IP Asset for the character "Alice"
  // const characterName = "Alice";
  // const characterCreation = await client.ipAsset.create({
  //   "name": characterName,
  //   "type": 1,
  //   "ipOrgId": response.ipOrgId,
  //   "owner": account.address,
  //   "mediaUrl": imageFlamingoPath.uri,
  //   "txOptions": { waitForTransaction: true }
  // });
  // console.log(`IP Asset (${characterName}) created at transaction hash ${characterCreation.txHash}`,
  //   `IP Asset ID: ${characterCreation.ipAssetId}`);
  // const characterInfo = await client.ipAsset.get({ipAssetId: characterCreation.ipAssetId});
  // console.log("Character IP Asset Information", characterInfo);
  
  // Create a relationship type between above two IP assets
  const appearInRelType = await client.relationship.registerRelationshipType({
    ipOrgId: "0x4c1f8c1035a8cE379dd4ed666758Fb29696CF721",
    relType: "APPEAR_IN",
    relatedElements: {src: 1, dst: 1},
    allowedSrcs: ["1"],
    allowedDsts: ["0"],
    preHooksConfig: [],
    postHooksConfig: [],
    "txOptions": { waitForTransaction: true }
  });
  console.log(`Relationship type created at transaction hash ${appearInRelType.txHash}`,
    `Is successful? ${appearInRelType.success}`);

  // Create a relationship between two IP assets
  const relationship = await client.relationship.register({
    ipOrgId: "0x4c1f8c1035a8cE379dd4ed666758Fb29696CF721",
    relType: "APPEAR_IN",
    srcContract: "0x177175a4b26f6EA050676F8c9a14D395F896492C",
    srcTokenId: "1",
    dstContract: "0x177175a4b26f6EA050676F8c9a14D395F896492C",
    dstTokenId: "2",
    preHookData: [],
    postHookData: [],
    txOptions: {waitForTransaction: true}
  });
  console.log(`Relationship created at transaction hash ${relationship.txHash}`,
    `Relationship ID: ${relationship.relationshipId}`);
}

main();