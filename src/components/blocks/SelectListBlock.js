import { Select, FormLabel, FormControl } from '@chakra-ui/react'

const getOptions = ({ id, values }) => {
  return values.map(text => (
    <option id={id} key={id}>
      {text}
    </option>
  ))
}

const SelectListBlock = ({ id, label, values, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <Select size="sm" mt={4} placeholder="Select an Option">
        {getOptions({ id, values })}
      </Select>
    </FormControl>
  )
}

export default SelectListBlock
