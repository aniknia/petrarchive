import { Flex, Box, Badge, Text } from "@chakra-ui/react";
import { Chrono } from "../node_modules/react-chrono/dist/react-chrono";
import { useColorModeValue } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

export default function Roadmap() {
  const colorMode = useColorModeValue("light", "dark");
  let light = {
    primary: "#222222",
    secondary: "#222222",
    cardBgColor: "white",
    cardForeColor: "black",
    titleColor: "black",
    titleColorActive: "black",
  };
  let dark = {
    primary: "#DEE4E7",
    secondary: "#DEE4E7",
    cardBgColor: "#2d3748",
    cardForeColor: "white",
    titleColor: "white",
    titleColorActive: "white",
  };
  /*let items={[
    {
      cardTitle: "Likes",
      cardDetailedText:
        "I want people to be able to have a place to like and share their favourite petrs. This might help people making petrs zero in on the most popular designs and what petrs could be remade or revived.",
    },
    {
      cardTitle: "Sorting",
      cardDetailedText:
        "Sorting will allow people to find the most recent (or the oldest) petrs in the petr archive.",
    },
    {
      cardTitle: "Searching",
      cardDetailedText:
        "Search functionality will allow users to find their personal favourite petrs or find what petrs are missing.",
    },
    {
      cardTitle: "Submitions",
      cardDetailedText:
        "Submitions will allow people to submit their own petrs, this can help whose who drops stickers to gauge their popularity before sinking money into their designs.",
    }]}*/

  return (
    <>
      <Flex justify="space-around" pt="20" pb="20" pr="5" pl="5">
        <Box>
          <Text fontSize="lg">
            This is a general roadmap for this site. Feel free to email
            suggestions or new petrs to hellp@petrarchive.io
          </Text>
        </Box>
      </Flex>
      <Chrono
        mode={isMobile ? "VERTICAL" : "VERTICAL_ALTERNATING"}
        hideControls={true}
        theme={colorMode == "light" ? light : dark}
      >
        <Box p="2">
          <Box mb="2" fontWeight="semibold" as="h4" noOfLines={1}>
            Likes
          </Box>
          <Box mb="2" display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Finished
            </Badge>
          </Box>
          <Box>
            I want people to be able to have a place to like and share their
            favourite petrs. This might help people making petrs zero in on the
            most popular designs and what petrs could be remade or revived.
          </Box>
        </Box>

        <Box p="2">
          <Box mb="2" fontWeight="semibold" as="h4" noOfLines={1}>
            Holiday Icons
          </Box>
          <Box mb="2" display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Finished
            </Badge>
          </Box>
          <Box>
            Custom Icons for holiday cheer. December and October are finished
            but others are soon to come!
          </Box>
        </Box>

        <Box p="2">
          <Box mb="2" fontWeight="semibold" as="h4" noOfLines={1}>
            Sorting
          </Box>
          <Box mb="2" display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              In Progess
            </Badge>
          </Box>
          <Box>
            Sorting will allow people to find the most recent (or the oldest)
            petrs in the petr archive.
          </Box>
        </Box>

        <Box p="2">
          <Box mb="2" fontWeight="semibold" as="h4" noOfLines={1}>
            Searching
          </Box>
          <Box mb="2" display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Planned
            </Badge>
          </Box>
          <Box>
            Search functionality will allow users to find their personal
            favourite petrs or find what petrs are missing.
          </Box>
        </Box>

        <Box p="2">
          <Box mb="2" fontWeight="semibold" as="h4" noOfLines={1}>
            Submitions
          </Box>
          <Box mb="2" display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Planned
            </Badge>
          </Box>
          <Box>
            Submitions will allow people to submit their own petrs, this can
            help whose who drops stickers to gauge their popularity before
            sinking money into their designs.
          </Box>
        </Box>
      </Chrono>
    </>
  );
}
