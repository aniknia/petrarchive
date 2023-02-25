import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from "../components/general/layout";
import PetrProvider from "../components/provider/petrprovider";
import SearchProvider from "../components/provider/searchprovider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <SearchProvider>
          <PetrProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PetrProvider>
        </SearchProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
