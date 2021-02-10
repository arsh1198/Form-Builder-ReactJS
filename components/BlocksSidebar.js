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
  ButtonGroup,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Select,
  FormHelperText,
  FormControl
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
  const [inputVal, setInputVal] = useState('')
  const [isInvalid, setInvalid] = useState(false)

  const handleAddField = () => {
    if (inputVal.trim() === '') {
      return setInvalid(true)
    }
    onAddField({
      type: 'Heading',
      value: inputVal
    })
    setInputVal('')
  }

  return (
    <VStack w="100%">
      <Input
        isInvalid={isInvalid}
        value={inputVal}
        onChange={e => {
          setInputVal(e.target.value)
          setInvalid(false)
        }}
        onFocus={() => setInvalid(false)}
        placeholder={isInvalid ? 'Invalid Input!' : 'Heading'}
        size="sm"
      />
      <Button
        colorScheme="teal"
        variant="outline"
        w="100%"
        size="sm"
        onClick={handleAddField}
      >
        Add Field
      </Button>
    </VStack>
  )
}

const InputBuilder = ({ onAddField }) => {
  const [inputVal, setInputVal] = useState('')
  const [inputType, setInputType] = useState('')
  const [isInvalid, setInvalid] = useState(false)
  const [required, setRequired] = useState(false)
  const options = ['Text', 'Email', 'Number']
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'InputType',
    defaultValue: 'Text',
    onChange: setInputType
  })

  const handleAddField = () => {
    if (inputVal.trim() === '') {
      return setInvalid(true)
    }
    onAddField({
      type: 'Input',
      label: inputVal,
      inputType,
      required
    })
    setInputVal('')
  }

  const group = getRootProps()

  return (
    <VStack w="100%">
      <Input
        isInvalid={isInvalid}
        value={inputVal}
        onChange={e => {
          setInputVal(e.target.value)
          setInvalid(false)
        }}
        onFocus={() => setInvalid(false)}
        placeholder={isInvalid ? 'Invalid Input!' : 'Label'}
        size="sm"
      />

      <HStack {...group}>
        {options.map(value => {
          const radio = getRadioProps({ value })
          return <RadioCard {...radio}>{value}</RadioCard>
        })}
      </HStack>
      <HStack>
        <Text color="#f00" fontSize={14}>
          Mark Required
        </Text>
        <Checkbox onChange={() => setRequired(prev => !prev)} size="sm" />
      </HStack>

      <Button
        colorScheme="teal"
        variant="outline"
        w="100%"
        size="sm"
        onClick={handleAddField}
      >
        Add Field
      </Button>
    </VStack>
  )
}

const RadioGroupBuilder = ({ onAddGroup }) => {
  const [label, setLabel] = useState('')
  const [inputVal, setInputVal] = useState('')
  const [values, setValues] = useState([])
  const [selected, setSelected] = useState() // In case of Radio Button
  const [isInvalid, setInvalid] = useState(false)
  const [isLabelinvalid, setLabelInvalid] = useState(false)
  const [required, setRequired] = useState(false)

  const handleAddVal = () => {
    setLabelInvalid(false)
    if (values.includes(inputVal) || inputVal.trim() === '')
      return setInvalid(true)

    setValues(prev => [...prev, inputVal])
    selected === undefined && setSelected(inputVal)

    setInputVal('')
  }

  const handleAddGroup = () => {
    setInvalid(false)
    if (label.trim() === '') return setLabelInvalid(true)
    if (values.length < 1) return setInvalid(true)
    onAddGroup({
      type: 'RadioGroup',
      label,
      values,
      selected,
      required
    })
    setLabel('')
    setValues([])
    setSelected(undefined)
  }

  return (
    <VStack w="100%">
      <Input
        isInvalid={isLabelinvalid}
        value={label}
        onChange={e => {
          setLabel(e.target.value)
          setLabelInvalid(false)
        }}
        onFocus={() => {
          setLabelInvalid(false)
          setInvalid(false)
        }}
        placeholder={isLabelinvalid ? 'Invalid Label!' : 'Label'}
        size="sm"
      />

      <HStack>
        <Input
          isInvalid={isInvalid}
          value={inputVal}
          onChange={e => {
            setInputVal(e.target.value)
            setInvalid(false)
          }}
          onFocus={() => {
            setInvalid(false)
            setLabelInvalid(false)
          }}
          placeholder={isInvalid ? 'Invalid Input!' : 'Add Radio Button'}
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
          <FormControl>
            <Stack py={2} direction="column" align="start">
              {values.map(value => (
                <Radio key={value} value={value}>
                  {value}
                </Radio>
              ))}
            </Stack>
            <HStack>
              <Text color="#f00" fontSize={14}>
                Mark Required
              </Text>
              <Checkbox onChange={() => setRequired(prev => !prev)} size="sm" />
            </HStack>
          </FormControl>
          <Divider />
        </RadioGroup>
      )}
      <ButtonGroup
        width="100%"
        size="sm"
        isAttached
        colorScheme="teal"
        variant="outline"
      >
        <Button w="80%" size="sm" onClick={handleAddGroup}>
          Add Group
        </Button>
        <Button
          onClick={() => {
            setValues([])
          }}
        >
          Clear
        </Button>
      </ButtonGroup>
    </VStack>
  )
}

