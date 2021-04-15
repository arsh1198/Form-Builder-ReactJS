import { Box, Flex } from '@chakra-ui/layout'
import Logo from './Logo'
import UserDropDown from './UserDropDown'

const Header = ({ children }) => {
  return (
    <Box height="100vh" width="100vw" overflowX="auto" overflowY="hidden">
      <nav>
        <Flex
          px="4"
          direction="row"
          background="#008080"
          height="60px"
          width="100vw"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo size={35} />
          <UserDropDown userName="Baloongda" />
        </Flex>
      </nav>
      {children}
    </Box>
  )
}

export default Header
