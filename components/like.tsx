import { IconButton } from "@chakra-ui/react";
import { HeartFillIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  getCookies,
  setCookies,
  checkCookies,
  removeCookies,
} from "cookies-next";
import PetrProvider from "./petrprovider";

// TODO: likes counter starts at a dcrement of one, fix this
// TODO: implement a cleaner cookies system

export default function Like(props) {
  const [likes, setLikes] = useState(props.likes);
  const [likeState, setLikeState] = useState(verifyCookies());
  const [lastLikeState, setLastLikeState] = useState(verifyCookies());
  const [duration, setDuration] = useState(1.5);

  function verifyCookies() {
    if (checkCookies(props.id)) {
      return getCookies(props.id)[props.id] === "true" ? true : false;
    } else {
      setCookies(props.id, false);
      return getCookies(props.id)[props.id] === "true" ? true : false;
    }
  }

  function updateLikes(likeState: boolean) {
    fetch(process.env.API_HOST + "/api/petrs/" + props.id)
      .then((response) => response.json())
      .then((data) => {
        fetch(process.env.API_HOST + "/api/petrs/" + props.id, {
          method: "PUT",
          body: JSON.stringify({
            data: {
              likes: (data.data.attributes.likes = likeState
                ? data.data.attributes.likes + 1
                : data.data.attributes.likes - 1),
            },
          }),
        }).then((response) => response.json());
      });
  }

  useEffect(() => {
    if (likeState !== lastLikeState) {
      updateLikes(likeState);
      likeState ? setLikes(likes + 1) : setLikes(likes - 1);
      setCookies(props.id, likeState ? true : false);
      setLastLikeState(likeState);
    }
    setDuration(0.1);
  }, [likeState]);

  return (
    <>
      <CountUp start={lastLikeState} end={likes} duration={duration} />

      <IconButton
        color={likeState ? "red" : "pink"}
        aria-label="Like Petr"
        icon={<HeartFillIcon size={24} />}
        isRound={true}
        onClick={() => setLikeState(!likeState)}
      />
    </>
  );
}
