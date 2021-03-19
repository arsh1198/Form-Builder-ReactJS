import { Box, Center, Flex, List, ListItem } from '@chakra-ui/react'
import BlocksSidebar from './BlocksSidebar'
import { BuilderContext } from '../contexts/builderContext'
import Block from './Block'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import Loading from './Loading'

export default function Builder() {
  const { blocks, deleteBlock, getForm, loading } = useContext(BuilderContext)
  const { formId } = useParams()

  useEffect(() => {
    if (formId) getForm(formId)
  }, [formId, getForm])

  function getBlocks(blocksArr) {
    if (blocksArr) {
      return blocksArr.map((data, index) => {
        return (
          <ListItem>
            <Block
              data={data}
              deleteable={data.type !== 'Title'}
              onDelete={() => {
                deleteBlock(index)
              }}
            />
          </ListItem>
        )
      })
    }
  }

  return (
    <Box height="100%" width="100%">
      <Flex height="100%" width="100%">
        <Box height="100%" flexGrow={1} overflowY="auto">
          <Center>
            {loading ? (
              <Loading />
            ) : (
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
                </form>
              </Box>
            )}
          </Center>
        </Box>
        <Box overflowY="auto" boxShadow="lg" h="100%" w="18rem">
          <BlocksSidebar id={formId} />
        </Box>
      </Flex>
    </Box>
  )
}
