import { Box, Center, List, Button } from '@chakra-ui/react'
import Block from './Block'
import Loading from './Loading'

function getBlocks(blocksArr) {
  return blocksArr.map((data, index) => {
    return <Block key={index} data={data} />
  })
}

export default function Form({ blocks }) {
  return blocks.length > 0 ? (
    <Center>
      <Box
        my={4}
        borderWidth={1}
        borderColor="#008080"
        bg="#E6FFFA"
        p={4}
        minW="30%"
        maxW="70%"
        boxShadow="sm"
        borderRadius="lg"
      >
        <form>
          <List spacing={2}>{getBlocks(blocks)}</List>
          <Button float="right" mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  ) : (
    <Loading />
  )
}
