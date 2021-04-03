import theme from './theme';
import Link from 'next/link';

const defaultBackground = [ '/images/1080p/background.jpg', '/images/background.jpg' ];

export default function Header({ title, headline, subhead, background = defaultBackground}) {
  return (
    <>
      <header>
        <div className="navigation">
          <Link href="/">
            <div className="title">{title}</div>
          </Link>
        </div>
        <div className="headline">
          <div className="head">{headline}</div>
          <div className="subhead">{subhead}</div>
        </div>
      </header>

      <style jsx>{`
        header {
          font-family: ${theme.titleFont};
          color: ${theme.titleColor};
          text-transform: uppercase;
          height: 100vh;
          width: 100vw;
          background-image: url(${background[0]});
          background-image:
            -webkit-image-set(
              ${ background.map((img, i) => `url(${img}) ${i+1}x,`).join('\n') }
            );
          background-image:
            -x-image-set(
              ${ background.map((img, i) => `url(${img}) ${i+1}x,`).join('\n') }
            );
          background-image:
            x-image-set(
              ${ background.map((img, i) => `url(${img}) ${i+1}x,`).join('\n') }
            );
          background-image:
            image-set(
              ${ background.map((img, i) => `url(${img}) ${i+1}x,`).join('\n') }
            );
          background-size: cover;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
        }

        .navigation {
          height: 25vh;
        }

        .headline {
          height: 75vh;
        }
        .headline {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 10vh;
        }

        .title {
          margin-top: 5vh;
          margin-left: 5vw;
          letter-spacing: .25rem;
          font-weight: 500;
          font-size: 1em;
          cursor: pointer;
        }

        .head {
          font-size: 2.5em;
          letter-spacing: .375rem;
          font-weight: 300;
        }

        .subhead {
          font-size: 1em;
          font-weight: 200;
          letter-spacing: .25rem;
        }

      `}</style>
    </>
  );
}
