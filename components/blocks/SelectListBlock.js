import { Box, Select, FormLabel, FormControl } from '@chakra-ui/react'

const getOptions = values => {
  return values.map(text => <option>{text}</option>)
}

const SelectListBlock = ({ label, values, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <Select size="sm" mt={4} placeholder="Select an Option">
        {getOptions(values)}
      </Select>
    </FormControl>
  )
}

export default SelectListBlock
