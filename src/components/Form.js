import { Box, Center, List, Button } from '@chakra-ui/react'
import { useRef } from 'react'
import Block from './Block'
import Loading from './Loading'
import firebase from 'firebase/app'
import { useAuth } from '../contexts/authContext'
import { useHistory } from 'react-router'

function getBlocks(blocksArr) {
  return blocksArr.map((data, index) => {
    return <Block key={index} data={data} />
  })
}

export default function Form({ blocks, id }) {
  const formRef = useRef(null)
  const { user } = useAuth()
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()

    const response = Array.from(formRef.current).map(el => {
      if (el.type === 'checkbox' || el.type === 'radio') {
        return {
          type: el.type,
          name: el.name,
          value: el.value,
          checked: el.checked
        }
      } else
        return {
          type: el.type,
          name: el.name,
          value: el.value
        }
    })

    response.splice(response.length - 1, response.length)

    const responsesRef = await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('forms')
      .doc(id)
      .collection('responses')

    responsesRef
      .add({
        date: new Date(),
        response: response
      })
      .then(e => {
        console.log('Submitted =>', e)
      })
      .catch(error => error.message)
  }

  if (blocks)
    return blocks.length > 0 ? (
      <Center>
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
          <form
            ref={formRef}
            onSubmit={e => {
              handleSubmit(e).then(() => {
                history.replace('/')
              })
            }}
          >
            <List spacing={2}>{getBlocks(blocks)}</List>
            <Button float="right" mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Center>
    ) : (
      <Loading />
    )
}
