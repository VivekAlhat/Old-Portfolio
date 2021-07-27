import {
  Box,
  Stack,
  Flex,
  Link,
  VStack,
  Text,
  Icon,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectHighlights } from "../data/sitedata";

const Project = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack py="5" alignSelf="flex-start">
      <Text ml="4" fontSize="2xl" fontWeight="semibold" mb="5">
        💻 Project&nbsp;
        <Text as="u">Highlights</Text>
      </Text>
      <VStack>
        {!!projectHighlights &&
          projectHighlights.map(
            (project, index) =>
              index < 3 && (
                <Box
                  key={project.id}
                  shadow="lg"
                  w="100%"
                  borderRadius="lg"
                  p={notSmallerScreen ? "10" : "5"}
                  borderBottom="3px solid steelblue"
                >
                  <Text fontWeight="semibold" mb="2" fontSize="2xl">
                    {project.name}
                  </Text>
                  <Flex direction="row" wrap="wrap" mb="5">
                    {project.tags.map((tag, key) => (
                      <Text
                        key={key}
                        align="center"
                        bgColor={isDark ? "blue.800" : "blue.100"}
                        px="2"
                        mr="2"
                        mt="2"
                        borderRadius="md"
                      >
                        {tag}
                      </Text>
                    ))}
                  </Flex>
                  <Text>{project.description}</Text>
                  <Flex
                    direction="row"
                    w={notSmallerScreen ? "5%" : "20%"}
                    justify="space-between"
                    mt="5"
                  >
                    {!!project.github && (
                      <Link href={project.github} isExternal>
                        <Icon as={FaGithub} />
                      </Link>
                    )}
                    {!!project.live && (
                      <Link href={project.live} isExternal>
                        <Icon as={FaExternalLinkAlt} />
                      </Link>
                    )}
                  </Flex>
                </Box>
              )
          )}
      </VStack>
    </Stack>
  );
};

export default Project;
