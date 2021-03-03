import { Heading, Box, Input, FormControl } from "@chakra-ui/react";
import { useState } from "react";

const HeadingBuilder = ({ value, size }) => {
  return (
    <>
      <Heading>{value}</Heading>
    </>
  );
};

export default HeadingBuilder;
