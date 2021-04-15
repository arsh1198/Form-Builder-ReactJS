import { Flex, Button, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import firebase from 'firebase/app'
import 'firebase/auth'
import Loading from '../components/Loading'
import FormList from '../components/FormList'
import { useEffect, useState } from 'react'
import TitleModal from '../components/TitleModal'
import Header from '../components/Header'

const getUserForms = async uid => {
  const formsRef = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('forms')
  return formsRef.get().then(snapshot =>
    snapshot.docs.map(({ id }) => {
      return id
    })
  )
}

const Home = () => {
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuth()
  const [formIds, setFormIds] = useState()

  useEffect(() => {
    getUserForms(user.uid).then(ids => setFormIds(ids))
  }, [])

  return user.email ? (
    <Header>
      <Flex justifyContent="center" alignItems="center" h="100%" w="100%">
        <Stack w="100">
          <FormList formIDs={formIds} />
          <Text> {user ? user.email : 'Not Found'}</Text>
          <Button onClick={onOpen}>Create a Form</Button>
          <Button>Logout</Button>
        </Stack>
        <TitleModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Header>
  ) : (
    <Loading />
  )
}

export default Home
