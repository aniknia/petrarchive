import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from "../components/general/layout";
import PetrProvider from "../components/provider/petrprovider";
import SearchProvider from "../components/provider/searchprovider";
import AccountProvider from "../components/provider/accountprovider";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <AccountProvider>
          <PetrProvider>
            <SearchProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SearchProvider>
          </PetrProvider>
        </AccountProvider>
      </ChakraProvider>
    </>
  );
}
