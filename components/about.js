import theme from './theme';

export default function About({ title, subtitle, text }) {
  return (
    <>
      <div className="about">
        <div className="left">
          <div className="heading">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
        <div className="right">
            {text.join(' ')}
        </div>
      </div>
      <style jsx>{`
        .about {
          background-color: ${theme.bgColorDark};
          color: ${theme.titleColor};
          height: 20em;
          width: 100vw;
          padding: 0;
          display: flex;
          flex-direction: row;
        }

        .left, .right {
          width: 50vw;
          height: 100%;
          display: flex;
          margin-top: 5vh;
          flex-direction: column;
          justify-content: flex-start;
        }

        .left {
          align-items: center;
        }

        .right {
          font-family: ${theme.textFont};
          color: ${theme.textColor};
          line-height: 2em;
          padding-right: 20em;
        }

        .title {
          font-size: 2rem;
          margin-bottom: 1em;
        }

        .title, .subtitle {
          font-family: ${theme.titleFont};
          text-transform: uppercase;
          letter-spacing: .2em;
        }

      `}</style>
    </>
  );
}
