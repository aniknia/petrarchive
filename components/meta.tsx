import Head from "../node_modules/next/head";
import Script from "../node_modules/next/script";

export default function Meta() {
  return (
    <>
      <Head>
        <title>Petr Archive</title>
        <meta name="description" content="An archive of the UCI Petrs" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Script
        async
        defer
        data-website-id="3cd18249-8e44-48b9-a9b6-74c380dba0ac"
        src="https://umami.niknia.dev/umami.js"
      ></Script>
    </>
  );
}
