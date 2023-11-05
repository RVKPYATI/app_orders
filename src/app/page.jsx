import { MainOrders } from "@/components/MainOrders/MainOrders";

export default async function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[1200px] items-start justify-center px-4 pt-12">
      <MainOrders />
    </main>
  );
}
