import {
  useColorMode,
  useMediaQuery,
  Flex,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [notSmallerScreen] = useMediaQuery("(min-width:600px)");
  const MotionBox = motion(Box);

  return (
    <Flex
      direction={notSmallerScreen ? "row" : "column"}
      p={notSmallerScreen ? "32" : "3"}
    >
      <MotionBox
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 0.8, bounce: "0.2" }}
      >
        <Text fontSize={notSmallerScreen ? "4xl" : "3xl"} fontWeight="semibold">
          Hello👋, I am
        </Text>
        <Text
          fontSize={notSmallerScreen ? "7xl" : "5xl"}
          color="blue.400"
          fontWeight="bold"
          bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
          bgClip="text"
        >
          Vivek Alhat
        </Text>
        <Text
          color={isDark ? "gray.200" : "gray.500"}
          fontSize={notSmallerScreen ? "2xl" : "md"}
        >
          I am a <Text as="b">frontend developer</Text> and an open source
          enthusiast from Pune, India.
        </Text>
        <Text
          color={isDark ? "gray.200" : "gray.500"}
          fontSize={notSmallerScreen ? "2xl" : "md"}
        >
          This is my <Text as="u">digital space</Text> where I showcase stuff
          that I am working on. I write articles on
          <Text as="b">&nbsp;web development</Text> and occasionally on other
          interesting stuff.
        </Text>
        <Button
          m="1rem 0"
          colorScheme="blue"
          align="center"
          size={notSmallerScreen ? "lg" : "md"}
          onClick={() => {
            window.location = "mailto:vivekalhat14@gmail.com";
          }}
        >
          Let's Connect
        </Button>
      </MotionBox>
    </Flex>
  );
};

export default Header;
