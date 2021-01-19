import { Box, Heading } from "@chakra-ui/react";

const HeadingBlock = ({ value }) => {
  return (
    <Box my={5}>
      <Heading size="lg">{value}</Heading>
    </Box>
  );
};

export default HeadingBlock;
