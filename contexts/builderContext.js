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
  }
}

const BuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { blocks } = state
  const pushHeading = value => {
    dispatch({
      type: 'PUSH_BLOCK',
      payload: { type: 'Heading', value }
    })
  }
  const pushInput = label => {
    dispatch({
      type: 'PUSH_BLOCK',
      payload: { type: 'Input', label }
    })
  }
  // const pushRGroup = (label) => {
  //   dispatch({
  //     type: "PUSH_BlOCK",
  //     payload: {type: "RadioGroup", label, values:[]}
  //   })
  // }
  // const pushRValues = (value, label) => {
  //     if (state.blocks.find(obj => obj.label === label)){
  //       dispatch({
  //         type: "PUSH_VALUE",
  //         payload: value
  //       })
  //     }
  // }

  return (
    <BuilderContext.Provider value={{ blocks, pushHeading, pushInput }}>
      {children}
    </BuilderContext.Provider>
  )
}

export default BuilderProvider
