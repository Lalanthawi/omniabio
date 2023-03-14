import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import { idGA } from '../static/document.json';

export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Omnia Biosytems</title>

          <link rel="icon" type="image/png" sizes="16x16" href="static/img/favicons/favicon.png" />
          <meta name="msapplication-TileImage" content="static/img/favicons/favicon.png" />
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />

          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Empowering Life Through Translational Precision Medicine." />
          <meta property="og:description" content="" />
          <meta property="og:url" content="https://omnia.bio" />
          <meta property="og:site_name" content="Omnia Biosytems" />
          <meta property="og:image" content="https://omnia.bio/static/img/meta/og.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@OmniaBiosystems" />
          <meta name="twitter:creator" content="@OmniaBiosystems" />
          <meta name="twitter:title" content="Omnia  Biosystems" />
          <meta name="twitter:description" content="Product Lover • I am looking for freedom, innovation and challenges." />
          <meta name="twitter:image" content="https://omnia.bio/static/img/meta/twitter.jpg" />

          <link rel="stylesheet" href="static/css/fonts.css" />
          <style>{`
            body {
              margin: 0;
              font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
            }
            ul {
              list-style: none;
              padding: 0;
            }
            h1, h2, h4, h5 {
              font-weight: 200;
            }
            h3 {
              font-weight: 300;
            }
            h1, h3 {
              font-size: 36px;
            }
            h2 {
              font-size: 22px;
            }
            h4 {
              font-size: 20px;
            }
            h5 {
              font-size: 30px;
            }
            a {
              text-decoration: none;
            }
          `}</style>
        </Head>
       <body>
         <Main />
         <NextScript />
         <script dangerouslySetInnerHTML={{ __html: `
           (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
           (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
           m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
           })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

           ga('create', '${idGA}', 'auto');
           ga('send', 'pageview');
         `}} />
       </body>
     </html>
    )
  }
}
