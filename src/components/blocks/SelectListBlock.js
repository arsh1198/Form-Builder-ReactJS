import { Select, FormLabel, FormControl } from '@chakra-ui/react'

const getOptions = ({ id, values }) => {
  return values.map(text => <option key={id}>{text}</option>)
}

const SelectListBlock = ({ id, label, values, required, value, disabled }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <Select
        disabled={disabled}
        _disabled={{
          color: 'black'
        }}
        value={value}
        id={id}
        size="sm"
        mt={4}
        placeholder="Select an Option"
      >
        {getOptions({ id, values })}
      </Select>
    </FormControl>
  )
}

export default SelectListBlock
