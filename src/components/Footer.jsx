import {
  Spacer,
  Text,
  Flex,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import Social from "./Social";

const Footer = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [notSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      w="100%"
      pb="3"
      direction={notSmallerScreen ? "row" : "column"}
      alignItems="center"
    >
      <Social />
      <Spacer />
      <Text fontWeight="semibold" color={isDark ? "gray.300" : "gray.500"}>
        @ 2021 Vivek Alhat
      </Text>
    </Flex>
  );
};

export default Footer;
