import { Flex, Button, Stack, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import firebase from 'firebase/app'
import 'firebase/auth'
import Loading from '../components/Loading'

const Home = () => {
  const history = useHistory()
  const { user } = useAuth()

  return user.email ? (
    <Flex justifyContent="center" alignItems="center" h="100vh" w="100%">
      <Stack>
        <Text> {user ? user.email : 'Not Found'}</Text>
        <Button
          onClick={() => {
            history.push('/builder')
          }}
        >
          Create a Form
        </Button>
        <Button
          onClick={async () => {
            await firebase.auth().signOut()
            history.replace('/login')
          }}
        >
          Logout
        </Button>
      </Stack>
    </Flex>
  ) : (
    <Loading />
  )
}

export default Home
