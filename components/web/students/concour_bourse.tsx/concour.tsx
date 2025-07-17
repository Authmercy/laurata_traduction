"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import InstitutionsPriveTable from "./tableInstitutionPrive";
import InstitutionsPublicTable from "./tableInstitutionPublique";
import InstitutionsTransnationaleTable from "./tableInstitutionTransnationales";
import FonctionPubliqueTable from "./tableFonctionPublic";
import LiberaleTable from "./tableLiberales";
import ForceArmeComponent from "./forceEtDefence";

import en from '../../../../i18/en/student/concous_bourse.json';
import fr from '../../../../i18/fr/student/concous_bourse.json';
import { useRouter } from "next/router";


export default function ConcourComponent() {

    const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">

                <div className="  mt-1">
                    <div className="flex w-full gap-2 text-white font-bold">

                        <div className="p-2 px-2 uppercase w-[35%] text-2xl text-center bg-[#9C824A] hover:bg-[#a19478] h-20 flex items-center justify-center">
                            <Link href="/students/concoursBourse">{t.concours.title}</Link>
                        </div>
                        <div className="p-3 px-8 text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
                            {t.concours.subtitle}
                        </div>

                    </div>

                    <div className="flex flex-row mt-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                               {t.concours.quote}
                            <br />  <span className="text-[#4A62AA] font-semibold "> Paulo Coelho </span>
                        </p>

                        </div>
                    </div>
                    <div
                        className="py-2 px-8 mt-4 w-full   bg-white/70 text-[#A87A38] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(7)}
                    >
                        <span className=" font-bold text-lg ">     {t.concours.instructionsTitle}</span>
                        <span className="text-xl">{open === 7 ? "▲" : "▼"}</span>
                    </div>
                    {open === 7 && (
                        <div className="bg-white/70   ">


                            <div className="w-full  py-4 px-8 text-black">

                                <p className=" font-bold mb-4">
                                 {t.concours.avant}
                                </p>
                                {t.concours.instructions.map((item, idx) => (
              <p key={idx}>
                <span className="text-[#4A62AA] font-bold">{['i)', 'ii)', 'iii)', 'iv)'][idx]}</span>&nbsp;&nbsp;{item}
              </p>
            ))}

                               <p className="mt-4">
              <span className="text-red-600 font-bold">{t.concours.warningTitle}<br /></span>
              - {t.concours.warning1}
            </p>
            <p>
              <span className="text-[#4A62AA] font-bold">-</span>
              <span className="text-red-600"> {t.concours.warning2} </span>
              {t.concours.warning3}
            </p>
            <p>- {t.concours.warning4}</p>
          </div>




                        </div>)}

                    <div
                        className="py-2 px-8 mt-4 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(4)}
                    >
                        <span className=" font-bold text-lg ">{t.concours.sections.public}</span>
                        <span className="text-xl">{open === 4 ? "▲" : "▼"}</span>
                    </div>
                    {open === 4 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">


                            </div>
                            <p className="text-lg text-center text-black p-2 bg-white">
                                  {t.concours.calendarHint} <b className="underline text-[#4A62AA] ">
                                    ici</b>.
                            </p>
                            <InstitutionsPublicTable></InstitutionsPublicTable>



                        </div>)}



                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(3)}
                    >
                        <span className=" font-bold text-lg">{t.concours.sections.private}</span>
                        <span className="text-xl">{open === 3 ? "▲" : "▼"}</span>
                    </div>
                    {open === 3 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">


                            </div>

                            <InstitutionsPriveTable></InstitutionsPriveTable>
                        </div>)}














                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(2)}
                    >
                        <span className=" font-bold text-lg ">{t.concours.sections.transnational}</span>
                        <span className="text-xl">{open === 2 ? "▲" : "▼"}</span>
                    </div>
                    {open === 2 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">


                            </div>
                            <InstitutionsTransnationaleTable></InstitutionsTransnationaleTable>
                        </div>)}
                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(1)}
                    >
                        <span className=" font-bold text-lg">{t.concours.sections.liberal}</span>
                        <span className="text-xl">{open === 1 ? "▲" : "▼"}</span>
                    </div>
                    {open === 1 && (
                        <div className="bg-white/70  ">

                            <div className="w-full  py-4 px-8 text-black">


                            </div>
                            <LiberaleTable></LiberaleTable>     </div>)}

                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(5)}
                    >
                        <span className=" font-bold  text-lg">{t.concours.sections.fonction} </span>
                        <span className="text-xl">{open === 5 ? "▲" : "▼"}</span>
                    </div>
                    {open === 5 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">


                            </div>
                            <FonctionPubliqueTable></FonctionPubliqueTable>
                        </div>)}

                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(6)}
                    >
                        <span className=" font-bold text-lg">{t.concours.sections.defense}</span>
                        <span className="text-xl">{open === 6 ? "▲" : "▼"}</span>
                    </div>
                    {open === 6 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">


                                <ForceArmeComponent></ForceArmeComponent>
                            </div>     </div>)}



                </div>
            </div>

        </div>




    );
}