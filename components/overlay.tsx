import { Box, HStack, Text, Badge, Spacer } from "@chakra-ui/react";

export default function Overlay(props) {
  return (
    <>
      <Box
        display="inline-block"
        height={326}
        opacity={0.9}
        pt="1"
        pb="0"
        pr="2"
        pl="2"
        m="0"
      >
        <Text fontWeight="semibold">By: {props.petr.author}</Text>
        {props.petr.tags.map((tag, index) => (
          <Badge key={index} colorScheme="linkedin" mr="2">
            {tag}
          </Badge>
        ))}
      </Box>
    </>
  );
}
