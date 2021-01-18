import { Box, Select, FormLabel } from "@chakra-ui/react";

const getOptions = (values) => {
  return values.map((text) => <option>{text}</option>);
};

const SelectListBlock = ({ label, values }) => {
  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <Select mt={4} placeholder="Select an Option">
        {getOptions(values)}
      </Select>
    </Box>
  );
};

export default SelectListBlock;
