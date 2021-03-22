import {
  CheckboxGroup,
  Checkbox,
  HStack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

const getCheckBox = (values, label) => {
  return values.map(text => (
    <Checkbox name={label} value={text.toLowerCase()}>
      {text}
    </Checkbox>
  ))
}

const CheckboxBlock = ({ label, values, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <CheckboxGroup>
        <HStack spacing={4} mt={4}>
          {getCheckBox(values, label)}
        </HStack>
      </CheckboxGroup>
    </FormControl>
  )
}

export default CheckboxBlock
