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
  console.log('chittad => ', blocks)
  return (
    <Box>
      <Flex>
        <Box h="100vh" flex={1} overflowY="auto">
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
        <Box boxShadow="lg" borderWidth={3} h="100vh" w="18rem">
          <BlocksSidebar />
        </Box>
      </Flex>
    </Box>
  )
}
