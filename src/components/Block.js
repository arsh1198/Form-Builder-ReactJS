import { Box, IconButton, Text, HStack, Tooltip } from '@chakra-ui/react'
import CheckboxBlock from './blocks/CheckboxBlock'
import HeadingBlock from './blocks/HeadingBlock'
import InputBlock from './blocks/InputBlock'
import RadioBlock from './blocks/RadioBlock'
import SelectListBlock from './blocks/SelectListBlock'
import { CloseIcon } from '@chakra-ui/icons'
import DateBlock from './blocks/DateBlock'
import TitleBlock from './blocks/TitleBlock'

function getBlock(data, disabled) {
  switch (data.type) {
    case 'Title':
      return <TitleBlock value={data.value} />
    case 'Heading':
      return <HeadingBlock value={data.value} />
    case 'Input':
      return (
        <InputBlock
          id={data.id}
          inputType={data.inputType}
          label={data.label}
          placeholder={data.placeholder}
          required={data.required}
        />
      )
    case 'Email':
      return (
        <InputBlock
          id={data.id}
          inputType="email"
          label={data.label}
          placeholder={data.placeholder}
          required={data.required}
        />
      )
    case 'RadioGroup':
      return (
        <RadioBlock
          id={data.id}
          label={data.label}
          values={data.values}
          required={data.required}
        />
      )
    case 'CheckboxGroup':
      return (
        <CheckboxBlock
          id={data.id}
          label={data.label}
          values={data.values}
          required={data.required}
        />
      )
    case 'SelectList':
      return (
        <SelectListBlock
          id={data.id}
          label={data.label}
          values={data.values}
          required={data.required}
        />
      )
    case 'Date':
      return (
        <DateBlock id={data.id} label={data.label} required={data.required} />
      )
    default:
      return <Text>Something Whent Wrong!</Text>
  }
}

const Block = ({ data, deleteable, onDelete, disabled }) => {
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
                colorScheme="red"
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
                colorScheme="red"
                size="xs"
                icon={<CloseIcon color="white" fontSize={10} />}
                style={{ position: 'absolute', right: 20 }}
              />
            </Tooltip>
            {getBlock(data)}
          </>
        )
      ) : (
        getBlock(data)
      )}
    </Box>
  )
}

export default Block
