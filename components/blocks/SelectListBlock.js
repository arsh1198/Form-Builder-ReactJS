import { Box, Select, FormLabel } from '@chakra-ui/react'

const getOptions = values => {
  return values.map(text => <option>{text}</option>)
}

const SelectListBlock = ({ label, values, disabled }) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Select size="sm" mt={4} placeholder="Select an Option">
        {getOptions(values)}
      </Select>
    </>
  )
}

export default SelectListBlock
