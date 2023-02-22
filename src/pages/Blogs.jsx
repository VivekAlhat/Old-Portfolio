import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";
import {
  VStack,
  Stack,
  Icon,
  Box,
  Text,
  Flex,
  Link,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";
import ServerDown from "./ServerDown";

const Blogs = () => {
  const articles = useContext(ArticleContext);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmallerScreen] = useMediaQuery("(min-width:600px)");

  const MotionStack = motion(VStack);

  return !!articles.length === false ? (
    <ServerDown />
  ) : (
    <MotionStack
      pt="2"
      alignItems="flex-start"
      w="100%"
      spacing="30"
      initial={{ y: "200vw" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, bounce: "0.2" }}
    >
      {articles.map(
        (article, index) =>
          index <= 10 && (
            <Box
              key={article.id}
              boxShadow="lg"
              w="100%"
              p={notSmallerScreen ? "5" : "3"}
              borderBottom="3px solid lightblue"
            >
              <Text fontSize="2xl" fontWeight="semibold">
                {article.title}
              </Text>
              <Flex direction="row" wrap="wrap">
                {article.tag_list &&
                  article.tag_list.map((tag, key) => (
                    <Text
                      key={key}
                      align="center"
                      bgColor={isDark ? "cyan.800" : "cyan.100"}
                      px="2"
                      mr="2"
                      mt="2"
                      borderRadius="md"
                    >
                      {tag}
                    </Text>
                  ))}
              </Flex>
              <Text
                fontStyle="italic"
                color={isDark ? "gray.300" : "gray.700"}
                py="2"
              >
                {article.reading_time_minutes} minute read
              </Text>
              <Box>
                <Text as={notSmallerScreen ? "span" : null}>
                  {article.description}
                </Text>
                <Text
                  as="em"
                  color="blue.600"
                  ml={notSmallerScreen ? "2" : null}
                >
                  <Link href={article.url} isExternal>
                    Read More{" "}
                  </Link>
                </Text>
              </Box>
              <Stack mt="3" spacing="1" direction="row">
                <Text>{article.public_reactions_count} Reactions</Text>
                <Icon as={BsDot} alignSelf="center" />
                <Text>{new Date(article.published_at).toDateString()}</Text>
              </Stack>
            </Box>
          )
      )}
    </MotionStack>
  );
};

export default Blogs;
