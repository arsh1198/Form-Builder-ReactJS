import { Heading, Box, Input, FormControl } from "@chakra-ui/react";
import { useState } from "react";

const HeadingBuilder = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Input
        variant="flushed"
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <Heading>{value}</Heading>
    </>
  );
};

export default HeadingBuilder;
