import Page from './page';
import theme from './theme';
import Head from 'next/head';
import database from '../db/database.json';

function TiledAlbum({ folder, images }) {
  function slideShow(e) {
    showGallery(e);
  }
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css"></link>
        <script src="/js/splide.js"></script>
        <style>{`
          .gallery {
            display: none;
            padding: 5vh 5vw;
            position: fixed;
            top: 0;
            z-index: 1;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.9);
          }
          .gallery>.border {
            width: 90vw;
            height: 90vh;
            overflow: hidden;
            background: white;
            padding: 1vw;
          }
          #splide-gallery {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          #splide-gallery .splide__track,
          #splide-gallery .splide__list {
            height: inherit;
          }
          #splide-gallery .splide__slide {
            position: relative;
            height: inherit;
          }
          #splide-gallery .splide__slide img {
            position: absolute;
            top: 0; bottom: 0; margin: auto;
          }
        `}</style>
      </Head>
      <div className="tiledAlbum">
        {images.map((name, i) => (
            <img key={name} data-index={i} src={`../../images/albums/${folder}/480p/${name}`} onClick={slideShow}/>
        ))}
      </div>
      <div className="gallery">
        <div className="border">
          <div id="splide-gallery"></div>
        </div>
      </div>
      <style jsx>{`
      .tiledAlbum {
        padding: 10vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .tiledAlbum img {
        margin: 1vw;
        width: 24vw;
        height: 24vw;
        object-fit: cover;
      }
      `}</style>
    </>
  );
}

function AlbumDescription({ children }) {
  return (
    <>
      <div className="description">{children}</div>
      <style jsx>{`
        .description {
          padding: 10vw;
          width: 100%;
          color: ${theme.textColor};
        }
      `}</style>
    </>
  );
}

export default function AlbumPage({ album, children, instagram }) {
  const { website } = database;
  const { name, title, description } = album;
  const titleImage = album.banner;
  const pageInfo = {
    ...website,
    headline: title,
    subhead: description,
    background: titleImage ? [ `/images/albums/${name}/1080p/${titleImage}`, `/images/albums/${name}/${titleImage}` ] : '',
  };
  return (
    <Page info={pageInfo} instagram={instagram}>
      <AlbumDescription>{children}</AlbumDescription>
      <TiledAlbum folder={name} images={album.images}/>
    </Page>
  );
}
