import { Box, Center, List, Button } from '@chakra-ui/react'
import Block from '../components/Block'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../contexts/authContext'
import { useParams } from 'react-router'

function getBlocks(blocksArr) {
  return blocksArr.map((data, index) => {
    return <Block key={index} data={data} />
  })
}

export default function Form() {
  const { id } = useParams()
  const { user } = useAuth()
  const [blocks, setBlocks] = useState([])

  const fetchForm = useCallback(
    id => {
      const formRef = firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .collection('forms')
        .doc(id)
      formRef
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
    [user.uid]
  )

  useEffect(() => {
    fetchForm(id)
  }, [fetchForm, id])

  return (
    <Center>
      <Box
        bg="#E6FFFA"
        borderWidth={1}
        borderColor="#008080"
        borderRadius="lg"
        p={4}
        my={4}
        maxWidth="40rem"
      >
        <form>
          <List spacing={2}>{getBlocks(blocks)}</List>
          <Button float="right" mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  )
}
