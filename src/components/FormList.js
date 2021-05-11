import Card from './Card'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { useHistory } from 'react-router'
import { Flex } from '@chakra-ui/layout'

const FormList = props => {
  const history = useHistory()

  const handleClick = id => {
    history.push(`/builder/${id}`)
  }

  return (
    <Flex {...props}>
      <Card onClick={props.modalTrigger}>
        <BsFillPlusSquareFill style={{ marginRight: 8 }} /> Create a Test
      </Card>
      {props.formIDs
        ? props.formIDs?.map(id => (
            <Card key={id} onClick={() => handleClick(id)}>
              {id}
            </Card>
          ))
        : null}
    </Flex>
  )
}

export default FormList
