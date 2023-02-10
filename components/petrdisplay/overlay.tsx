import { Box, Text, Badge } from "@chakra-ui/react";
import { useState } from "react";

export default function Overlay(props) {
  const [official, setOfficial] = useState(props.petr.official);
  const [dropped, setDropped] = useState(props.petr.dropped);
  return (
    <>
      <Box
        display="inline-block"
        height={320}
        opacity={0.9}
        pt="1"
        pb="0"
        pr="2"
        pl="2"
        m="0"
      >
        <Text fontWeight="semibold">By: {props.petr.author}</Text>
        {official ? (
          <Badge colorScheme="green" mr="2">
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
          <Badge colorScheme="purple" mr="2">
            Dropped
          </Badge>
        ) : (
          <></>
        )}
        {props.petr.tags.map((tag, index) => (
          <Badge key={index} colorScheme="linkedin" mr="2">
            {tag}
          </Badge>
        ))}
      </Box>
    </>
  );
}
