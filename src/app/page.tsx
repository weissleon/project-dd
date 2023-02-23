"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleOnClick = async () => {
    const response = await fetch("api/pick");
    const data = await response.json();
    router.push(`./result/${data.pick}`);
  };

  return (
    <main className="h-screen bg-yellow-200">
      <nav className="h-14 bg-white grid grid-cols-3 shadow-md items-center justify-items-center">
        <h1 className="col-start-2 col-end-3 font-black uppercase text-xl text-transparent bg-gradient-to-r from-yellow-500 to-green-400 bg-clip-text select-none">
          Captain Menu
        </h1>
      </nav>
      <section className="h-[calc(100%-56px)] bg-green-50 flex items-center justify-center">
        <div className="bg-white rounded-md shadow-md min-w-[400px] min-h-[200px] items-center justify-between py-12 flex flex-col">
          <h1 className="font-black">오늘은 어디서 먹을까?</h1>
          <button
            onClick={handleOnClick}
            className="bg-yellow-400 px-4 py-1 rounded-lg font-extrabold hover:bg-yellow-500 active:bg-yellow-600"
          >
            뽑아보자
          </button>
        </div>
      </section>
    </main>
  );
}
