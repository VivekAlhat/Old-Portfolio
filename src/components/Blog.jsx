import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";
import {
  Stack,
  Center,
  Text,
  Box,
  Link,
  Icon,
  List,
  ListItem,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiErrorWarningLine } from "react-icons/ri";

const Blog = () => {
  const articles = useContext(ArticleContext);
  const [notSmallerScreen] = useMediaQuery("(min-width:600px)");

  const MotionBox = motion(Box);

  return (
    <Stack py="5" alignSelf="flex-start" w="100%">
      <Text
        ml="4"
        mb={notSmallerScreen ? null : "5"}
        fontSize="2xl"
        fontWeight="semibold"
      >
        📎 Recent&nbsp;
        <Text as="u">Articles</Text>
      </Text>
      {!!articles.length === false ? (
        <Center p="5">
          <Icon as={RiErrorWarningLine} mx="3" alignSelf="center" w="8" h="8" />
          <Text fontSize="md" fontWeight="semibold">
            Unable to fetch data from API.
          </Text>
        </Center>
      ) : (
        <VStack p={notSmallerScreen ? "5" : null}>
          <List spacing={7} w="100%">
            {articles.map(
              (article, index) =>
                index < 3 && (
                  <MotionBox
                    key={article.id}
                    p="3"
                    boxShadow="sm"
                    borderLeft="3px solid lightgray"
                    whileHover={
                      notSmallerScreen && {
                        translateY: -8,
                      }
                    }
                  >
                    <ListItem>
                      <Text as="b" fontSize="lg">
                        {article.title}
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
                    </ListItem>
                  </MotionBox>
                )
            )}
          </List>
        </VStack>
      )}
    </Stack>
  );
};

export default Blog;
