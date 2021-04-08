import Form from '../components/Form'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ViewForm = () => {
  const { userId, formId } = useParams()
  const [blocks, setBlocks] = useState([])

  const fetchForm = useCallback(
    formId => {
      const formRef = firebase
        .firestore()
        .collection('users')
        .doc(userId)
        .collection('forms')
        .doc(formId)
      formRef
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
    },
    [userId]
  )

  useEffect(() => {
    fetchForm(formId)
  }, [fetchForm, formId])

  return <Form blocks={blocks} id={formId} />
}

export default ViewForm
