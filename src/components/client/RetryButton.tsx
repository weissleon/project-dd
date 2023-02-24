"use client";
import { useRouter } from "next/navigation";

type Props = {};

const RetryButton = (props: Props) => {
  const router = useRouter();
  const handleOnRetryClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleOnRetryClick}
      className="bg-yellow-400 row-start-3 row-end-4 px-4 py-1 rounded-lg font-extrabold hover:bg-yellow-500 active:bg-yellow-600 justify-self-center self-center my-8"
    >
      다시 하기
    </button>
  );
};

export default RetryButton;
