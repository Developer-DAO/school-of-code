import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { WalletProvider } from '../components/WalletProvider'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  )
}

export default MyApp
