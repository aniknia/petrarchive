import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from "../components/layout";
import PetrProvider from "../components/provider/petrprovider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <PetrProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PetrProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
