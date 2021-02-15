import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import BuilderProvider from '../contexts/builderContext'
import { AuthProvider } from '../contexts/authContext'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <BuilderProvider>
          <Component {...pageProps} />
        </BuilderProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
