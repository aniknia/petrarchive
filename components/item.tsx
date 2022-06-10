import { useColorModeValue, Spacer, HStack, Box, Text } from "@chakra-ui/react";
import PetrImage from "./petrimage";

export default function Item(props) {
  const backgroundColor = useColorModeValue(
    "#EDF2F7",
    "rgba(255, 255, 255, 0.08)"
  );

  return (
    <>
      <Box
        width={320}
        m="15"
        borderRadius="lg"
        backgroundColor={backgroundColor}
        overflow="hidden"
      >
        <PetrImage src={props.petr.image} />

        <HStack
          justify="space-between"
          alignItems="center"
          pb="2"
          pr="2"
          pl="2"
          m="0"
        >
          <Text fontWeight="semibold" noOfLines={1}>
            {props.petr.name}
          </Text>
          <Spacer />
        </HStack>
      </Box>
    </>
  );
}
