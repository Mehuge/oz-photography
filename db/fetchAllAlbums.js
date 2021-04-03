import fetchAlbum from './fetchAlbum';
import getAlbumNames from './getAlbumNames';

export default async function fetchAllAlbums() {
  const albumDirs = getAlbumNames();
  const albums = {};
  await Promise.all(albumDirs.map(async album => {
    albums[album] = await fetchAlbum(album);
  }));
  return albums;
}
