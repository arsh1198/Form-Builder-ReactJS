import { Box, Flex, HStack } from '@chakra-ui/layout'
import { useHistory } from 'react-router-dom'

const FormList = ({ formIDs }) => {
  const history = useHistory()
  return (
    <Flex width="500px" overflowX="auto">
      <HStack>
        {formIDs
          ? formIDs.map(id => (
              <Box
                onClick={() => {
                  history.push(`/builder/${id}`)
                }}
              >
                {id}
              </Box>
            ))
          : null}
      </HStack>
    </Flex>
  )
}

export default FormList
