import { useState } from "react";
import { useColorModeValue, Spacer, HStack, Box, Text } from "@chakra-ui/react";
import Overlay from "./overlay";
import Underlay from "./underlay";
import Like from "./like";

// TODO: Change to time to start and end coordinates to more accuratly determine a tap vs drag

export default function Item(props) {
  const backgroundColor = useColorModeValue(
    "#EDF2F7",
    "rgba(255, 255, 255, 0.08)"
  );
  const [hover, setHover] = useState(false);
  const [time, setTime] = useState(0);
  const [touchLocation, setTouchLocation] = useState([null, null]);

  function startTouch(x0, y0) {
    setTouchLocation([x0, y0]);
  }

  function endTouch(x, y) {
    const delta = 40000;
    let xdiff = Math.abs(x - touchLocation[0]);
    let ydiff = Math.abs(y - touchLocation[1]);
    let d = Math.sqrt(
      Math.pow(x - touchLocation[0], 2) + Math.pow(y - touchLocation[1], 2)
    );

    if (xdiff < delta && ydiff < delta) {
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
          onTouchStart={(event) =>
            startTouch(event.touches[0].clientX, event.touches[0].clientY)
          }
          onTouchEnd={(event) =>
            endTouch(event.touches[0].clientX, event.touches[0].clientY)
          }
          onTouchCancel={() => setHover(false)}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {hover ? (
            <Overlay
              cursor="pointer"
              onTouchStart={(event) =>
                startTouch(event.touches[0].clientX, event.touches[0].clientY)
              }
              onTouchEnd={(event) =>
                endTouch(event.touches[0].clientX, event.touches[0].clientY)
              }
              onTouchCancel={() => setHover(false)}
              petr={props.petr}
              hover={hover}
            />
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
