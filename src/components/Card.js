import { Button } from '@chakra-ui/button'

const Card = props => {
  return (
    <Button
      variant="outline"
      colorScheme="teal"
      {...props}
      className="card"
      bg="#EDF2F7"
      borderRadius="lg"
      h="200px"
      w="275px"
      m="16px"
    >
      {props.children}
    </Button>
  )
}

export default Card
