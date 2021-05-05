import { Flex } from '@chakra-ui/layout'
import Card from './Card'
import firebase from 'firebase/app'
import { useAuth } from '../contexts/authContext'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

const Responses = () => {
  const { user } = useAuth()
  const { formId } = useParams()
  const [responseIds, setResponseIds] = useState([])

  useEffect(() => {
    const responsesRef = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('forms')
      .doc(formId)
      .collection('responses')

    responsesRef.onSnapshot(
      snapshot => {
        setResponseIds(snapshot.docs.map(doc => doc.id))
      },
      error => {
        console.log(error)
      }
    )
  }, [formId, user.uid])

  return (
    <Flex w="100%" alignItems="center" justifyContent="center" flexWrap="wrap">
      {responseIds.map(id => (
        <Card>{id}</Card>
      ))}
    </Flex>
  )
}

export default Responses
