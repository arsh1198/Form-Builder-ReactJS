import { Box, RadioGroup, Radio, Stack, FormLabel } from "@chakra-ui/react";

function getRadio(values) {
  return values.map((text, index) => (
    <Radio value={`${index + 1}`}>{text}</Radio>
  ));
}

const RadioBlock = ({ label, values, selected }) => {
  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <RadioGroup colorScheme="teal" mt={4} defaultValue={`${selected + 1}`}>
        <Stack>{getRadio(values)}</Stack>
      </RadioGroup>
    </Box>
  );
};

export default RadioBlock;
