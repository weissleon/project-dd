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
    <main>
      <h1>오늘은 어디서 먹을까?</h1>
      <button onClick={handleOnClick}>뽑아주세요</button>
    </main>
  );
}
