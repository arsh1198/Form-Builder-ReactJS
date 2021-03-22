import { Box, Center, List, Button } from '@chakra-ui/react'
import { useRef } from 'react'
import Block from './Block'
import Loading from './Loading'

function getBlocks(blocksArr) {
  return blocksArr.map((data, index) => {
    return <Block key={index} data={data} />
  })
}

export default function Form({ blocks }) {
  const formRef = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()

    console.log(
      Array.from(formRef.current).map(el => {
        if (el.type === 'checkbox' || el.type === 'radio') {
          return el.checked ? el.checked : null
        }
      })
    )
  }

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
        <form ref={formRef} onSubmit={handleSubmit}>
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
