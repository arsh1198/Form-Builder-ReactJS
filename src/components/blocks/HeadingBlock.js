import { Heading } from '@chakra-ui/react'

const HeadingBlock = ({ value }) => {
  return (
    <Heading
      py={1}
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}
      size="md"
      title={value}
    >
      {value}
    </Heading>
  )
}

export default HeadingBlock
