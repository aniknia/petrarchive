import { Stack, Flex, Box, Center, Divider } from "@chakra-ui/react";
import { QuestionIcon, WorkflowIcon } from "@primer/octicons-react";
import Link from "../../node_modules/next/link";
import { ColorModeSwitcher } from "./colormodeswitcher";
import Logo from "./logo";
import LoginNavButton from "./loginnavbutton";

export default function NavBar() {
  return (
    <>
      <Stack>
        <Flex
          justify="space-between"
          gap="2"
          pt="2"
          pl="2"
          pr="2"
          height="48px"
        >
          <Box p="1" flex="1">
            <Link href="/roadmap">
              <a>
                <WorkflowIcon size={24} />
              </a>
            </Link>
          </Box>
          <Center p="1" flex="1">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </Center>
          <Flex p="1" flex="1" justify="end">
            <LoginNavButton />
            <ColorModeSwitcher />
          </Flex>
        </Flex>
        <Divider p="0" />
      </Stack>
    </>
  );
}
