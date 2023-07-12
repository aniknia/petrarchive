import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from "../components/general/layout";
import PetrProvider from "../components/provider/petrprovider";
import SearchProvider from "../components/provider/searchprovider";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <PetrProvider>
          <SearchProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SearchProvider>
        </PetrProvider>
      </ChakraProvider>
    </>
  );
}
