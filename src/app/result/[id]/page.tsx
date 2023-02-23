import Link from "next/link";

async function getData(id: string) {
  const response = await fetch("http://localhost:3000/api/restaurant", {
    method: "POST",
    body: JSON.stringify({ id }),
  });

  const data = await response.json();

  return data;
}

export default async function Result({ params }) {
  const { id } = params;

  const { data } = await getData(id);

  return (
    <main>
      <h1>Result</h1>
      <p>{`이름: ${data.name}`}</p>
      <p>{`좌표: ${data.coordinate}`}</p>
      <p>{`거리: ${data.distance}미터`}</p>
      <p>{`시간: ${data.time / 60}분`}</p>

      <Link href={"/"}>다시 하기</Link>
    </main>
  );
}