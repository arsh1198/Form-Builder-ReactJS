import {
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export default function LoginForm({ title }) {
  return (
    <Box p={8} width="18rem" borderWidth="3px" borderRadius="lg" boxShadow="lg">
      <Box>
        <Heading>{title}</Heading>
      </Box>
      <form>
        <Box mt={6}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Email"></Input>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password"></Input>
          </FormControl>
        </Box>
        <Button
          mt={4}
          w="full"
          colorScheme="teal"
          variant="outline"
          type="submit"
          borderWidth="2px"
        >
          {title}
        </Button>
      </form>
    </Box>
  );
}
