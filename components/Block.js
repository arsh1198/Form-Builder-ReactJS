import { Box, IconButton, Text, HStack, Heading } from '@chakra-ui/react'
import CheckboxBlock from './blocks/CheckboxBlock'
import HeadingBlock from './blocks/HeadingBlock'
import InputBlock from './blocks/InputBlock'
import RadioBlock from './blocks/RadioBlock'
import SelectListBlock from './blocks/SelectListBlock'
import { DeleteIcon } from '@chakra-ui/icons'

function getBlock(data) {
  switch (data.type) {
    case 'Heading':
      return <HeadingBlock value={data.value} />
    case 'Input':
      return (
        <InputBlock
          inputType="text"
          label={data.label}
          placeholder={data.placeholder}
          required={data.required}
        />
      )
    case 'Email':
      return (
        <InputBlock
          inputType="email"
          label={data.label}
          placeholder={data.placeholder}
          required={data.required}
        />
      )
    case 'RadioGroup':
      return (
        <RadioBlock
          label={data.label}
          values={data.values}
          selected={data.selected}
        />
      )
    case 'CheckboxGroup':
      return <CheckboxBlock label={data.label} values={data.values} />
    case 'SelectList':
      return <SelectListBlock label={data.label} values={data.values} />
  }
}

const Block = ({ data, deleteable }) => {
  return (
    <Box
      className="block-container"
      style={{ position: 'relative' }}
      borderRadius="md"
    >
      {deleteable ? (
        data.type === 'Heading' ? (
          <HStack>
            {getBlock(data)}
            <IconButton
              zIndex={1}
              bg="#ff5252"
              size="xs"
              icon={<DeleteIcon color="white" />}
            />
          </HStack>
        ) : (
          <>
            <IconButton
              zIndex={1}
              bg="#ff5252"
              size="xs"
              icon={<DeleteIcon color="white" />}
              style={{ position: 'absolute', left: '90%' }}
            />
            {getBlock(data)}
          </>
        )
      ) : null}
    </Box>
  )
}

export default Block
