import { Box, RadioGroup, Radio, Stack, FormLabel } from '@chakra-ui/react'

function getRadio(values) {
  return values.map((text, index) => (
    <Radio value={`${index + 1}`}>{text}</Radio>
  ))
}

const RadioBlock = ({ label, values, selected }) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <RadioGroup mt={4} defaultValue={`${selected + 1}`}>
        <Stack>{getRadio(values)}</Stack>
      </RadioGroup>
    </>
  )
}

export default RadioBlock
