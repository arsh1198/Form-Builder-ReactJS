import { Box, Center, List } from '@chakra-ui/react'
import Block from '../components/Block'
import dummyDb from '../dummyDb'

function getBlocks(blocksArr) {
  return blocksArr.map(data => {
    return <Block data={data} />
  })
}

export default function Form() {
  const blocks = dummyDb.users[0].forms[0]['sample-form'].blocks
  return (
    <Center>
      <Box
        bg="#E6FFFA"
        borderWidth={1}
        borderColor="#008080"
        borderRadius="lg"
        p={4}
        my={4}
        maxWidth="40rem"
      >
        <form>
          <List spacing={2}>{getBlocks(blocks)}</List>
        </form>
      </Box>
    </Center>
  )
}
