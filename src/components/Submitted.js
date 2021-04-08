import { Button } from '@chakra-ui/button'
import { Flex, Heading } from '@chakra-ui/layout'
import { useHistory } from 'react-router'

const Submitted = ({ navigateTo }) => {
  const history = useHistory()
  return (
    <Flex alignItems="center" justifyContent="center">
      <Heading>Your Response has been Recorded!</Heading>
      <Button
        onClick={() => {
          history.replace(navigateTo)
        }}
      >
        Submit Another Response
      </Button>
    </Flex>
  )
}

export default Submitted
