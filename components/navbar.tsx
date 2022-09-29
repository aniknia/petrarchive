import { Stack, Flex, Box, Divider } from "@chakra-ui/react";
import { QuestionIcon, WorkflowIcon } from "@primer/octicons-react";
import Link from "../node_modules/next/link";
import { ColorModeSwitcher } from "./colormodeswitcher";
import Logo from "./logo";
import NavModal from "./navmodal";

export default function NavBar() {
  return (
    <>
      <Stack>
        <Flex
          align="center"
          justify="space-between"
          gap="2"
          pt="2"
          pl="2"
          pr="2"
        >
          <Box p="1">
            <Link href="/roadmap">
              <a>
                <WorkflowIcon size={24} />
              </a>
            </Link>
          </Box>
          <Box p="1">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </Box>
          <Box p="1">
            <ColorModeSwitcher />
          </Box>
        </Flex>
        <Divider p="0" />
      </Stack>
    </>
  );
}
