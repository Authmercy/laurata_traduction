"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import en from '../../../../i18/en/student/concous_bourse.json';
import fr from '../../../../i18/fr/student/concous_bourse.json';

export default function ConcourBourse() {
   const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    return (
        <div className="p-2 md:pl-8 text-black" >
            <div className="flex pl-6 gap-1 w-full">
                <div className="flex justify-center flex-col">
                    <div className="flex justify-center">
                        <h1 className=" bg-[#A87A38] text-white  text-2xl text-center font-extrabold w-full  p-2">


                    {t.concours.title}
                        </h1></div>
                    <div className="bg-white/70 border-1 p-6 text-start border-[#4A62AA]">
                        <div className="flex flex-row mt-4 gap-1">
                            <div className="flex-1">
                                <img src="/images/concoursBourse.jpg" alt=""  />
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                <div className="flex flex-col justify-center gap-4 text-2xl">
                                    <Link href="/students/bourses">
                                        <div className="flex items-center  gap-2 py-2">
                                            <img src="/icons/puces_1.png" alt="" className="w-5" />
                                            <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] ">{t.scholarship}</p>
                                        </div>
                                    </Link>

                                    <Link href="/students/concours">
                                        <div className="flex items-center  gap-2 py-2">
                                            <img src="/icons/puces_1.png" alt="" className="w-5" />
                                            <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] ">{t.concour}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>




                </div >



            </div>
        </div>

    );
}
