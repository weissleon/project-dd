import Link from "next/link";
import { getRestaurantData } from "../../../loader/getRestaurantData";

type Props = {
  params: { id: string };
};

export default async function Result({ params }: Props) {
  const { id } = params;

  if (id == "%5Bid%5D") return <main>Not found</main>;

  const data = await getRestaurantData(id);

  return (
    <main className="h-screen bg-yellow-200">
      <nav className="h-14 bg-white grid grid-cols-3 shadow-md items-center justify-items-center">
        <h1 className="col-start-2 col-end-3 font-black uppercase text-xl text-transparent bg-gradient-to-r from-yellow-500 to-green-400 bg-clip-text select-none">
          Captain Menu
        </h1>
      </nav>
      <section className="h-[calc(100%-56px)] bg-green-50 flex items-center justify-center">
        <div className="bg-white rounded-md shadow-md min-w-[400px] min-h-[200px] grid grid-rows-[auto_1fr_auto]">
          <h1 className="font-black text-xl row-start-1 row-end-2 justify-self-center mt-2">
            결과
          </h1>
          <div className="row-start-2 row-end-3 flex flex-col">
            <p className="text-3xl font-black self-center my-8">{`${data.name}`}</p>
            {/* <p>{`좌표: ${data.coordinate}`}</p> */}
            <p className="mx-4">{`주소: ${data.address}`}</p>
            <p className="mx-4">{`거리: ${data.distance}미터`}</p>
            <p className="mx-4">{`시간: ${data.time / 60}분`}</p>
          </div>
          <Link
            href={"/"}
            className="bg-yellow-400 row-start-3 row-end-4 px-4 py-1 rounded-lg font-extrabold hover:bg-yellow-500 active:bg-yellow-600 justify-self-center self-center my-8"
          >
            다시 하기
          </Link>
        </div>
      </section>
    </main>
  );
}
