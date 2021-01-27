import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import BuilderProvider from "../contexts/builderContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <BuilderProvider>
        <Component {...pageProps} />
      </BuilderProvider>
    </ChakraProvider>
  );
}

export default MyApp;
