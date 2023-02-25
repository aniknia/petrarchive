import { useState } from "react";
import { useColorModeValue, Spacer, HStack, Box, Text } from "@chakra-ui/react";
import Overlay from "./overlay";
import Underlay from "./underlay";
import Like from "./like";
import { isMobile } from "react-device-detect";

// TODO: Change to time to start and end coordinates to more accuratly determine a tap vs drag

export default function Item(props) {
  const backgroundColor = useColorModeValue(
    "#EDF2F7",
    "rgba(255, 255, 255, 0.08)"
  );
  const [hover, setHover] = useState(false);
  const [time, setTime] = useState(0);
  const [touchLocation, setTouchLocation] = useState([null, null]);

  function startTouch(event) {
    let t = new Date();
    event.preventDefault();
    setTouchLocation([event.touches[0].clientX, event.touches[0].clientY]);
    setTime(t.getTime());
  }

  function endTouch(event) {
    let t = new Date();
    event.preventDefault();
    const delta = 6;
    let xdiff = Math.abs(event.changedTouches[0].clientX - touchLocation[0]);
    let ydiff = Math.abs(event.changedTouches[0].clientY - touchLocation[1]);

    if (t.getTime() - time < 125 && xdiff < delta && ydiff < delta) {
      setHover(!hover);
    }
  }
  // onMouseOver={() => setHover(true)}
  // onMouseOut={() => setHover(false)}
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
        {isMobile ? (
          <Box
            onTouchStart={(event) => {
              startTouch(event);
            }}
            onTouchEnd={(event) => {
              endTouch(event);
            }}
          >
            {hover ? (
              <Overlay petr={props.petr} hover={hover} />
            ) : (
              <Underlay petr={props.petr} />
            )}
          </Box>
        ) : (
          <Box
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            {hover ? (
              <Overlay petr={props.petr} hover={hover} />
            ) : (
              <Underlay petr={props.petr} />
            )}
          </Box>
        )}

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
