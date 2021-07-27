import {
  Text,
  Flex,
  VStack,
  Box,
  Icon,
  Link,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectHighlights } from "../data/sitedata";
import { motion } from "framer-motion";

const Projects = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmallerScreen] = useMediaQuery("(min-width:600px)");

  const VStackMotion = motion(VStack);
  return (
    <VStackMotion
      pt="2"
      alignItems="flex-start"
      spacing="5"
      initial={{ y: "200vw" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, bounce: "0.2" }}
    >
      {projectHighlights.map((project) => (
        <Box
          key={project.id}
          p="5"
          boxShadow="lg"
          w="100%"
          borderBottom="3px solid gray"
        >
          <Text fontWeight="semibold" mb="2" fontSize="2xl">
            {project.name}
          </Text>
          <Flex direction="row" wrap="wrap" mb="3">
            {project.tags.map((tag, key) => (
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
          <Text>{project.description}</Text>
          <Flex
            direction="row"
            mt="2"
            w={notSmallerScreen ? "5%" : "30%"}
            justify="space-between"
          >
            {!!project.github && (
              <Link href={project.github} isExternal>
                <Icon as={FaGithub} p="2" w="8" h="8" />
              </Link>
            )}
            {!!project.live && (
              <Link href={project.live} isExternal>
                <Icon as={FaExternalLinkAlt} p="2" w="8" h="8" />
              </Link>
            )}
          </Flex>
        </Box>
      ))}
    </VStackMotion>
  );
};

export default Projects;
