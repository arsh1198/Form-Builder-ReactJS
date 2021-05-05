import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const InputBlock = ({ id, label, placeholder, inputType, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <Input
        id={id}
        name={label}
        type={inputType}
        size="sm"
        placeholder={placeholder}
      ></Input>
    </FormControl>
  )
}

export default InputBlock
