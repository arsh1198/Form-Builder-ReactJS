import { createContext, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [selected, setSelected] = useState(false)

  return (
    <FormContext.Provider value={{ selected, setSelected }}>
      {children}
    </FormContext.Provider>
  )
}
