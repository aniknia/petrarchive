import { IconButton } from "@chakra-ui/react";
import { HeartFillIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { getCookies, setCookies, hasCookie, removeCookies } from "cookies-next";
import PetrProvider from "./petrprovider";

// TODO: likes counter starts at a dcrement of one, fix this
// TODO: implement a cleaner cookies system

export default function Like(props) {
  const [lastLikes, setLastLikes] = useState(0);
  const [likes, setLikes] = useState(props.likes);
  const [likeState, setLikeState] = useState(verifyCookies());
  const [lastLikeState, setLastLikeState] = useState(verifyCookies());
  const [duration, setDuration] = useState(1.5);

  function verifyCookies() {
    if (hasCookie(props.id)) {
      return getCookies(props.id)[props.id] === "true" ? true : false;
    } else {
      setCookies(props.id, false, { sameSite: "lax" });
      return getCookies(props.id)[props.id] === "true" ? true : false;
    }
  }

  function updateLikes(likeState: boolean) {
    fetch(process.env.API_HOST + "/api/petrs/" + props.id)
      .then((response) => response.json())
      .then((data) => {
        let body = JSON.stringify({
          data: {
            id: props.id,
            likes: (data.data.attributes.likes = likeState
              ? data.data.attributes.likes + 1
              : data.data.attributes.likes - 1),
          },
        });
        fetch(process.env.API_HOST + "/api/petrs/" + props.id, {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + process.env.API_KEY,
            "Content-Type": "application/json",
          },
          body: body,
        }).then((response) => response.json());
      });
  }

  useEffect(() => {
    if (likeState !== lastLikeState) {
      updateLikes(likeState);
      setLastLikes(likes);
      likeState ? setLikes(likes + 1) : setLikes(likes - 1);
      setCookies(props.id, likeState ? true : false);
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
        onClick={() => setLikeState(!likeState)}
      />
    </>
  );
}
