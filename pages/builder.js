import { Box, Flex } from "@chakra-ui/react";
import BlocksSidebar from "../components/BlocksSidebar";
import HeadingBuilder from "../components/buildingBlocks/HeadingBuilder";
import BuilderProvider from "../contexts/builderContext";

export default function Builder() {
  return (
    <BuilderProvider>
      <Box>
        <Flex>
          <Box h="100vh" bg="#fefefe" flex={1}>
            <HeadingBuilder />
          </Box>
          <Box boxShadow="lg" borderWidth={3} h="100vh" w="18rem">
            <BlocksSidebar />
          </Box>
        </Flex>
      </Box>
    </BuilderProvider>
  );
}
