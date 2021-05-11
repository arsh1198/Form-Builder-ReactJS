import {
  RadioGroup,
  Radio,
  Stack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

function getRadio({ id, values, label }) {
  return values.map((text, index) => (
    <Radio id={id} key={index} name={label} value={text}>
      {text}
    </Radio>
  ))
}

const RadioBlock = ({ id, label, values, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup mt={4}>
        <Stack>{getRadio({ id, values, label })}</Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default RadioBlock
