import { Box, Center, List, Button } from '@chakra-ui/react'
import Block from '../components/Block'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../contexts/authContext'
import { useParams } from 'react-router'
import Loading from '../components/Loading'

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

  const pushResponse = () => {}

  useEffect(() => {
    fetchForm(id)
  }, [fetchForm, id])

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
        <form>
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
