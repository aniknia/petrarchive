import Head from "../node_modules/next/head";

export default function Meta() {
  return (
    <>
      <Head>
        <title>Petr Archive</title>
        <meta name="description" content="An archive of the UCI Petrs" />
        <link rel="icon" href="favicon.ico" />
        <script
          async
          defer
          data-website-id="b1a27733-c8c6-44f8-b966-edbb68af40db"
          src="https://analytics.petrarchive.io/umami.js"
        ></script>
      </Head>
    </>
  );
}
