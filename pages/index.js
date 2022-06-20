import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>iHealth Global</title>
        <link rel="icon" href="/images/ihealth-black.ico" />
      </Head>

      <main>
        <div style={{borderRadius: '10px', overflow: 'hidden'}}>
          <Image src="/images/ihealth-black.jpg" height={240} width={240} alt="iHealth Global" />
        </div>
        <h1 className="title">
          NMN iHealth Global
        </h1>
        <h1 className="description">
          Science Against Aging
        </h1>

        <p className="description">
          Everyone Should Enjoy A Healthy Life!
        </p>

        <div className="grid">
          <span className="card"><img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" height={30} width={20}/>
            <h3>Discover the power of NMN &rarr;</h3>
            <p>NMN(Nicotinamide MonoNucleotide) is the first scientific research result that has been scientifically proven to reverse age and prolong life.</p>
            <p>We have the determination to work together with the mission of improving health for people.</p>
            <p>Healthy Living with NMN iHealth Global</p>
            <p>Click here to learn more</p>
          </span>

          <span className="card"><img alt="China" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg" height={30} width={20}/>
            <h3>歡迎來到 iHealth NMN &rarr;</h3>
            <p>這裡是最完整的中文NMN網站，提供您最充分的NMN資訊和最優質的NMN產品</p>

            <p>iHealth Innovation Tech Corp (IITC) 愛健康研發並製造出全球唯一取得十大權威性認證的NMN基因膠囊，通過跨境電商的營運模式，將最優異的NMN產品帶到50個國家!</p>
            <p>也歡迎訂閱部落格，我們會即時更新NMN最新的研究進展，讓您吃的安心、用的放心!</p>
          </span>

         
        </div>
      </main>

      <footer>
        
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
