import Image from "../node_modules/next/image";

export default function PetrImage(props) {
  return (
    <>
      <Image
        src={props.src}
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dwchlaftc/image/upload/v1654477692/petr_white_815f9fc831.png"
        alt="Petr"
        width={320}
        height={320}
      />
    </>
  );
}
