import Link from 'next/link';
import theme from './theme';

export default function Album({ name, album, children }) {
  return (
    <>
      <Link href={`/albums/${name}`}>
        <a className="card">
          <div className="image"></div>
          <h3>{album.title}</h3>
          <p>{children}</p>
        </a>
      </Link>
      <style jsx>{`
        .card {
          max-width: 340px;
          height: 600px;
          flex: 0 0;
          color: white;
          text-shadow: #000 5px 0 10px;
          margin: 2em;
          flex-basis: 45%;
          text-align: left;
          text-decoration: none;
          transition: all 0.15s ease;
          color: ${theme.textColor};
          text-align: center;
          letter-spacing: .3em;
          font-family: ${theme.titleFont};
          text-transform: uppercase;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: white;
        }

        .card .image {
          background-image: url(/images/albums/${name}/480p/${album.tile});
          background-position: center;
          background-size: cover;
          min-height: 480px;
          min-width: 340px;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          margin-top: 1em;
          font-weight: 200;
        }

        .card p {
          margin: 0;
          font-size: .75rem;
        }
      `}</style>
    </>
  );
}
