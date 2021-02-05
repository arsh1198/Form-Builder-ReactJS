import {
  Box,
  IconButton,
  Text,
  HStack,
  Heading,
  Tooltip
} from '@chakra-ui/react'
import CheckboxBlock from './blocks/CheckboxBlock'
import HeadingBlock from './blocks/HeadingBlock'
import InputBlock from './blocks/InputBlock'
import RadioBlock from './blocks/RadioBlock'
import SelectListBlock from './blocks/SelectListBlock'
import { CloseIcon } from '@chakra-ui/icons'

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

const Block = ({ data, deleteable, onDelete }) => {
  return (
    <Box
      borderWidth={1}
      borderColor="#008080"
      className="block-container"
      style={{ position: 'relative' }}
      borderRadius="md"
    >
      {deleteable ? (
        data.type === 'Heading' ? (
          <HStack>
            {getBlock(data)}
            <Tooltip label="Delete Block">
              <IconButton
                onClick={onDelete}
                zIndex={1}
                bg="#ff5252"
                size="xs"
                icon={<CloseIcon color="white" />}
              />
            </Tooltip>
          </HStack>
        ) : (
          <>
            <Tooltip label="Delete Block">
              <IconButton
                onClick={onDelete}
                zIndex={1}
                bg="#ff5252"
                size="xs"
                icon={<CloseIcon color="white" />}
                style={{ position: 'absolute', left: '90%' }}
              />
            </Tooltip>
            {getBlock(data)}
          </>
        )
      ) : null}
    </Box>
  )
}

export default Block
