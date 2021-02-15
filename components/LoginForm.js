import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import firebaseClient from '../firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import AnimatedText from './AnimatedText'
import { useAuth } from '../contexts/authContext'
import { useRouter } from 'next/router'

export default function LoginForm({ mode }) {
  firebaseClient()
  const toast = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { setUser, user } = useAuth()
  const db = firebase.firestore()
  const router = useRouter()

  const signUp = async () => {
    setLoading(true)
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async function () {
        setLoading(false)
        await db
          .collection('users')
          .add({
            email: user.email,
            created: new Date()
          })
          .then(function () {
            router.push('/home')
          })
          .catch(function (error) {
            setLoading(false)
            const message = error.message
            toast({
              title: 'An Error Occured!',
              description: message,
              status: 'error',
              duration: 9000,
              isClosable: true
            })
          })
      })
      .catch(function (error) {
        setLoading(false)
        const message = error.message
        toast({
          title: 'An Error Occured!',
          description: message,
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
  }

  const signIn = async () => {
    setLoading(true)
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        setLoading(false)
        router.push('/home')
      })
      .catch(function (error) {
        setLoading(false)
        const message = error.message
        toast({
          title: 'An Error Occured!',
          description: message,
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
  }

  return (
    <form>
      <Box mt={6}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          ></Input>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          ></Input>
        </FormControl>
      </Box>

      <Button
        mt={8}
        w="full"
        colorScheme="teal"
        variant="outline"
        borderWidth="2px"
        isLoading={loading}
        onClick={mode === 'Sign Up' ? signUp : signIn}
      >
        <AnimatedText text={mode} />
      </Button>
    </form>
  )
}
