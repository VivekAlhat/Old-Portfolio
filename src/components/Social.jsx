import { Flex, Icon, useMediaQuery, Link } from "@chakra-ui/react";
import { FaGithub, FaDev, FaTwitter, FaLinkedin } from "react-icons/fa";

const Social = () => {
  const [notSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction="row" pb={notSmallerScreen ? "0" : "7"}>
      <Link href="https://www.github.com/VivekAlhat" isExternal>
        <Icon mx="5" as={FaGithub} w={6} h={6} />
      </Link>
      <Link href="https://www.dev.to/VivekAlhat" isExternal>
        <Icon mx="5" as={FaDev} w={6} h={6} />
      </Link>
      <Link href="http://twitter.com/crypticmedusa" isExternal>
        <Icon mx="5" as={FaTwitter} w={6} h={6} />
      </Link>
      <Link href="http://linkedin.com/in/vivekalhat" isExternal>
        <Icon mx="5" as={FaLinkedin} w={6} h={6} />
      </Link>
    </Flex>
  );
};

export default Social;
