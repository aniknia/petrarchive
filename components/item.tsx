import { useEffect, useState } from "react";
import { useColorModeValue, Spacer, HStack, Box, Text } from "@chakra-ui/react";
import PetrImage from "./petrimage";
import Overlay from "./overlay";
import Underlay from "./underlay";

export default function Item(props) {
  const backgroundColor = useColorModeValue(
    "#EDF2F7",
    "rgba(255, 255, 255, 0.08)"
  );
  const [hover, setHover] = useState(false);

  return (
    <>
      <Box
        width={320}
        height={358}
        m="15"
        borderRadius="lg"
        backgroundColor={backgroundColor}
        overflow="hidden"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {hover ? (
          <Overlay petr={props.petr} visibility={hover ? "vilible" : "hidden"}>
            <Underlay petr={props.petr} />
          </Overlay>
        ) : (
          <Underlay petr={props.petr} />
        )}
      </Box>
    </>
  );
}
