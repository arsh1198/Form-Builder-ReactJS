import { Box, Text } from "@chakra-ui/react";
import CheckboxBlock from "./blocks/CheckboxBlock";
import HeadingBlock from "./blocks/HeadingBlock";
import InputBlock from "./blocks/InputBlock";
import RadioBlock from "./blocks/RadioBlock";
import SelectListBlock from "./blocks/SelectListBlock";

function getBlock(data) {
  switch (data.type) {
    case "Heading":
      return <HeadingBlock value={data.value} />;
    case "Input":
      return (
        <InputBlock
          inputType="text"
          label={data.label}
          placeholder={data.placeholder}
          required={data.required}
        />
      );
    case "Email":
      return (
        <InputBlock
          inputType="email"
          label={data.label}
          placeholder={data.placeholder}
          required={data.required}
        />
      );
    case "RadioGroup":
      return (
        <RadioBlock
          label={data.label}
          values={data.values}
          selected={data.selected}
        />
      );
    case "CheckboxGroup":
      return <CheckboxBlock label={data.label} values={data.values} />;
    case "SelectList":
      return <SelectListBlock label={data.label} values={data.values} />;
  }
}

const Block = ({ data }) => {
  return <Box className="block-container">{getBlock(data)}</Box>;
};

export default Block;
