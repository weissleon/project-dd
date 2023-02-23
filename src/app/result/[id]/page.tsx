import Link from "next/link";

async function getData(id: string) {
  const response = await fetch(`${process.env.VERCEL_URL}/api/restaurant`, {
    method: "POST",
    body: JSON.stringify({ id }),
  });

  const data = await response.json();

  return data;
}

type Props = {
  params: {id: string}
}

export default async function Result({ params }: Props) {
  const { id } = params;

  const { data } = await getData(id);

  return (
    <main>
      <h1>결과</h1>
      <p>{`이름: ${data.name}`}</p>
      <p>{`좌표: ${data.coordinate}`}</p>
      <p>{`거리: ${data.distance}미터`}</p>
      <p>{`시간: ${data.time / 60}분`}</p>

      <Link href={"/"}>다시 하기</Link>
    </main>
  );
}
