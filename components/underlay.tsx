import PetrImage from "./petrimage";

export default function Underlay(props) {
  return (
    <>
      <PetrImage src={props.petr.image} />
    </>
  );
}
