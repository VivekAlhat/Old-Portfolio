import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Link,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const FAQ = () => {
  return (
    <Box boxSize="full" p="2rem 0">
      <Text ml="4" fontSize="2xl" fontWeight="semibold" mb="5">
        ❓ FAQs
      </Text>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text as="b">What's your current read?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            I am reading <Text as="b">Inner Engineering</Text> by Sadhguru. My
            next read is <Text as="em">Disneyland of gods</Text>.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text as="b">What's your favorite font?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Currently, I am using <Text as="b">JetBrains Mono</Text> as my
            system font and in editor I use <Text as="em">Source Code Pro</Text>
            .
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text as="b">What distro do you use?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            I have a dual booted system installed with Windows 10 and Manjaro
            Linux. I use Windows only for gaming. Most of the time I use my
            Linux system for coding and other works. I have always been a Linux
            fanboy. I started with Ubuntu then later switched to Manjaro.
            <Text>
              Check my system config here.
              <Link
                href="https://dev.to/vivekalhat/my-daily-workflow-3lhb"
                isExternal
              >
                <Icon as={FaExternalLinkAlt} mx="2" />
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text as="b">What DE do you use?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            I use <Text as="b">LightDM</Text> as my login manager.
            <Text as="b"> XFCE</Text> as my desktop environment and
            <Text as="b"> i3wm</Text> as my window manager. I am thinking of
            switching to <Text as="b">DWM/Sway</Text> soon.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text as="b">Which editor do you use?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            I use <Text as="b">Visual Studio Code</Text> as my primary editor. I
            also use <Text as="b">Neovim</Text> with custom config.
            <br />
            <Image
              p="5"
              width="100"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--HfbXmSjk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/saue4qq5ic4uwoxm3peg.png"
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQ;
