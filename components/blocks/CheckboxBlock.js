import {
  CheckboxGroup,
  Checkbox,
  Box,
  HStack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

const getCheckBox = values => {
  return values.map(text => (
    <Checkbox value={text.toLowerCase()}>{text}</Checkbox>
  ))
}

const CheckboxBlock = ({ label, values, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <CheckboxGroup>
        <HStack spacing={4} mt={4}>
          {getCheckBox(values)}
        </HStack>
      </CheckboxGroup>
    </FormControl>
  )
}

export default CheckboxBlock
