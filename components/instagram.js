import theme from './theme';
export default function Instagram({ photos }) {
  return (
    <>
      <div className="instagram">
        {photos && photos.slice(0,10).map((photo, index) => <img key={index} className="photo" src={photo}/>)}
        <div className="overlay">
          <a target="oz._photography" href="https://www.instagram.com/oz._photography_/">
            <img valign="middle" src="/images/instagram.svg"/> @oz._photography_
          </a>
        </div>
      </div>
      <style>{`
        .instagram {
          max-height: 10vw;
          overflow: hidden;
          display: flex;
          position: relative;
        }
        .overlay {
          text-align: center;
          height: 5vw;
          background: rgba(0,0,0,0.7);
          position: absolute;
          bottom: 2.5vw;
          width: 50vw;
          margin-left: 25vw;
          line-height: 5vw;
          color: white;
        }
        .overlay a {
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          font-family: ${theme.titleFont};
          font-size: 1.5vw;
        }
        .overlay a img {
          width: 2.5vw;
          height: 2.5vw;
          margin-right: 2vw;
        }
        .instagram img.photo {
          width: 10vw;
          height: 10vw;
        }
      `}</style>
    </>
  );
}
