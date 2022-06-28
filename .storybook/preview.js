import * as NextImage from 'next/image'
import { WalletProvider } from '../components/WalletProvider'
import { theme } from '../theme'

// de-optimize Image component
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  chakra: {
    theme,
  },
}

export const decorators = [
  (Story) => (
    <WalletProvider>
      <Story />
    </WalletProvider>
  ),
]
