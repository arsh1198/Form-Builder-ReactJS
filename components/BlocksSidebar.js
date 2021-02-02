import {
  useRadioGroup,
  useRadio,
  Input,
  Text,
  IconButton,
  Box,
  VStack,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  HStack
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useContext, useState } from 'react'
import { BuilderContext } from '../contexts/builderContext'

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600'
        }}
        _focus={{
          boxShadow: 'outline'
        }}
        px="0.5em"
        py="0.3em"
      >
        <Text fontSize="12px">{props.children}</Text>
      </Box>
    </Box>
  )
}

const TextBuilder = ({ placeholder, options, defaultValue }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue,
    onChange: console.log
  })

  const group = getRootProps()

  return (
    <VStack>
      <HStack>
        <Input placeholder={placeholder} size="sm" />
        <IconButton
          icon={<AddIcon />}
          size="sm"
          variant="outline"
          colorScheme="teal"
        />
      </HStack>
      <HStack {...group}>
        {options.map(value => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    </VStack>
  )
}

const MenuItem = ({ title, children }) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Text fontSize={16} fontWeight="bold" flex="1" textAlign="left">
          {title}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <VStack mt={2}>{children}</VStack>
      </AccordionPanel>
    </AccordionItem>
  )
}

const BlocksSidebar = () => {
  return (
    <Box>
      <VStack h="100%" p={4} borderRadius="lg">
        <Accordion w="100%" allowToggle>
          <MenuItem title="Heading">
            <TextBuilder
              type="heading"
              placeholder="Heading"
              options={['Small', 'Medium', 'Large']}
              defaultValue="Medium"
            />
          </MenuItem>
          <MenuItem title="Input">
            <TextBuilder
              type="input"
              placeholder="Placeholder"
              options={['Text', 'Email', 'Number']}
              defaultValue="Text"
            />
          </MenuItem>
        </Accordion>
      </VStack>
    </Box>
  )
}

export default BlocksSidebar
