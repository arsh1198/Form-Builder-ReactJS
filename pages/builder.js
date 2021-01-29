import { Box, Center, Flex, Text } from '@chakra-ui/react'
import BlocksSidebar from '../components/BlocksSidebar'
import { BuilderContext } from '../contexts/builderContext'
import Block from '../components/Block'
import { useContext } from 'react'

function getBlocks(blocksArr) {
  return blocksArr.map(data => {
    return <Block data={data} deleteable />
  })
}

export default function Builder() {
  const { blocks } = useContext(BuilderContext)
  console.log('chittad => ', blocks)
  return (
    <Box>
      <Flex>
        <Box p={5} h="100vh" bg="#fefefe" flex={1}>
          <Center>
            <Box p={4} minW="30%" maxW="70%" borderWidth={3} borderRadius="lg">
              {blocks.length === 0 ? (
                <Center>
                  <Text fontWeight="bold" color="#5f5f5f">
                    You Need to Add Some Form Controls!
                  </Text>
                </Center>
              ) : (
                <form>{getBlocks(blocks)}</form>
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
