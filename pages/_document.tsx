import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon configuration */}
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.png" />
        <link rel="icon" href="https://srmcem.ac.in/assets/srmcem_head_logo-BN0LEybD.png" type="image/x-icon" />
        <link rel="icon" href="https://srmcem.ac.in/assets/srmcem_head_logo-BN0LEybD.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://srmcem.ac.in/assets/srmcem_head_logo-BN0LEybD.png" />



      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
