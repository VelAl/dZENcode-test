import Image from "next/image";

export const LoadingPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      <Image
        src={"/bouncing-circles.svg"}
        alt="loading ..."
        width={150}
        height={150}
      />
    </div>
  );
};
