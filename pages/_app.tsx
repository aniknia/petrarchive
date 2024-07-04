import { ChakraProvider } from "@chakra-ui/react";
import { PrimeReactProvider } from 'primereact/api';
import Layout from "../components/general/layout";
import PetrProvider from "../components/provider/petrprovider";
import AccountProvider from "../components/provider/accountprovider";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <PrimeReactProvider>
          <AccountProvider>
            <PetrProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PetrProvider>
          </AccountProvider>
        </PrimeReactProvider>
      </ChakraProvider>
    </>
  );
}