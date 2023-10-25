import { BtnGroup } from "@/components/BtnGroup/BtnGroup";
import { Calendar } from "@/components/Calendar/Calendar";
import { Stata } from "@/components/Stata/Stata";

export default function Home() {
  return (
    <main className="mx-auto h-screen max-w-[1200px] items-start justify-center px-4 pt-12">
      <div className="mb-4 flex h-[78vh] w-full justify-start gap-40 pt-8">
        <Stata />
        <Calendar />
      </div>
      <BtnGroup />
    </main>
  );
}
