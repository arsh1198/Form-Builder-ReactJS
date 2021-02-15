import { Flex, Button, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/authContext'
import firebase from 'firebase/app'
import 'firebase/auth'

const Home = () => {
  const router = useRouter()
  const { user } = useAuth()
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      borderWidth={4}
      h="100vh"
      w="100%"
    >
      <Stack>
        <Text> {user ? user.email : 'Not Found'}</Text>
        <Button
          onClick={() => {
            router.push('/builder')
          }}
        >
          Create a Form
        </Button>
        <Button
          onClick={async () => {
            await firebase.auth().signOut()
            router.push('/')
          }}
        >
          Logout
        </Button>
      </Stack>
    </Flex>
  )
}

export default Home
