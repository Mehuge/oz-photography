import fs from 'fs';
import path from 'path';
export default async function fetchAlbum(name) {
  const albumDir = `${process.cwd()}/public/images/albums/${name}`;
  const json = fs.readFileSync(path.resolve(`${albumDir}/info.json`));
  const album = JSON.parse(json);
  album.name = name;
  const imageNames = fs.readdirSync(path.resolve(albumDir));
  album.images = imageNames.filter(n => n.toUpperCase().endsWith('.JPG'));
  return album;
}
