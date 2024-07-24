import { IconButton } from "@chakra-ui/react";
import { HeartFillIcon } from "@primer/octicons-react";
import { useEffect, useState, useContext } from "react";
import CountUp from "react-countup";
import { getCookies, setCookie, hasCookie } from "cookies-next";
import { PetrContext } from "../provider/petrprovider";

// TODO: likes counter starts at a dcrement of one, fix this
// TODO: implement a cleaner cookies system

export default function Like(props) {
  const [lastLikes, setLastLikes] = useState(0);
  const [likes, setLikes] = useState(props.likes);
  const [likeState, setLikeState] = useState(verifyCookies());
  const [lastLikeState, setLastLikeState] = useState(verifyCookies());
  const [duration, setDuration] = useState(1.5);

  const petr = useContext(PetrContext);

  function verifyCookies() {
    if (hasCookie(props.id)) {
      return getCookies(props.id)[props.id] === "true" ? true : false;
    } else {
      setCookie(props.id, false, { sameSite: "none" });
      return getCookies(props.id)[props.id] === "true" ? true : false;
    }
  }

  useEffect(() => {
    if (likeState !== lastLikeState) {
      petr.updateLikes(props.id, likeState);
      setLastLikes(likes);
      likeState ? setLikes(likes + 1) : setLikes(likes - 1);
      setCookie(props.id, likeState ? true : false);
      setLastLikeState(likeState);
    }
    setDuration(0.1);
  }, [likeState]);

  return (
    <>
      <CountUp start={lastLikes} end={likes} duration={duration} />

      <IconButton
        color={likeState ? "red" : "pink"}
        aria-label="Like Petr"
        icon={<HeartFillIcon size={24} />}
        isRound={true}
        background="none"
        onClick={() => setLikeState(!likeState)}
      />
    </>
  );
}
