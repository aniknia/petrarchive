import { Text, IconButton } from "@chakra-ui/react";
import { HeartFillIcon } from "@primer/octicons-react";
import CountUp from "react-countup";

export default function Like(props) {
  return (
    <>
      <CountUp end={props.likes} duration={1.5} />

      <IconButton
        color="pink"
        aria-label="Like Petr"
        icon={<HeartFillIcon size={24} />}
        isRound={true}
      />
    </>
  );
}
