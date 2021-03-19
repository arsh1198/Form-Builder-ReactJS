import { Spinner, Flex } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex border={4} h="100vh" alignItems="center" justifyContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal"
        size="xl"
      />
    </Flex>
  )
}

export default Loading
