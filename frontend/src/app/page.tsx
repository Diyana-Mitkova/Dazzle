import Image from "next/image";
import TextBox from "../components/text-box/TextBox";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Image
        width={1200}
        height={620}
        alt="header image"
        src="/header.webp"
        className="rounded-xl"
      />
      <TextBox />
    </div>
  );
}
