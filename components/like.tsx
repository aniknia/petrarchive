import { Text, IconButton } from "@chakra-ui/react";
import { HeartFillIcon } from "@primer/octicons-react";

export default function Like(props) {
  return (
    <>
      <IconButton icon={<HeartFillIcon size={16} />} />
      <Text>{props.likes}</Text>
    </>
  );
}
