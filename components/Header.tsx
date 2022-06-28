import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Flex } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex
      m="40px"
      mx="10%"
      display="flex"
      direction="row"
      align="center"
      justify="space-between"
    >
      <Image
        src="/logo.svg"
        width={303}
        height={60}
        alt="DEVELOPER DAO LOGO - SCHOOL OF CODE"
      />
      <ConnectButton chainStatus="none" showBalance={false} />
    </Flex>
  )
}
