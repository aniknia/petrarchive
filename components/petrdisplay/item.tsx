import { useState } from "react";
import { useColorModeValue, Spacer, HStack, Box, Text } from "@chakra-ui/react";
import Overlay from "./overlay";
import Underlay from "./underlay";
import Like from "./like";

export default function Item(props) {
  const backgroundColor = useColorModeValue(
    "#EDF2F7",
    "rgba(255, 255, 255, 0.08)"
  );
  const [hover, setHover] = useState(false);
  const [time, setTime] = useState(0);

  function startTimer() {
    let t = new Date();
    setTime(t.getTime());
  }

  function endTimer() {
    let t = new Date();
    if (t.getTime() - time < 150) {
      setHover(!hover);
    }
  }

  return (
    <>
      <Box
        width={320}
        height={364}
        m="15"
        borderWidth="1px"
        borderRadius="lg"
        borderColor={backgroundColor}
        backgroundColor={backgroundColor}
        overflow="hidden"
      >
        <Box
          cursor="pointer"
          onTouchStart={() => startTimer()}
          onTouchEnd={() => endTimer()}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {hover ? (
            <Overlay petr={props.petr} hover={hover} />
          ) : (
            <Underlay petr={props.petr} />
          )}
        </Box>

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
          <Like likes={props.petr.likes} id={props.petr.id} />
        </HStack>
      </Box>
    </>
  );
}
