import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import BuilderProvider from "../contexts/builderContext";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
