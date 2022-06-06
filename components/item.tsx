import { useColorModeValue, VStack, HStack, Box, Text } from "@chakra-ui/react";
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
        borderWidth="1px"
        borderRadius="lg"
        borderColor={backgroundColor}
        backgroundColor={backgroundColor}
        overflow="hidden"
      >
        <PetrImage src={props.petr.attributes.image.data[0].attributes.url} />

        <HStack justify="space-between" p="2">
          <VStack align="baseline">
            <Text fontWeight="semibold" noOfLines={1}>
              {props.petr.attributes.name}
            </Text>
            <Text noOfLines={1}>Creator: {props.petr.attributes.author}</Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}
