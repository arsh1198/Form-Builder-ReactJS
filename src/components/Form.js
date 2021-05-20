import { Box, Center, List, Button } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import Block from './Block'
import Loading from './Loading'
import firebase from 'firebase/app'
import { useAuth } from '../contexts/authContext'
import { useHistory, useParams } from 'react-router'
function getBlocks(blocksArr, showResponses) {
  return blocksArr.map((data, index) => {
    return <Block disabled={showResponses} key={index} data={data} />
  })
}

export default function Form({ showResponses, response }) {
  const formRef = useRef()
  const { user } = useAuth()
  const history = useHistory()

  const { userId, formId } = useParams()
  const [blocks, setBlocks] = useState([])

  const fetchForm = useCallback(() => {
    const formSnapshot = firebase
      .firestore()
      .collection('users')
      .doc(showResponses ? user.uid : userId)
      .collection('forms')
      .doc(formId)
    formSnapshot
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
  }, [showResponses, user.uid, userId, formId])

  const fetchResponse = useCallback(() => {
    console.log('ResponseID => ', response)
    const responseSnapshot = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('forms')
      .doc(formId)
      .collection('responses')
      .doc(response)
    responseSnapshot
      .get()
      .then(doc => {
        if (doc.exists) {
          setBlocks(doc.data().response)
          console.log('response chla reyy!!')
        } else {
          console.log('No such document!')
        }
      })
      .catch(error => {
        console.log('Error getting document:', error)
      })
  }, [user.uid, formId, response])

  useEffect(() => {
    showResponses ? fetchResponse() : fetchForm()
  }, [fetchForm, formId, fetchResponse, showResponses])

  // useEffect(() => {
  //   fetchResponse()
  // }, [fetchResponse])

  const handleSubmit = async e => {
    e.preventDefault()

    const checkboxVals = []
    const temp = Array.from(formRef.current)
      .map(el => {
        switch (el.type) {
          case 'radio':
            if (el.checked === true)
              return {
                id: el.id,
                checked: el.value
              }
            else return undefined

          case 'checkbox':
            if (el.checked === true) {
              checkboxVals.push(el.value)
              return undefined
            }

            return {
              id: el.id,
              checked: checkboxVals
            }
          default:
            return {
              id: el.id,
              value: el.value
            }
        }

        // if (el.type === 'checkbox' || el.type === 'radio') {
        //   if (el.checked === true)
        //     return {
        //       id: el.id,
        //       value: el.value
        //     }
        //   else return undefined
        // } else
        //   return {
        //     type: el.type,
        //     id: el.id,
        //     value: el.value
        //   }
      })
      .filter(val => val !== undefined && val.id !== '')

    const responseObjs = blocks.map(el => {
      if (el.id !== undefined) {
        const found = temp.find(el2 => el2.id === el.id)
        if (found) return { ...el, ...found }
      }
      return el
    })

    console.log('TEMP => ', temp)

    console.log('BLOCKS =>', blocks)

    console.log('RESPONSE =>', responseObjs)

    const responsesRef = await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('forms')
      .doc(formId)
      .collection('responses')

    responsesRef
      .add({
        date: new Date(),
        response: responseObjs
      })
      .then(e => {
        console.log('Submitted =>', e)
      })
      .catch(error => error.message)
  }

  return (
    <Center>
      <Box
        my={4}
        borderWidth={1}
        borderColor="#008080"
        bg="#E6FFFA"
        p={4}
        minW="30vw"
        boxShadow="sm"
        borderRadius="lg"
      >
        <form
          ref={formRef}
          onSubmit={e => {
            handleSubmit(e).then(() => {
              history.replace('/')
            })
          }}
        >
          {blocks.length === 0 && <Loading />}
          {blocks.length && (
            <List spacing={2}>{getBlocks(blocks, showResponses)}</List>
          )}
          {showResponses ? null : (
            <Button float="right" mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          )}
        </form>
      </Box>
    </Center>
  )
}
