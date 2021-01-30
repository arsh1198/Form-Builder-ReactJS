import { Box, Heading } from '@chakra-ui/react'

const HeadingBlock = ({ value }) => {
  return (
    <Box>
      <Heading size="lg">{value}</Heading>
    </Box>
  )
}

export default HeadingBlock
