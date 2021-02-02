import {
  useRadioGroup,
  useRadio,
  Input,
  Text,
  IconButton,
  Box,
  VStack,
  Stack,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  HStack,
  Button,
  RadioGroup,
  Radio
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

const TextBuilder = ({ type, label, placeholder, options, defaultValue }) => {
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

const MultiChoiceBuilder = ({ type, placeholder, onAddGroup }) => {
  const [inputVal, setInputVal] = useState('')
  const [values, setValues] = useState([])
  const [selected, setSelected] = useState() // In case of Radio Button

  const handleAddVal = () => {
    if (values.includes(inputVal) || inputVal.trim() === '')
      return alert('Nahi rayy')
    setValues(prev => [...prev, inputVal])
    selected === undefined && setSelected(inputVal)
    setInputVal('')
  }

  const handleAddGroup = () => {
    onAddGroup({
      type,
      selected,
      values
    })
  }

  return (
    <VStack w="100%">
      {type === 'RadioGroup'
        ? values.length && (
            <RadioGroup
              w="100%"
              onChange={val => {
                setSelected(val)
              }}
              value={selected}
            >
              <Stack direction="column" align="start">
                {values.map(value => (
                  <Radio key={value} value={value}>
                    {value}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          )
        : null}
      <Input
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        placeholder={placeholder}
        size="sm"
      />
      <HStack>
        <Button
          size="xs"
          colorScheme="teal"
          variant="outline"
          onClick={handleAddVal}
        >
          Add Value
        </Button>
        <Button
          size="xs"
          colorScheme="teal"
          variant="outline"
          onClick={handleAddGroup}
        >
          Add Group
        </Button>
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
              placeholder="Label"
              options={['Text', 'Email', 'Number']}
              defaultValue="Text"
            />
          </MenuItem>
          <MenuItem title="Radio Group">
            <MultiChoiceBuilder
              type="RadioGroup"
              placeholder="Enter Value"
              onAddGroup={obj => alert(JSON.stringify(obj, null, 2))}
            />
          </MenuItem>
        </Accordion>
      </VStack>
    </Box>
  )
}

export default BlocksSidebar
