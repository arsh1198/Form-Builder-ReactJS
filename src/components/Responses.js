import { Flex } from '@chakra-ui/react'
import Card from './Card'
import firebase from 'firebase/app'
import { useAuth } from '../contexts/authContext'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import Form from '../components/Form'

const Responses = () => {
  const { user } = useAuth()
  const { formId } = useParams()
  const [responseIds, setResponseIds] = useState([])
  const [selected, setSelected] = useState(false)
  const [response, setResponse] = useState('')

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
      {!selected ? (
        responseIds.map(resId => (
          <Card
            key={resId}
            onClick={() => {
              setResponse(resId)
              setSelected(prev => !prev)
            }}
          >
            {resId}
          </Card>
        ))
      ) : (
        <Form showResponses response={response} />
      )}
    </Flex>
  )
}

export default Responses
