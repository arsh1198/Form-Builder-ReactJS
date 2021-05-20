import {
  CheckboxGroup,
  Checkbox,
  HStack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

const getCheckBox = ({ id, values, label, disabled }) => {
  return values.map(text => (
    <Checkbox
      isDisabled={disabled}
      _disabled={{
        color: 'black'
      }}
      id={id}
      key={id}
      name={label}
      value={text.toLowerCase()}
    >
      {text}
    </Checkbox>
  ))
}

const CheckboxBlock = ({ id, label, values, required, checked, disabled }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <CheckboxGroup defaultValue={checked}>
        <HStack spacing={4} mt={4}>
          {getCheckBox({ id, values, label })}
        </HStack>
      </CheckboxGroup>
    </FormControl>
  )
}

export default CheckboxBlock
