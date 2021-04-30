import { Box, Flex } from '@chakra-ui/layout'
import Logo from './Logo'
import UserDropDown from './UserDropDown'
import { useAuth } from '../../contexts/authContext'

const Header = props => {
  const { localUser } = useAuth()
  return (
    <Box
      {...props}
      height="100vh"
      width="100vw"
      overflowX="auto"
      overflowY="hidden"
    >
      <nav>
        <Flex
          boxShadow="md"
          px="4"
          direction="row"
          background="#008080"
          height="60px"
          width="100vw"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo size={35} />
          <UserDropDown userName={localUser.displayName} />
        </Flex>
      </nav>
      {props.children}
    </Box>
  )
}

export default Header
