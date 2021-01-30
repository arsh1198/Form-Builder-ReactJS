import { Box, Center, Flex, List, ListItem, Text } from '@chakra-ui/react'
import BlocksSidebar from '../components/BlocksSidebar'
import { BuilderContext } from '../contexts/builderContext'
import Block from '../components/Block'
import { useContext } from 'react'

function getBlocks(blocksArr) {
  return blocksArr.map(data => {
    return (
      <ListItem>
        <Block data={data} deleteable />
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
        <Box p={5} h="100vh" flex={1}>
          <Center>
            <Box
              bg="#008080"
              p={4}
              minW="30%"
              maxW="70%"
              boxShadow="lg"
              borderRadius="lg"
            >
              {blocks.length === 0 ? (
                <Center>
                  <Text p={4} bg="#fff" borderRadius="md" fontWeight="bold">
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
