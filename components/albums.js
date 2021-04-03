import Album from './album';
import theme from './theme';

export default function Albums({ title, names, albums }) {
  return (
    <>
      <div className="albums">
        <h1>{title}</h1>
        <div className="grid">
          {names.map(name => <Album key={name} name={name} album={albums[name]}></Album>)}
        </div>
      </div>
      <style jsx>{`
        .albums {
          background-color: ${theme.bgColorDark};
          padding: 5em 5em;
          width: 100vw;
          text-align: center;
        }
        h1 {
          font-family: ${theme.titleFont};
          color: ${theme.titleColor};
          font-weight: 300;
          letter-spacing: .3em;
          text-transform: uppercase;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }
      `}</style>
    </>
  );
}
