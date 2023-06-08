import { Box, Select } from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "../provider/searchprovider";

export default function Sort() {
  const value = useContext(SearchContext);

  return (
    <>
      <Box p="1" minW="130">
        <Select
          variant="filled"
          onChange={(sort) => {
            value.changeSortType(sort.target.value);
          }}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Most Liked">Most Liked</option>
        </Select>
      </Box>
    </>
  );
}
