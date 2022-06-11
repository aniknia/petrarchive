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
          data-website-id="a6b6959f-c861-405e-b3af-2114df1e0e7f"
          src="https://analytics.petrarchive.io/umami.js"
        ></script>
      </Head>
    </>
  );
}
