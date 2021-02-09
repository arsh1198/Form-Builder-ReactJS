import {
  CheckboxGroup,
  Checkbox,
  Box,
  HStack,
  FormLabel
} from '@chakra-ui/react'

const getCheckBox = values => {
  return values.map(text => (
    <Checkbox value={text.toLowerCase()}>{text}</Checkbox>
  ))
}

const CheckboxBlock = ({ label, values }) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <CheckboxGroup>
        <HStack spacing={4} mt={4}>
          {getCheckBox(values)}
        </HStack>
      </CheckboxGroup>
    </>
  )
}

export default CheckboxBlock
