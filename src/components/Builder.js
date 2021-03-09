import { Box, Center, Flex, List, ListItem, Text } from '@chakra-ui/react'
import BlocksSidebar from './BlocksSidebar'
import { BuilderContext } from '../contexts/builderContext'
import Block from './Block'
import { useContext } from 'react'

export default function Builder() {
  const { blocks, deleteBlock } = useContext(BuilderContext)

  function getBlocks(blocksArr) {
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

  return (
    <Box height="100%">
      <Flex h="100%">
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
