import { useState } from 'react'

const useResponse = () => {
  const [response, setResponse] = useState('')
  return { response, setResponse }
}

export default useResponse
