import { generatePhotos } from './generatePhotos.js';
import { renderTiles } from './tiles.js';


function main() {
  renderTiles (generatePhotos());
  //console.log('success');
}

main();


// npm run start
