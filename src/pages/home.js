import { Box, Center, Flex, useDisclosure } from '@chakra-ui/react'
import { useAuth } from '../contexts/authContext'
import firebase from 'firebase/app'
import 'firebase/auth'
import Loading from '../components/Loading'
import FormList from '../components/FormList'
import { useEffect, useState } from 'react'
import TitleModal from '../components/TitleModal'
import Header from '../components/Header'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuth()
  const [formIds, setFormIds] = useState([])

  useEffect(() => {
    const formsRef = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('forms')

    const unsubscribe = formsRef.onSnapshot(snapshot => {
      const updatedForms = snapshot.docs.map(snapshot => snapshot.id)
      setFormIds(updatedForms)
    })

    return () => unsubscribe()
  }, [user.uid])

  return user.email ? (
    <Header>
      <Box h="100%" w="100%">
        <Box
          h="40%"
          background="#E6FFFA"
          borderBottom="2px"
          borderColor="teal"
        />
        <Center>
          <Flex w="80%" h="100%" alignItems="center" justifyContent="center">
            <FormList
              marginTop="-100px"
              formIDs={formIds}
              modalTrigger={onOpen}
            />
          </Flex>
        </Center>
      </Box>
      <TitleModal isOpen={isOpen} onClose={onClose} />
    </Header>
  ) : (
    <Loading />
  )
}

export default Home
