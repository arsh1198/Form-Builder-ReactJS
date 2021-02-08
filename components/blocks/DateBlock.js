import { FormLabel } from '@chakra-ui/react'

const DateBlock = ({ label }) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <input style={{ width: '100%', padding: 2 }} type="date" />
    </>
  )
}
export default DateBlock
