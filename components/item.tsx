import {
  useColorModeValue,
  VStack,
  HStack,
  Box,
  Text,
  IconButton,
} from "@chakra-ui/react";
import Like from "./like";
import PetrImage from "./petrimage";
import { HeartFillIcon } from "@primer/octicons-react";

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
        <PetrImage src={props.petr.attributes.image.data[0].attributes.url} />

        <HStack justify="space-between" p="2">
          <VStack align="baseline">
            <Text fontWeight="semibold" noOfLines={1}>
              {props.petr.attributes.name}
            </Text>
            <Text noOfLines={1}>Creator: {props.petr.attributes.author}</Text>
          </VStack>
          <VStack>
            <IconButton
              variant="unstyled"
              icon={<HeartFillIcon size={16} />}
              height="28px"
            />
            <Text height="28px">{props.petr.attributes.likes}</Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}
