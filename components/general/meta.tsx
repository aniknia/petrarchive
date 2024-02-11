import Head from "../../node_modules/next/head";
import Script from "../../node_modules/next/script";

export default function Meta() {
  return (
    <>
      <Head>
        <title>Petr Archive</title>
        <meta name="description" content="An archive of the UCI Petrs" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <script async src="https://umami.petrarchive.com/script.js" data-website-id="a0a6d89f-bfa3-4ea9-9815-d41a90398512"></script>
    </>
  );
}
