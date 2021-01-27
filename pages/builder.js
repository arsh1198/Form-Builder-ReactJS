import { Box, Flex, Text } from "@chakra-ui/react";
import BlocksSidebar from "../components/BlocksSidebar";
import { BuilderContext } from "../contexts/builderContext";
import Block from "../components/Block";
import { useContext } from "react";

function getBlocks(blocksArr) {
  return blocksArr.map((data) => {
    return <Block data={data} />;
  });
}

export default function Builder() {
  const { blocks } = useContext(BuilderContext);
  console.log("chittad => ", blocks);
  return (
    <Box>
      <Flex>
        <Box h="100vh" bg="#fefefe" flex={1}>
          <form>{getBlocks(blocks)}</form>
        </Box>
        <Box boxShadow="lg" borderWidth={3} h="100vh" w="18rem">
          <BlocksSidebar />
        </Box>
      </Flex>
    </Box>
  );
}
