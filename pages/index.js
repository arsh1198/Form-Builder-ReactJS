import {
  Link,
  HStack,
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  Button
} from '@chakra-ui/react'
import LoginForm from '../components/LoginForm'
import { FaGoogle } from 'react-icons/fa'
import { useMemo, useState } from 'react'
import AnimatedText from '../components/AnimatedText'

export default function Home() {
  const [signUpMode, setSignUp] = useState(false)
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

          <LoginForm mode={signUpMode ? 'Sign Up' : 'Sign In'} />
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
