import Page from '../components/page';
import Albums from '../components/albums';
import About from '../components/about';
import database from '../db/database.json';

import fetchInstagramPhotos from '../db/fetchInstagramPhotos';
import fetchAllAlbums from '../db/fetchAllAlbums';
export async function getStaticProps() {
  return {
    props: {
      albums: await fetchAllAlbums(),
      instagram: await fetchInstagramPhotos()
    }
  };
}

export default function Home({ albums, instagram }) {
  const { website, galleries } = database;
  return (
    <Page info={website} instagram={instagram}>
      <>
        <About {...website.about}/>
        { galleries.map((gallery, i) => <Albums key={i} title={gallery.title} names={gallery.albums} albums={albums}/>) }
      </>
    </Page>
  );
}
