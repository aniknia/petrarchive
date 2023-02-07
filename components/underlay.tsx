import PetrImage from "./petrimage";

export default function Underlay(props) {
  return (
    <>
      <PetrImage
        src={props.petr.image}
        official={props.petr.official}
        dropped={props.petr.dropped}
      />
    </>
  );
}
