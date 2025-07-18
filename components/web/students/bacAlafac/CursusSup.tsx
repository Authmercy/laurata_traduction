"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import en from '@/i18/en/student/choisirSonCursus.json';
import fr from '@/i18/fr/student/choisirSonCursus.json';
import { useRouter } from "next/router";
export default function CursusSupComponent() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };

    const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;



    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">

                <div className="  mt-1">


                    <div className="flex w-full uppercase gap-2 text-white font-bold">

                        <div className="p-2 px-2    w-[35%]  text-2xl text-center  bg-[#9C824A] hover:bg-[#a19478]  h-20 flex items-center justify-center">

                            <Link href="/students/bacAlafac/bac_fac"> {t.orientation}</Link>
                        </div>


                        <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
                            {t.title}
                        </div>

                    </div>
                    <div className="flex flex-row my-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                            {t.quote}
                            <br />  <span className="text-[#4A62AA] font-semibold ">Stendahl</span>
                        </p>

                        </div>
                    </div>

                    <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
                        <p>
                            {t.p1} </p>
                        <p>{t.p2}
                        </p>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(1)}
                                >
                                    <span>{t.academicOrientation.title}    </span>
                                    <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                                {open === 1 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p> <span className="text-[#4A62AA] font-bold"> {t.academicOrientation.intro}  </span> {t.academicOrientation.intro2} </p>
                                            <div >

                                                <div className="m-6">
                                                    {t.academicOrientation.points.map((point, index) => (
                                                        <p key={index} >
                                                            <span className="text-[#4A62AA] text-2xl font-bold mr-2">-</span>
                                                            {point}
                                                        </p>
                                                    ))}

                                                </div>

                                                <p className="mt-4  font-bold  text-[#4A62AA] ">
                                                    {t.academicOrientation.howTo} </p>

                                            </div>


                                            <div className="m-6">
                                                {t.academicOrientation.actions.map((action, index) => (
                                                    <p key={index} >
                                                        <span className="text-[#4A62AA] text-2xl font-bold mr-2">-</span>
                                                        <b className="uppercase">{action.verb}</b> {action.text}
                                                    </p>
                                                ))}

                                            </div>
                                            <p className="mt-4  font-bold text-[#4A62AA] ">
                                                {t.academicOrientation.intelligencesTitle}

                                            </p>
                                            <table className="w-full text-left border-2 border-gray-300">
                                                <tbody>
                                                    {t.academicOrientation.intelligences.map((intelligence, index) => (
                                                        <tr
                                                            key={index}
                                                            className={`text-black ${index % 2 === 0 ? 'bg-[#f1d9b6]/70' : ''}`}
                                                        >
                                                            <td className="border border-x-0 font-bold p-4 text-[#4A62AA]">
                                                                {intelligence.number}
                                                            </td>
                                                            <td className="border border-x-0 p-2 text-start font-semibold">
                                                                {intelligence.type}
                                                            </td>
                                                            <td className="border border-x-0 p-2 text-start">
                                                                <p>{intelligence.description}</p>
                                                                <p className="mt-1">
                                                                    <span className="text-[#4A62AA]">  {t.academicOrientation.profession} </span>
                                                                    <i> {intelligence.professions}</i>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            <p className="font-bold text-orange-500 uppercase mt-8"> {t.academicOrientation.recommendationsTitle} </p>
                                            <div className="m-6 ">
                                                {t.academicOrientation.recommendations.map((action, index) => (
                                                    <p key={index} >

                                                        -     <i className="text-[#4A62AA]"> {action.italics}</i> {action.text}
                                                    </p>
                                                ))}




                                                <p className="mt-4">
                                                    <b>
                                                        <Link
                                                            href="/misc/nous_contacter"
                                                            className="hover:text-2xl"
                                                        >
                                                            {t.academicOrientation.contactLink}
                                                        </Link>
                                                    </b> {t.academicOrientation.contactText}
                                                </p>
                                            </div>

                                        </div>


                                    </div>)}









                            </div>


                        </div>


                        <div className="mt-1 space-y-4">
                            <div>
                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span>{t.whereToStudy.title}</span>
                                    <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>

                                {open === 2 && (
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full">
                                            <p>{t.whereToStudy.intro}</p>

                                            <div className="mt-6">
                                                <table className="w-full text-left border-2 border-gray-300">
                                                    <tbody>
                                                        {t.whereToStudy.considerations.map((item, index) => (
                                                            <tr
                                                                key={index}
                                                                className={`text-black ${index % 2 === 1 ? 'bg-[#becbf3]/70' : ''}`}
                                                            >
                                                                <td className="border p-2 text-start font-bold">
                                                                    {item.title}
                                                                </td>
                                                                <td className="border p-2 text-start">
                                                                    <p><i>{item.text}</i></p>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>

                                                <div className="mt-4">
                                                    <table className="table-auto border-collapse border shadow-lg w-full">
                                                        <thead>
                                                            <tr className="flex">
                                                                {t.whereToStudy.institutions.headers.map((header, index) => (
                                                                    <th
                                                                        key={index}
                                                                        className="border-y-2 border-[#A87A38] flex-1 px-4 py-2 text-[#4A62AA] uppercase text-center"
                                                                    >
                                                                        {header}
                                                                    </th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="flex text-start">

                                                                <td className="text-start bg-[#d8c6ad]/90 flex-1 px-4">
                                                                    <p>{t.whereToStudy.institutions.iut.intro}</p>
                                                                    {t.whereToStudy.institutions.iut.points.map((point, index) => (
                                                                        <p key={index} className="m-4">
                                                                            - <i>{point}</i>
                                                                        </p>
                                                                    ))}
                                                                </td>

                                                                <td className="bg-[#d8c6ad]/70 px-4 flex-1">
                                                                    <p>{t.whereToStudy.institutions.universities.intro}</p>
                                                                    {t.whereToStudy.institutions.universities.points.map((point, index) => (
                                                                        <p key={index} className="m-4">
                                                                            - <i>{point}</i>
                                                                        </p>
                                                                    ))}
                                                                </td>


                                                                <td className="bg-[#d8c6ad]/40 px-4 flex-1">
                                                                    <p>{t.whereToStudy.institutions.prepas.text}</p>
                                                                    <p className="mt-4">{t.whereToStudy.institutions.prepas.additional}</p>
                                                                </td>

                                                                <td className="bg-[#d8c6ad]/30 flex-1 px-4 py-2">
                                                                    <p>{t.whereToStudy.institutions.vocational.text}</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>




                        <div className="mt-1 space-y-4">
                            <div>
                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(4)}
                                >
                                    <span>{t.dropoutPrevention.title}</span>
                                    <span className="text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>

                                {open === 4 && (
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full">
                                            {t.dropoutPrevention.points.map((point, index) => (
                                                <div
                                                    key={index}
                                                    className={`mt-2 p-2 grid grid-cols-[1fr_3fr] gap-8 ${index % 2 === 0 ? 'bg-[#becbf3]' : ''
                                                        }`}
                                                >
                                                    <div className="font-bold text-start">
                                                        {point.title}
                                                    </div>
                                                    <div className="max-w-4xl">
                                                        <p>{point.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-1 space-y-4">
                            <div>
                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(5)}
                                >
                                    <span>{t.stressManagement.title}</span>
                                    <span className="text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>

                                {open === 5 && (
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full">
                                            <p dangerouslySetInnerHTML={{ __html: t.stressManagement.intro }}></p>

                                            <p className="font-bold mt-2">
                                                {t.stressManagement.combatTitle}
                                            </p>


                                            <div className="mt-2 bg-[#becbf3] p-2 grid grid-cols-[1fr_3fr] gap-8">
                                                <div className="font-bold text-start">
                                                    {t.stressManagement.lifestyle.title}
                                                </div>
                                                <div className="max-w-4xl">
                                                    {t.stressManagement.lifestyle.points.map((point, index) => (
                                                        <p key={index} className="flex items-start">
                                                            <span className="text-[#4A62AA] mr-2">■</span>
                                                            {point}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Stressors Section */}
                                            <div className="mt-2 p-2 grid grid-cols-[1fr_3fr] gap-8">
                                                <div className="font-bold text-start">
                                                    {t.stressManagement.stressors.title}
                                                </div>
                                                <div className="max-w-4xl">
                                                    {t.stressManagement.stressors.points.map((point, index) => (
                                                        <p key={index} className="flex items-start">
                                                            <span className="text-[#4A62AA] mr-2">■</span>
                                                            {point}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Reactions Section */}
                                            <div className="mt-2 bg-[#becbf3] p-2 grid grid-cols-[1fr_3fr] gap-8">
                                                <div className="font-bold text-start">
                                                    {t.stressManagement.reactions.title}
                                                </div>
                                                <div className="max-w-4xl">
                                                    {t.stressManagement.reactions.points.map((point, index) => (
                                                        <p key={index} className="flex items-start">
                                                            <span className="text-[#4A62AA] mr-2">■</span>
                                                            {point}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-1 space-y-4">

                            <div>
                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(6)}
                                >
                                    <span>{t.reorientationTitle}</span>
                                    <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                </button>

                                {open === 6 && (
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full">
                                            <p>{t.reorientationText}</p>
                                        </div>
                                    </div>
                                )}
                            </div>


                            <div>
                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(8)}
                                >
                                    <span>{t.referencesTitle}</span>
                                    <span className="text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                </button>

                                {open === 8 && (
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full">
                                            {t.references.map((reference, index) => (
                                                <p key={index} className="mb-2">
                                                    ‒ {reference}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>


                            <div>
                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span>{t.usefulLinksTitle}</span>
                                    <span className="text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>

                                {open === 7 && (
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full space-y-2">
                                            {t.usefulLinks.map((link, index) => (
                                                <p key={index}>
                                                    - {link.text}<br />
                                                    <a
                                                        href={link.url}
                                                        className="text-blue-600"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i>{link.url}</i>
                                                    </a>
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>




    );
}