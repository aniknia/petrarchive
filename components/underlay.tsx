import { HStack, Text, Spacer } from "@chakra-ui/react";
import PetrImage from "./petrimage";

export default function Underlay(props) {
  return (
    <>
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
    </>
  );
}
