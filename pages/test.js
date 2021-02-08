import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import DatePicker from '../components/blocks/DatePicker/DatePicker'
import LoginForm from '../components/LoginForm'

export default function Test() {
  const [selected, setSelected] = useState()
  return (
    <Box>
      <input type="date" />
    </Box>
  )
}
