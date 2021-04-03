import fs from 'fs';
import path from 'path';
export default function getAlbumNames() {
  const albumsDir = path.resolve(`${process.cwd()}/public/images/albums`)
  return fs.readdirSync(albumsDir);
}
