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
        data-website-id="a6b6959f-c861-405e-b3af-2114df1e0e7f"
        src="https://analytics.petrarchive.io/umami.js"
      ></Script>
    </>
  );
}
