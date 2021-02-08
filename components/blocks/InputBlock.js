import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react'

const InputBlock = ({ label, placeholder, inputType, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <Input type={inputType} size="sm" placeholder={placeholder}></Input>
    </FormControl>
  )
}

export default InputBlock
