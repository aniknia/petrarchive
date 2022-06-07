import { IconButton } from "@chakra-ui/react";
import { HeartFillIcon } from "@primer/octicons-react";
import { useState } from "react";
import CountUp from "react-countup";

export default function Like(props) {
  const [likes, setLikes] = useState(props.likes);
  const [lastLike, setLastLike] = useState(0);
  const [duration, setDuration] = useState(1.5);

  function increment() {
    setLastLike(likes);
    setLikes(likes + 1);
    setDuration(0.1);
  }

  return (
    <>
      <CountUp start={lastLike} end={likes} duration={duration} />

      <IconButton
        color="pink"
        aria-label="Like Petr"
        icon={<HeartFillIcon size={24} />}
        isRound={true}
        onClick={() => increment()}
      />
    </>
  );
}
