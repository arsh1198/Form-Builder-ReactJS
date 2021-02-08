import {
  Divider,
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
  Radio,
  CheckboxGroup,
  Checkbox,
  Select
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

const HeadingBuilder = ({ onAddField }) => {
  const [inputVal, setInputVal] = useState()
  const options = ['Small', 'Medium', 'Large']
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Medium',
    onChange: console.log
  })

  const handleAddField = () => {
    onAddField({
      type: 'Heading',
      value: inputVal
    })
    setInputVal('')
  }

  const group = getRootProps()

  return (
    <VStack>
      <HStack>
        <Input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          placeholder="Enter the text"
          size="sm"
        />
        <IconButton
          onClick={handleAddField}
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

const InputBuilder = ({ onAddField }) => {
  const [inputVal, setInputVal] = useState()
  const [inputType, setInputType] = useState()
  const options = ['Text', 'Email', 'Number']
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Text',
    onChange: setInputType
  })

  const handleAddField = () => {
    onAddField({
      type: 'Input',
      label: inputVal,
      inputType
    })
    setInputVal('')
  }

  const group = getRootProps()

  return (
    <VStack>
      <HStack>
        <Input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          placeholder="Enter the text"
          size="sm"
        />
        <IconButton
          onClick={handleAddField}
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

const RadioGroupBuilder = ({ onAddGroup }) => {
  const [label, setLabel] = useState('')
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
      type: 'RadioGroup',
      label,
      values,
      selected
    })
    setLabel('')
  }

  return (
    <VStack w="100%">
      <Input
        value={label}
        onChange={e => setLabel(e.target.value)}
        placeholder="Label"
        size="sm"
      />

      <HStack>
        <Input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          placeholder="Add Radio Button"
          size="sm"
        />
        <IconButton
          onClick={handleAddVal}
          icon={<AddIcon />}
          size="sm"
          variant="outline"
          colorScheme="teal"
        />
      </HStack>
      {values.length && (
        <RadioGroup
          w="100%"
          onChange={val => {
            setSelected(val)
          }}
          value={selected}
        >
          <Divider />
          <Stack py={4} direction="column" align="start">
            {values.map(value => (
              <Radio key={value} value={value}>
                {value}
              </Radio>
            ))}
          </Stack>
          <Divider />
        </RadioGroup>
      )}
      <Button
        w="100%"
        size="sm"
        colorScheme="teal"
        variant="outline"
        onClick={handleAddGroup}
      >
        Add Group
      </Button>
    </VStack>
  )
}

const CheckBoxBuilder = ({ onAddGroup }) => {
  const [label, setLabel] = useState('')
  const [inputVal, setInputVal] = useState('')
  const [values, setValues] = useState([])
  const [selected, setSelected] = useState([])

  const handleAddVal = () => {
    if (values.includes(inputVal) || inputVal.trim() === '')
      return alert('Nahi rayy')
    setValues(prev => [...prev, inputVal])
    selected === undefined && setSelected(inputVal)
    setInputVal('')
  }

  const handleAddGroup = () => {
    onAddGroup({
      type: 'CheckboxGroup',
      label,
      values
    })
    setLabel('')
  }

  return (
    <VStack w="100%">
      <Input
        value={label}
        onChange={e => setLabel(e.target.value)}
        placeholder="Label"
        size="sm"
      />

      <HStack>
        <Input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          placeholder="Add Checkbox"
          size="sm"
        />
        <IconButton
          onClick={handleAddVal}
          icon={<AddIcon />}
          size="sm"
          variant="outline"
          colorScheme="teal"
        />
      </HStack>
      {values.length && (
        <Box w="100%">
          <Divider />
          <Stack py={4} direction="column" align="start">
            {values.map(value => (
              <Checkbox w="100%" key={value} value={value}>
                {value}
              </Checkbox>
            ))}
          </Stack>
          <Divider />
        </Box>
      )}
      <Button
        w="100%"
        size="sm"
        colorScheme="teal"
        variant="outline"
        onClick={handleAddGroup}
      >
        Add Group
      </Button>
    </VStack>
  )
}

const SelectListBuilder = ({ onAddGroup }) => {
  const [label, setLabel] = useState('')
  const [inputVal, setInputVal] = useState('')
  const [values, setValues] = useState([])

  const handleAddVal = () => {
    if (values.includes(inputVal) || inputVal.trim() === '')
      return alert('Nahi rayy')
    setValues(prev => [...prev, inputVal])
    setInputVal('')
  }

  const handleAddGroup = () => {
    onAddGroup({
      type: 'SelectList',
      label,
      values
    })
    setLabel('')
  }

  return (
    <VStack w="100%">
      <Input
        value={label}
        onChange={e => setLabel(e.target.value)}
        placeholder="Label"
        size="sm"
      />

      <HStack>
        <Input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          placeholder="Add List Item"
          size="sm"
        />
        <IconButton
          onClick={handleAddVal}
          icon={<AddIcon />}
          size="sm"
          variant="outline"
          colorScheme="teal"
        />
      </HStack>
      {values.length && (
        <>
          <Divider />
          <Select py={4} placeholder={label} w="100%">
            {values.map(value => (
              <option w="100%">{value}</option>
            ))}
          </Select>
          <Divider />
        </>
      )}
      <Button
        w="100%"
        size="sm"
        colorScheme="teal"
        variant="outline"
        onClick={handleAddGroup}
      >
        Add Group
      </Button>
    </VStack>
  )
}

const MenuItem = ({ title, children }) => {
  return (
    <AccordionItem h="100%">
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
  const { pushBlock } = useContext(BuilderContext)
  return (
    <Box>
      <VStack h="100%" p={4} borderRadius="lg">
        <Accordion h="100%" w="100%" allowToggle>
          <MenuItem title="Heading">
            <HeadingBuilder onAddField={pushBlock} />
          </MenuItem>
          <MenuItem title="Input">
            <InputBuilder onAddField={pushBlock} />
          </MenuItem>
          <MenuItem title="Radio Group">
            <RadioGroupBuilder onAddGroup={pushBlock} />
          </MenuItem>
          <MenuItem title="Checkbox Group">
            <CheckBoxBuilder onAddGroup={pushBlock} />
          </MenuItem>
          <MenuItem title="Select List">
            <SelectListBuilder onAddGroup={pushBlock} />
          </MenuItem>
        </Accordion>
      </VStack>
    </Box>
  )
}

export default BlocksSidebar
