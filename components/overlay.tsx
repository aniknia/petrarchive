import { Box, Text, Badge } from "@chakra-ui/react";

export default function Overlay(props) {
  return (
    <>
      <Box
        display="inline-block"
        height={358}
        opacity={0.9}
        pb="2"
        pr="2"
        pl="2"
        m="0"
      >
        <Text fontWeight="semibold">{props.petr.name}</Text>
        <Text fontWeight="semibold">By: {props.petr.author}</Text>
        {props.petr.tags.map((tag, index) => (
          <Badge key={index} colorScheme="linkedin" mr="2">
            {tag}
          </Badge>
        ))}
      </Box>
      {props.children}
    </>
  );
}
