import { useRouter } from 'next/router'
import { Box, Center, List, Button } from '@chakra-ui/react'
import Block from '../../components/Block'
import dummyDb from '../../dummyDb'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/authContext'

function getBlocks(blocksArr) {
  return blocksArr.map((data, index) => {
    return <Block key={index} data={data} />
  })
}

export default function Form() {
  const router = useRouter()
  const { formId } = router.query
  const { user } = useAuth()
  const [blocks, setBlocks] = useState([])
  const formRef = firebase
    .firestore()
    .collection('users')
    .doc(user.uid)
    .collection('forms')
    .doc(formId)

  formRef
    .get()
    .then(doc => {
      if (doc.exists) {
        setBlocks(doc.data().form)
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    })
    .catch(error => {
      console.log('Error getting document:', error)
    })

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
