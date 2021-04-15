import { Text } from '@chakra-ui/layout'

const Logo = ({ size }) => (
  <Text
    userSelect="none"
    textShadow="-2px 2px 0px rgba(150,150,150,1)"
    fontWeight="bold"
    color="#E6FFFA"
    fontSize={size}
  >
    Form-Builder
  </Text>
)

export default Logo
