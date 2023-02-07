import { useState } from "react";
import Image from "../node_modules/next/image";
import { Box, Badge } from "@chakra-ui/react";

export default function PetrImage(props) {
  const [official, setOfficial] = useState(props.official);
  const [dropped, setDropped] = useState(props.dropped);
  const imgStyle = { display: "inline-block" };
  return (
    <>
      <Box width={320} height={320} position="relative">
        {official ? (
          <Badge
            colorScheme="green"
            display="inline-block"
            position="absolute"
            top="0"
            left="0"
            zIndex="10"
          >
            Official
          </Badge>
        ) : (
          <Badge
            colorScheme="yellow"
            display="inline-block"
            position="absolute"
            top="0"
            left="0"
            zIndex="10"
          >
            Community
          </Badge>
        )}
        {dropped ? (
          <Badge
            colorScheme="purple"
            display="inline-block"
            position="absolute"
            top="5"
            left="0"
            zIndex="10"
          >
            Dropped
          </Badge>
        ) : (
          <></>
        )}
        <Image
          src={props.src}
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dwchlaftc/image/upload/v1654477692/petr_white_815f9fc831.png"
          alt="Petr"
          width={320}
          height={320}
          style={imgStyle}
        />
      </Box>
    </>
  );
}
