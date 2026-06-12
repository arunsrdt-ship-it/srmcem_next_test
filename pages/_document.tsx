import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon configuration */}
        <link rel="icon" type="image/svg+xml" href="/assets/favi-icon.png" />
        <link rel="icon" href="https://training.srdt.co.in/assets/favi-icon.png" type="image/x-icon" />
        <link rel="icon" href="https://training.srdt.co.in/assets/favi-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://training.srdt.co.in/assets/favi-icon.png" />
        
        {/* Fonts preconnect and stylesheets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Playfair+Display:ital,wght@1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
