import { Box, Center, List, Button } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import Block from './Block'
import Loading from './Loading'
import firebase from 'firebase/app'
import { useAuth } from '../contexts/authContext'
import { useHistory, useParams } from 'react-router'

function getBlocks(blocksArr) {
  return blocksArr.map((data, index) => {
    return <Block key={index} data={data} />
  })
}

export default function Form({ showResponses }) {
  const formRef = useRef(null)
  const { user } = useAuth()
  const history = useHistory()

  const { userId, formId } = useParams()
  const [blocks, setBlocks] = useState([])

  const fetchForm = useCallback(
    formId => {
      const formSnapshot = firebase
        .firestore()
        .collection('users')
        .doc(userId)
        .collection('forms')
        .doc(formId)
      formSnapshot
        .get()
        .then(doc => {
          if (doc.exists) {
            setBlocks(doc.data().form)
            console.log('chla reyy!!')
          } else {
            console.log('No such document!')
          }
        })
        .catch(error => {
          console.log('Error getting document:', error)
        })
    },
    [userId]
  )

  useEffect(() => {
    fetchForm(formId)
  }, [fetchForm, formId])

  const handleSubmit = async e => {
    e.preventDefault()

    const response = Array.from(formRef.current).map(el => {
      console.log(el)
      if (el.type === 'checkbox' || el.type === 'radio') {
        return {
          id: el.id,
          type: el.type,
          name: el.name,
          value: el.value,
          checked: el.checked
        }
      } else
        return {
          id: el.id,
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
      .doc(formId)
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
