import {
  RadioGroup,
  Radio,
  Stack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

function getRadio(values, label) {
  return values.map(text => (
    <Radio name={label} value={text}>
      {text}
    </Radio>
  ))
}

const RadioBlock = ({ label, values, selected, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup mt={4} defaultValue={`${selected + 1}`}>
        <Stack>{getRadio(values, label)}</Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default RadioBlock
