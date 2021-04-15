import { createContext, useCallback, useReducer } from 'react'
import React from 'react'
import firebase from 'firebase/app'
import { useAuth } from './authContext'
import { useHistory } from 'react-router'

export const BuilderContext = createContext()

const initialState = {
  blocks: [],
  id: '',
  loading: false,
  deleted: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'PUSH_BLOCK':
      return { ...state, blocks: [...state.blocks, action.payload] }
    case 'DELETE_BLOCK':
      const tempData = [...state.blocks]
      tempData.splice(action.payload, 1) //removing the submit button
      return { ...state, blocks: tempData }
    case 'PUSH_FORM':
      return { ...state, id: action.payload }
    case 'GET_FORM':
      return { ...state, blocks: action.payload }
    case 'CLEAR_BLOCKS':
      return { ...state, blocks: [] }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'DELETE_FORM':
      return { ...state, deleted: action.payload }
    default:
      return state
  }
}

const BuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { user } = useAuth()
  const { blocks, id, loading, deleted } = state
  const history = useHistory()

  const pushBlock = data => {
    dispatch({
      type: 'PUSH_BLOCK',
      payload: { ...data }
    })
  }

  const deleteBlock = index => {
    dispatch({ type: 'DELETE_BLOCK', payload: index })
  }

  const pushForm = async form => {
    const formsCollection = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('forms')
      .doc()
    const formId = formsCollection.id
    dispatch({ type: 'PUSH_FORM', payload: formId })
    if (form.length > 0) {
      await formsCollection
        .set({
          _id: formId,
          form,
          created_at: new Date()
        })
        .then(() => {
          history.push(`/builder/${formId}`)
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }

  const updateForm = async (form, formId) => {
    const formDoc = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('forms')
      .doc(formId)

    if (blocks.length > 0) {
      await formDoc
        .update({
          form
        })
        .then(() => {
          dispatch({ type: 'PUSH_FORM', payload: formId })
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }

  const deleteForm = async formId => {
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('forms')
      .doc(formId)
      .delete()
      .then(() => {
        console.log(`${formId} deleted!`)
        dispatch({ type: 'DELETE_FORM', payload: true })
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const getForm = useCallback(
    async id => {
      if (user) {
        const collection = firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .collection('forms')
          .doc(id)
        dispatch({ type: 'SET_LOADING', payload: true })

        collection.get().then(form => {
          if (form.exists) {
            dispatch({ type: 'SET_LOADING', payload: false })
            dispatch({ type: 'GET_FORM', payload: form.data().form })
          }
        })
      }
    },
    [user]
  )

  const clearBlocks = () => {
    dispatch({ type: 'CLEAR_BLOCKS' })
  }

  return (
    <BuilderContext.Provider
      value={{
        pushBlock,
        deleteBlock,
        pushForm,
        updateForm,
        blocks,
        id,
        getForm,
        deleteForm,
        clearBlocks,
        loading,
        deleted
      }}
    >
      {children}
    </BuilderContext.Provider>
  )
}

export default BuilderProvider
