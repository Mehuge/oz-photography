import { useRouter } from 'next/router';
import AlbumPage from '../../components/albumPage';
import database from '../../db/database.json';
import fetchAlbum from '../../db/fetchAlbum';
import fetchInstagramPhotos from '../../db/fetchInstagramPhotos';
import getAlbumNames from '../../db/getAlbumNames';

export async function getStaticPaths() {
  const paths = {
    paths: getAlbumNames().map(album => `/albums/${album}`),
    fallback: false
  };
  return paths;
}

export async function getStaticProps({ params }) {
  const name = params.id;
  const { website } = database;
  const album = await fetchAlbum(name);
  const instagram = await fetchInstagramPhotos();
  return {
    props: { website, album, instagram }
  };
}

export default function Page({ website, album, instagram }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  return (
    <AlbumPage website={website} album={album} instagram={instagram}>
      {album.synopsis.map((t, i) => <p key={i}>{t}</p>)}
    </AlbumPage>
  );
}
