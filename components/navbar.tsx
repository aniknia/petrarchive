import { Stack, Flex, Box, Divider } from "@chakra-ui/react";
import { QuestionIcon } from "@primer/octicons-react";
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
          <Box>
            <NavModal
              button={<QuestionIcon size={24} />}
              title="Info"
              body="Like your favourite Petr and show your love for our schools Petr addiction."
            />
          </Box>
          <Box>
            <Logo />
          </Box>
          <Box>
            <ColorModeSwitcher />
          </Box>
        </Flex>
        <Divider p="0" />
      </Stack>
    </>
  );
}
