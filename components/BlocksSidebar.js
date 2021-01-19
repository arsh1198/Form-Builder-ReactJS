import {
  Flex,
  Text,
  Center,
  ButtonGroup,
  Button,
  IconButton,
  Box,
  VStack,
  useDisclosure,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Heading,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const AddButton = ({ data, k }) => {
  console.log("key =>", k);
  return (
    <AccordionItem>
      <AccordionButton>
        <Text fontSize={16} fontWeight="bold" flex="1" textAlign="left">
          {k}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <VStack mt={2}>
          {data.map((text) => {
            return (
              <ButtonGroup
                colorScheme="teal"
                size="sm"
                w="100%"
                isAttached
                variant="outline"
              >
                <Button w="100%" mr="-px">
                  {text}
                </Button>
                <IconButton icon={<AddIcon />}></IconButton>
              </ButtonGroup>
            );
          })}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

const BlocksSidebar = () => {
  const blocks = {
    Heading: ["Small", "Medium", "Large"],
    Input: ["Text", "Email", "Number"],
    RadioGroup: ["Radio Group"],
    CheckboxGroup: ["Chekbox Group"],
    OptionsList: ["Options List"],
  };
  return (
    <Box>
      <VStack h="100%" p={4} borderRadius="lg">
        <Accordion w="100%">
          {Object.keys(blocks).map((key) => {
            return <AddButton data={blocks[key]} k={key} />;
          })}
        </Accordion>
      </VStack>
    </Box>
  );
};

export default BlocksSidebar;
