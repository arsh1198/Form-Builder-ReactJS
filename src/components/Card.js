import { Button } from '@chakra-ui/button'

const Card = props => {
  return (
    <Button
      {...props}
      variant="outline"
      colorScheme="teal"
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
