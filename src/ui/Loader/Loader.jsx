import Image from "next/image";

export function Loader() {
  return (
    <div className="f-full flex h-[90vh] items-center justify-center">
      <Image
        src={"/loader.svg"}
        width={50}
        height={50}
        alt="loader"
      />
    </div>
  );
}