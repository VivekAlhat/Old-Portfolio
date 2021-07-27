import {
  Flex,
  Text,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex w="100%">
      <Heading size="lg" fontWeight="black" color="blue.500">
        <RouterLink to="/">VA.</RouterLink>
      </Heading>
      <Spacer />
      <Flex alignSelf="center">
        <Flex>
          <Text px="5">
            <RouterLink to="/projects">Projects</RouterLink>
          </Text>
          <Text px="5">
            <RouterLink to="/blog">Blog</RouterLink>
          </Text>
        </Flex>
      </Flex>
      <IconButton
        alignSelf="center"
        ml="5"
        icon={isDark ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        size="sm"
        isRound
      />
    </Flex>
  );
};

export default Navbar;
