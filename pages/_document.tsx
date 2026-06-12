import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="icon" href="https://srmcem.ac.in/favicon.png" type="image/x-icon" />
        <link rel="icon" href="https://srmcem.ac.in/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://srmcem.ac.in/favicon.png" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="SRMCEM has achieved distinction for its value-based institutional culture. Focus on in-depth knowledge and employability enhancement goes hand in hand at SRMCEM. SRMCEM is affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow."
        />
        <meta name="author" content="SRMCEM" />
        <meta name="keywords" content="SRMCEM, Engineering College, Lucknow, AKTU, BTech, MCA, Engineering, Management" />

        {/* Google Tag Manager */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-K5ZLKB8Z');`,
          }}
        /> */}
        {/* End Google Tag Manager */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K5ZLKB8Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        {/* End Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
