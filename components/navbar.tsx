import { Stack, Flex, Box, Spacer, Divider } from "@chakra-ui/react";
import { QuestionIcon } from "@primer/octicons-react";
import { ColorModeSwitcher } from "./colormodeswitcher";
import Logo from "./logo";
import NavModal from "./navmodal";

export default function NavBar() {
  return (
    <>
      <Stack>
        <Flex align="center" gap="2" pt="2" pd="0" pl="2" pr="2">
          <Box width={88}></Box>
          <Spacer />
          <Box>
            <Logo />
          </Box>
          <Spacer />
          <Box>
            <NavModal
              button={<QuestionIcon size={24} />}
              title="Info"
              body=""
            />
            <ColorModeSwitcher />
          </Box>
        </Flex>
        <Divider p="0" />
      </Stack>
    </>
  );
}
