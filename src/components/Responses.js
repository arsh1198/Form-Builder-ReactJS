import { Button } from '@chakra-ui/button'
import { Flex, Text, VStack } from '@chakra-ui/layout'

const ResponseCard = props => {
  return (
    <Button
      className="responseCard"
      {...props}
      bg="#EDF2F7"
      borderRadius="lg"
      h="200px"
      w="275px"
      m="16px"
    >
      <VStack>
        <Text fontSize={18}>Test ID or Something</Text>
        <Text fontSize={12}>11 minutes ago</Text>
      </VStack>
    </Button>
  )
}

const Responses = () => {
  return (
    <Flex w="100%" alignItems="center" justifyContent="center" flexWrap="wrap">
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
    </Flex>
  )
}

export default Responses
