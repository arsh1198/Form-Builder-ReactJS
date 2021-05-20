import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const InputBlock = ({
  id,
  label,
  placeholder,
  inputType,
  required,
  value,
  disabled
}) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <Input
        disabled={disabled}
        _disabled={{
          color: 'black'
        }}
        value={value}
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
