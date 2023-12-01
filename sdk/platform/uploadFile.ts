// franchise/create.ts
import { client } from '../utils';
import { readFileSync } from 'fs';

const file = readFileSync(__dirname + '/story.png');

// Upload file
client.platform.uploadFile(file, 'image/x-png').then(uri => {
  console.log(uri);
});