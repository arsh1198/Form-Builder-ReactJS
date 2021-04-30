import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Link,
  HStack,
  Flex,
  Heading,
  Text,
  Divider
} from '@chakra-ui/react'
import { useState, useMemo } from 'react'
import firebaseClient from '../firebase/firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import AnimatedText from './AnimatedText'
import { FaGoogle } from 'react-icons/fa'
import { useAuth } from '../contexts/authContext'
import { Redirect, useHistory, useLocation } from 'react-router-dom'

export default function LoginForm() {
  firebaseClient()
  const toast = useToast()
  const history = useHistory()
  const location = useLocation()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { user, setUser, localUser, setLocalUser } = useAuth()
  const db = firebase.firestore()
  const [signUpMode, setSignUp] = useState(false)

  const newUser = async user => {
    await db
      .collection('users')
      .doc(user.uid)
      .set({
        email: user.email,
        created: new Date()
      })
      .then(function () {
        history.replace(from)
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

  const HeadingHelperTxt = useMemo(
    () =>
      signUpMode ? (
        <Text mb={2} color="grey" fontSize={14}>
          <AnimatedText text="Create an account, if you dont have one already" />
        </Text>
      ) : (
        <Text mb={2} color="grey" fontSize={14}>
          <AnimatedText text="Login with your registered Email and password" />
        </Text>
      ),
    [signUpMode]
  )

  const { from } = location.state || { from: { pathname: '/' } }

  const signUp = async () => {
    console.log('signing Up!')
    setLoading(true)
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async function (res) {
        firebase
          .auth()
          .currentUser.updateProfile({ displayName })
          .then(setLocalUser({ ...res.user, displayName }))
        newUser(res.user) //adding info to databse
        setLoading(false)
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
      .then(function (res) {
        setUser(res.user)
        setLoading(false)
        history.replace(from)
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

  const googleSignIn = async () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential

        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = credential.accessToken
        // The signed-in user info.
        var user = result.user
        console.log(user)
        setUser(user)
        newUser(user)
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        console.log('error => ', errorCode, errorMessage, email)
        // ...
      })
  }

  if (localUser.displayName) {
    return <Redirect to={from} />
  }

  return (
    <Flex h="100vh">
      <Flex
        direction="column"
        w="30%"
        justifyContent="center"
        alignItems="center"
      >
        <Box w="100%" px={55}>
          <Box mb={12}>
            <Heading mb={2} as="h1" textAlign="left">
              <AnimatedText text={signUpMode ? 'Sign Up' : 'Sign In'} />
            </Heading>
            {HeadingHelperTxt}
            <Divider />
          </Box>

          <form>
            <Box>
              {signUpMode ? (
                <FormControl>
                  <FormLabel>Display Name</FormLabel>
                  <Input
                    mb={4}
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    type="email"
                    placeholder="Email"
                    size="sm"
                  ></Input>
                </FormControl>
              ) : null}
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  size="sm"
                ></Input>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  size="sm"
                ></Input>
              </FormControl>
            </Box>

            <Button
              type="submit"
              mt={8}
              w="full"
              colorScheme="teal"
              variant="outline"
              borderWidth="2px"
              isLoading={loading}
              onClick={signUpMode ? signUp : signIn}
            >
              <AnimatedText text={signUpMode ? 'Sign Up' : 'Sign In'} />
            </Button>
          </form>
          <HStack fontSize={13} mt={4}>
            <AnimatedText
              text={
                signUpMode
                  ? 'Already have an Account ?'
                  : 'Dont have an account ?'
              }
            />
            <Link
              onClick={() => {
                console.log(signUpMode)
                setSignUp(prev => !prev)
              }}
              fontWeight="bold"
              color="#008080"
            >
              <AnimatedText
                text={signUpMode ? 'Sign In Instead' : 'Create One'}
              />
            </Link>
          </HStack>
          <Text
            fontSize={14}
            fontWeight="bold"
            w="100%"
            textAlign="center"
            mt={8}
          >
            Or
          </Text>
          <Divider />
          <Button
            onClick={googleSignIn}
            mt={12}
            w="100%"
            leftIcon={<FaGoogle />}
            bg="#4082ED"
            color="white"
          >
            Sign In with Google
          </Button>
        </Box>
      </Flex>

      <Box bg="#008080" flexGrow={1}>
        <Text
          userSelect="none"
          textShadow="-8px 4px 0px rgba(150,150,150,1)"
          mt={220}
          ml={10}
          fontWeight="bold"
          color="#E6FFFA"
          fontSize={135}
        >
          Form-Builder
        </Text>
      </Box>
    </Flex>
  )
}
