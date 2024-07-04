import { Box, Select } from "@chakra-ui/react";

export default function Sort(props) {

  return (
    <>
      <Box p="1" minW="130">
        <Select
          variant="filled"
          onChange={(sort) => {
            props.changeState(sort.target.value);
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
