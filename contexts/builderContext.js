import { createContext, useReducer } from 'react'
import React from 'react'

export const BuilderContext = createContext()

const initialState = {
  blocks: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'PUSH_BLOCK':
      return { ...state, blocks: [...state.blocks, action.payload] }
    case 'DELETE_BLOCK':
      return { ...state, blocks: action.payload }
  }
}

const BuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { blocks } = state

  const pushBlock = data => {
    dispatch({
      type: 'PUSH_BLOCK',
      payload: data
    })
  }

  const deleteBlock = index => {
    const tempData = [...blocks]
    tempData.splice(index, 1)
    dispatch({ type: 'DELETE_BLOCK', payload: tempData })
  }

  return (
    <BuilderContext.Provider value={{ pushBlock, deleteBlock, blocks }}>
      {children}
    </BuilderContext.Provider>
  )
}

export default BuilderProvider
