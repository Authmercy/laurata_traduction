"use client";

import { useRouter } from "next/router";

export default function ButtonStage2() {
  const router = useRouter();
  const handleClick2 = () => {
    router.push("/students/AccueilDeStage");
  };
  const handleClick3 = () => {
    router.push("/entreprise/poster/#editer");
  };
  const handleSearch = () => {
    router.push("/students/depotCV");
  };
  const handleSearch1 = () => {
    router.push("/students/conseil");
  };
  return (
    <div className="flex flex-row mt-16 mb-6 justify-center  ">
      <div className="  h-[35%] py-2">


        <div className="flex text-white gap-2  p-2 flex-row-3">
          <button onClick={handleClick3} className="w-[75%]  py-5  px-2 bg-[#10489c] hover:bg-[#A87A38] rounded-md mb-2">
            POSTER UN STAGE
          </button>
          <button onClick={handleSearch} className="w-[75%] py-5  px-2 bg-blue-700  hover:bg-[#A87A38] rounded-md mb-2">
            DÉPOSER MON CV
          </button>
          <button onClick={handleClick2} className="w-[75%] py-3   p-2 text-center  bg-blue-500  hover:bg-[#A87A38] rounded-md mb-2">
            GUIDE POUR POSTULER À UNE OFFRE
          </button>

        </div>
      </div>
    </div>
  );
}