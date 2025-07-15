"use client";

import { useRouter } from "next/router";

export default function ButtonStage() {
  const router = useRouter();


  const handleSearch = () => {
    router.push("/students/depotCV");
  };
  const handleSearch1 = () => {
    router.push("/students/conseil");
  };


  return (
    <div className="flex flex-wrap pl-10 ">
      <div className="w-full  h-[35%] py-2">


        <div className="flex text-white gap-2  p-2 flex-row-4">
          <button className="w-full py-5 bg-[#4a70aa] font-bold rounded-md mb-2">
            POSTER UN STAGE
          </button>
          <button onClick={handleSearch} className="w-full py-5 bg-blue-700 font-bold rounded-md mb-2">
            DÉPOSER MON CV
          </button>
          <button className="w-full py-3 bg-blue-500  font-bold rounded-md mb-2">
            GUIDE POUR POSTULER À UNE OFFRE
          </button>
          <button onClick={handleSearch1} className="w-full py-3 bg-[#4A62AA] font-bold rounded-md mb-2">
            CONSEILS POUR RÉUSSIR SON STAGE
          </button>
        </div>
      </div>
    </div>
  );
}