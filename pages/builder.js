import { Box, Center, Flex, List, ListItem, Text } from '@chakra-ui/react'
import BlocksSidebar from '../components/BlocksSidebar'
import { BuilderContext } from '../contexts/builderContext'
import Block from '../components/Block'
import { useContext } from 'react'

function getBlocks(blocksArr) {
  const { deleteBlock } = useContext(BuilderContext)
  return blocksArr.map((data, index) => {
    return (
      <ListItem>
        <Block
          data={data}
          deleteable
          onDelete={() => {
            deleteBlock(index)
          }}
        />
      </ListItem>
    )
  })
}

export default function Builder() {
  const { blocks } = useContext(BuilderContext)
  return (
    <Box h="100vh">
      <Flex h="100%" borderWidth={2}>
        <Box flexGrow={1} overflowY="auto">
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
              {blocks.length === 0 ? (
                <Center>
                  <Text
                    boxShadow="lg"
                    color="#008080"
                    p={4}
                    bg="#fff"
                    borderRadius="md"
                    fontWeight="bold"
                    borderWidth={1}
                    borderColor="#008080"
                  >
                    You Need to Add Some Form Controls!
                  </Text>
                </Center>
              ) : (
                <form>
                  <List spacing={2}>{getBlocks(blocks)}</List>
                </form>
              )}
            </Box>
          </Center>
        </Box>
        <Box overflowY="auto" boxShadow="lg" h="100%" w="18rem">
          <BlocksSidebar />
        </Box>
      </Flex>
    </Box>
  )
}
