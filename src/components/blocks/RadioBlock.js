import {
  RadioGroup,
  Radio,
  Stack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

function getRadio(values) {
  return values.map((text, index) => (
    <Radio value={`${index + 1}`}>{text}</Radio>
  ))
}

const RadioBlock = ({ label, values, selected, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup mt={4} defaultValue={`${selected + 1}`}>
        <Stack>{getRadio(values)}</Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default RadioBlock
