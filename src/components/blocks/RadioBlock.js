import {
  RadioGroup,
  Radio,
  Stack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

function getRadio({ id, values, label, disabled }) {
  return values.map((text, index) => (
    <Radio
      _disabled={{
        opacity: 1
      }}
      isDisabled={disabled}
      id={id}
      key={index}
      name={label}
      value={text}
    >
      {text}
    </Radio>
  ))
}

const RadioBlock = ({ id, label, values, required, checked, disabled }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup mt={4} defaultValue={checked}>
        <Stack>{getRadio({ id, values, label, disabled })}</Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default RadioBlock