const CheckBoxBuilder = ({ onAddGroup }) => {
  const [label, setLabel] = useState('')
  const [inputVal, setInputVal] = useState('')
  const [values, setValues] = useState([])
  const [selected, setSelected] = useState([])
  const [isInvalid, setInvalid] = useState(false)
  const [isLabelinvalid, setLabelInvalid] = useState(false)
  const [required, setRequired] = useState(false)

  const handleAddVal = () => {
    setLabelInvalid(false)
    if (values.includes(inputVal) || inputVal.trim() === '')
      return setInvalid(true)
    setValues(prev => [...prev, inputVal])
    selected === undefined && setSelected(inputVal)
    setInputVal('')
  }

  const handleAddGroup = () => {
    setInvalid(false)
    if (label.trim() === '') return setLabelInvalid(true)
    if (values.length < 1) return setInvalid(true)
    onAddGroup({
      type: 'CheckboxGroup',
      label,
      values,
      required
    })
    setLabel('')
  }

  return (
    <VStack w="100%">
      <Input
        isInvalid={isLabelinvalid}
        value={label}
        onChange={e => {
          setLabel(e.target.value)
          setInvalid(false)
        }}
        onFocus={() => {
          setInvalid(false)
          setLabelInvalid(false)
        }}
        placeholder={isLabelinvalid ? 'Invalid Label!' : 'Label'}
        size="sm"
      />

      <HStack>
        <Input
          isInvalid={isInvalid}
          value={inputVal}
          onChange={e => {
            setInputVal(e.target.value)
            setInvalid(false)
          }}
          onFocus={() => {
            setInvalid(false)
            setLabelInvalid(false)
          }}
          placeholder={isInvalid ? 'Invalid Input!' : 'Add CheckBox'}
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
          <HStack>
            <Text color="#f00" fontSize={14}>
              Mark Required
            </Text>
            <Checkbox onChange={() => setRequired(prev => !prev)} size="sm" />
          </HStack>
          <Divider />
        </Box>
      )}
      <ButtonGroup
        width="100%"
        size="sm"
        isAttached
        colorScheme="teal"
        variant="outline"
      >
        <Button w="80%" size="sm" onClick={handleAddGroup}>
          Add Group
        </Button>
        <Button
          onClick={() => {
            setValues([])
          }}
        >
          Clear
        </Button>
      </ButtonGroup>
    </VStack>
  )
}

const SelectListBuilder = ({ onAddGroup }) => {
  const [label, setLabel] = useState('')
  const [inputVal, setInputVal] = useState('')
  const [values, setValues] = useState([])
  const [isInvalid, setInvalid] = useState(false)
  const [isLabelinvalid, setLabelInvalid] = useState(false)
  const [required, setRequired] = useState(false)

  const handleAddVal = () => {
    setLabelInvalid(false)
    if (values.includes(inputVal) || inputVal.trim() === '')
      return setInvalid(true)
    setValues(prev => [...prev, inputVal])
    setInputVal('')
  }

  const handleAddGroup = () => {
    setInvalid(false)
    if (label.trim() === '') return setLabelInvalid(true)
    if (values.length < 1) return setInvalid(true)
    onAddGroup({
      type: 'SelectList',
      label,
      values,
      required
    })
    setLabel('')
  }

  return (
    <VStack w="100%">
      <Input
        isInvalid={isLabelinvalid}
        value={label}
        onChange={e => {
          setLabel(e.target.value)
          setInvalid(false)
        }}
        onFocus={() => {
          setInvalid(false)
          setLabelInvalid(false)
        }}
        placeholder={isLabelinvalid ? 'Invalid Label!' : 'Label'}
        size="sm"
      />

      <HStack>
        <Input
          isInvalid={isInvalid}
          value={inputVal}
          onChange={e => {
            setInputVal(e.target.value)
            setInvalid(false)
          }}
          onFocus={() => {
            setInvalid(false)
            setLabelInvalid(false)
          }}
          placeholder={isInvalid ? 'Invalid Input!' : 'Add Option'}
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
          <HStack>
            <Text color="#f00" fontSize={14}>
              Mark Required
            </Text>
            <Checkbox onChange={() => setRequired(prev => !prev)} size="sm" />
          </HStack>
          <Divider />
        </>
      )}
      <ButtonGroup
        width="100%"
        size="sm"
        isAttached
        colorScheme="teal"
        variant="outline"
      >
        <Button w="80%" size="sm" onClick={handleAddGroup}>
          Add Group
        </Button>
        <Button
          onClick={() => {
            setValues([])
          }}
        >
          Clear
        </Button>
      </ButtonGroup>
    </VStack>
  )
}

const DateBuilder = ({ onAddField }) => {
  const [label, setLabel] = useState('')
  const [isInvalid, setInvalid] = useState(false)
  const [required, setRequired] = useState(false)

  const handleAddField = () => {
    if (label.trim() === '') {
      return setInvalid(true)
    }
    onAddField({
      type: 'Date',
      label: label,
      required
    })
    setLabel('')
  }

  return (
    <VStack w="100%">
      <Input
        isInvalid={isInvalid}
        value={label}
        onChange={e => {
          setLabel(e.target.value)
          setInvalid(false)
        }}
        onFocus={() => setInvalid(false)}
        placeholder={isInvalid ? 'Invalid Input!' : 'Label'}
        size="sm"
      />
      <HStack>
        <Text color="#f00" fontSize={14}>
          Mark Required
        </Text>
        <Checkbox onChange={() => setRequired(prev => !prev)} size="sm" />
      </HStack>
      <Button
        colorScheme="teal"
        variant="outline"
        w="100%"
        size="sm"
        onClick={handleAddField}
      >
        Add Field
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
          <MenuItem title="Date">
            <DateBuilder onAddField={pushBlock} />
          </MenuItem>
        </Accordion>
      </VStack>
    </Box>
  )
}

export default BlocksSidebar
