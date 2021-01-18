import styles from "../styles/Home.module.css";
import { Center } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <Center mt={160}>
      <LoginForm title="Login" />
    </Center>
  );
}
