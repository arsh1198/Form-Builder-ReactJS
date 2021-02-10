import { FormControl, FormLabel } from '@chakra-ui/react'

const DateBlock = ({ label, required }) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <input
        style={{
          width: '100%',
          paddingTop: 6,
          paddingBottom: 3,
          paddingLeft: 8,
          paddingRight: 8,
          borderWidth: 1,
          borderColor: '#E2E8F0',
          outlineColor: '#3182CE',
          outlineWidth: 'thick',
          fontSize: 15
        }}
        type="date"
      />
    </FormControl>
  )
}
export default DateBlock
