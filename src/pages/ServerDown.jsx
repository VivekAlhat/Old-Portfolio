import { Image, Box, Text } from "@chakra-ui/react";
const Error = () => {
  return (
    <Box p="5">
      <Image src="/assets/server_down.svg" alt="Server Down" w="md" h="sm" />
      <Text fontSize="md" textAlign="center" fontWeight="semibold">
        API server down? Try after some time...
      </Text>
    </Box>
  );
};

export default Error;
