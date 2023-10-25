import Image from "next/image";

import { Button } from "@/ui/Button/Button";

export function BtnGroup() {
  const buttons = [
    { src: "/logo.png", link: "", alt: "logo" },
    { src: "/dispatcher.png", link: "", alt: "dispatcher" },
    { src: "/telegram.png", link: "", alt: "telegram" },
    { src: "/whatsapp.png", link: "", alt: "whatsapp" },
  ];

  return (
    <div className="btn_group flex w-full items-center justify-around bg-baseColor/0">
      {buttons.map(btn => (
        <BtnComponent
          btn={btn}
          key={btn.alt}
        />
      ))}
    </div>
  );
}

function BtnComponent({ btn }) {
  return (
    <a href={btn.link}>
      <Button style={`flex justify-center items-center`}>
        <Image
          src={btn.src}
          width={50}
          height={50}
          alt={btn.alt}
        />
      </Button>
    </a>
  );
}
