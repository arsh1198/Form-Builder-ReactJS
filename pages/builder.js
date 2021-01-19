import { Box, Flex } from "@chakra-ui/react";
import BlocksSidebar from "../components/BlocksSidebar";

export default function Builder() {
  return (
    <Box>
      <Flex>
        <Box h="100vh" bg="lightgrey" flex={1}></Box>
        <Box boxShadow="lg" borderWidth={3} h="100vh" w="18rem">
          <BlocksSidebar />
        </Box>
      </Flex>
    </Box>
  );
}
