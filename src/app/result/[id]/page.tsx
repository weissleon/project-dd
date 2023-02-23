import Link from "next/link";
import { getRestaurantData } from "../../loader/getRestaurantData";

type Props = {
  params: { id: string };
};

export default async function Result({ params }: Props) {
  const { id } = params;

  if (id == "%5Bid%5D") return <main>Not found</main>;

  const data = await getRestaurantData(id);

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
