"use client";

import Link from "next/link";


export default function FondamentauxPourPostuler() {


  return (
    <div className="flex flex-wrap pl-10 pt-6">
      <div className="flex-grow md:w-2/3  text-black  p-8">
        <div className="  bg-[#A87A38]  p-3 text-center font-bold uppercase text-2xl text-white ">

          GUIDE POUR POSTULER À UNE OFFRE </div>
        <div className="bg-white/70 border-1 p-6 text-start border-[#4A62AA]">

          <div className="flex  flex-row mt-4 gap-1">
            <div className="flex-1">
              <img src="/images/concoursBourse.jpg" alt="" />
            </div>
            <div className="flex-1 text-lg flex items-center justify-center">
              <div className="flex flex-col justify-center gap-4 ">
                <Link href="/students/postulerStage">
                  <div className="flex items-center gap-2 py-2">
                    <img src="/icons/puces_1.png" alt="" className="w-5 " />
                    <p className="text-[#4A62AA]  text-2xl font-bold  hover:text-[#A87A38] "> Postuler à  un  stage</p>
                  </div>
                </Link>
                <Link href="/students/premierEmploi">
                  <div className="flex items-center gap-2 py-2">


                    <img src="/icons/puces_1.png" alt="" className="w-5" />
                    <p className="text-[#4A62AA] font-bold  text-2xl hover:text-[#A87A38] ">   Postuler à  un premier emploi </p>
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}