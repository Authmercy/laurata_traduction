"use client";

import { useRouter } from "next/router";

export default function ButtonStage() {
  const router = useRouter();


  const handleClick = () => {
    router.push("/students/depotCV");
  };
  const handleClick1 = () => {
    router.push("/students/conseil");
  };
  const handleClick2 = () => {
    router.push("/students/AccueilDeStage");
  };
  const handleClick3 = () => {
    router.push("/entreprise/poster/#editer");
  };
  return (
    <div className="flex flex-wrap  ">
      <div className="w-full  h-[35%] py-8">


        <div className="flex text-white gap-2   flex-row-4">
          <button onClick={handleClick3} className="w-full py-5  bg-blue-700 hover:bg-[#A87A38] rounded-md mb-2">
            POSTER UN STAGE
          </button>
          <button onClick={handleClick} className="w-full py-5   bg-[#4a70aa] hover:bg-[#A87A38]  rounded-md mb-2">
            DÉPOSER MON CV
          </button>
          <button onClick={handleClick2} className="w-full py-3 px-8 text-center hover:bg-[#A87A38] bg-blue-500  rounded-md mb-2">
            GUIDE POUR POSTULER À UNE OFFRE
          </button>
          <button onClick={handleClick1} className="w-full py-3 bg-[#4A62AA] hover:bg-[#A87A38] rounded-md mb-2">
            CONSEILS POUR RÉUSSIR SON STAGE
          </button>
        </div>
      </div>
    </div>
  );
}