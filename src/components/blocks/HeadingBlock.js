import { Heading } from '@chakra-ui/react'

const HeadingBlock = ({ value }) => {
  return (
    <Heading
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}
      size="lg"
      title={value}
    >
      {value}
    </Heading>
  )
}

export default HeadingBlock
