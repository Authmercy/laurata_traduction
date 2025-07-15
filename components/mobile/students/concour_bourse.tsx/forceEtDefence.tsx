"use client";
import React, { useRef, useState } from "react";




export default function ForceArmeComponent() {

    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
    const AdminPenitentiare = [
        {
            id: 1,
            name: 'concours dentrée  à l École Régionale de Sécurité-Session de Hyun 2023',
            acronym: '',

            link: '',
        },
        {
            id: 2,
            name: ' ',
            acronym: ' ',

            link: '',
        },
        {
            id: 3,
            name: '',
            acronym: null,

            link: '',
        },

    ];
    const SapeurPompier = [
        {
            id: 1,
            name: 'concours dentrée  à l École Régionale de Sécurité-Session de Hyun 2023',

            link: '',
        },


    ];
    const ForceArme = [
        {
            id: 1,
            name: 'E.M.I.A',

            exam: [{
                id: 1,
                name: 'Troc A Recrutement ',
                link: '',
            },
            {
                id: 2,
                name: 'Troc C Recrutement ',
                link: '',
            },
            {
                id: 3,
                name: 'Troc B1 Recrutement ',
                link: '',
            },
            {
                id: 4,
                name: 'Troc B2(b) Recrutement ',
                link: '',
            },
            {
                id: 5,
                name: 'Troc D(b) Recrutement ',
                link: '',
            },
            {
                id: 6,
                name: 'Troc D(c) Recrutement ',
                link: '',
            },





            ]
        },
        {
            id: 2,
            name: 'Armée de l air',

            exam: [{
                id: 1,
                name: 'Troc A Recrutement ',
                link: '',
            },
            {
                id: 2,
                name: 'Troc C Recrutement ',
                link: '',
            },


            ]
        },
        {
            id: 3,
            name: 'Marine',

            exam: [{
                id: 1,
                name: 'Troc A Recrutement ',
                link: '',
            },
            {
                id: 2,
                name: 'Troc C Recrutement ',
                link: '',
            },


            ]
        },
        {
            id: 3,
            name: 'Police',

            exam: [{
                id: 1,
                name: 'Troc A Recrutement ',
                link: '',
            },
            {
                id: 2,
                name: 'Troc C Recrutement ',
                link: '',
            },


            ]
        },
        {
            id: 6,
            name: 'Gendamerie',

            exam: [{
                id: 1,
                name: 'Troc A Recrutement ',
                link: '',
            },
            {
                id: 2,
                name: 'Troc C Recrutement ',
                link: '',
            },


            ]
        },
        {
            id: 5,
            name: 'Autre Écoles',

            exam: [{
                id: 1,
                name: 'Troc A Recrutement ',
                link: '',
            },
            {
                id: 2,
                name: 'Troc C Recrutement ',
                link: '',
            },


            ]
        },

    ]; const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);



    return (

        <div className="flex flex-col   mt-1  ">



            <div>
                <div
                    className="py-2 px-8 mt-2 w-full   bg-[#1d9b23]  text-white font-bold flex justify-between items-center"

                    onClick={() => handleToggle(1)}
                >
                    <span className=" font-bold md:text-lg">ADMINISTRATION PÉNITENTIAIRE</span>
                    <span className="text-xl">{open === 1 ? "▲" : "▼"}</span>
                </div>
                {open === 1 && (
                    <div className="bg-white/70  ">


                        <div className="w-full  py-4 px-8 text-black">
                            <table className="border-collapse w-full text-start">

                                <tbody>
                                    {AdminPenitentiare.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className="text-black border-b-2 border-[#c1c6d8]"
                                        >
                                            <td className="border border-x-0   text-center text-[#4A62AA] font-bold md:p-4">
                                                {item.id}
                                            </td>
                                            <td className="border border-x-0 text-center text-[#4A62AA] md:font-bold md:p-4">
                                                {item.name}
                                            </td>
                                            <td className="border border-x-0   bg-white/70 md:p-2 text-center">
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#4A62AA] hover:underline"
                                                    >
                                                        Télécharger
                                                    </a>
                                                ) : (
                                                    'Non disponible'
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>



                        </div>     </div>)}


            </div>
            <div>
                <div
                    className="py-2 px-8 mt-2 w-full   bg-[#aa1b1b]  text-white font-bold flex justify-between items-center"

                    onClick={() => handleToggle(2)}
                >
                    <span className=" font-bold uppercase md:text-lg"> Forces ArméeS - police - Gendarmerie</span>
                    <span className="text-xl">{open === 2 ? "▲" : "▼"}</span>
                </div>
                {open === 2 && (
                    <div className="bg-white/70  ">


                        <div className="w-full  py-2  text-black">
                            <div className="space-y-4">
                                {ForceArme.map((item) => (
                                    <div key={item.id} className=" ">
                                        <h2 className=" text-[#4A62AA] font-bold text-lg text-center p-4">
                                            {item.name}
                                        </h2>
                                        <table className="border-collapse  bg-[#ececee] w-full text-start">

                                            <tbody>
                                                {item.exam.map((exam) => (
                                                    <tr
                                                        key={item.id}
                                                        className="text-black border-b-2 border-[#c1c6d8]"
                                                    >
                                                        <td className="border border-x-0   text-center text-[#4A62AA] font-bold md:p-4">
                                                            {item.id}
                                                        </td>
                                                        <td className="border border-x-0 text-center text-[#4A62AA] md:font-bold md:p-4">
                                                            {item.name}
                                                        </td>
                                                        <td className="border border-x-0   bg-white/70 md:p-2 text-center">
                                                            {exam.link ? (
                                                                <a
                                                                    href={exam.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-[#4A62AA] hover:underline"
                                                                >
                                                                    Télécharger
                                                                </a>
                                                            ) : (
                                                                'Non disponible'
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>





                        </div>     </div>)}


            </div>
            <div>
                <div
                    className="py-2 px-8 mt-2 w-full   bg-[#ddd020]  text-[#4A62AA] font-bold flex justify-between items-center"

                    onClick={() => handleToggle(3)}
                >
                    <span className=" font-bold md:text-lg text-center">SAPEUR-POMPIERS</span>
                    <span className="text-xl">{open === 3 ? "▲" : "▼"}</span>
                </div>
                {open === 3 && (
                    <div className="bg-white/70  ">


                        <div className="w-full  py-4 px-8 text-black">
                            <table className="border-collapse w-full text-start">

                                <tbody>
                                    {SapeurPompier.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className="text-black border-b-2 border-[#c1c6d8]"
                                        >
                                            <td className="border border-x-0   text-center text-[#4A62AA] font-bold md:p-4">
                                                {item.id}
                                            </td>
                                            <td className="border border-x-0 text-center text-[#4A62AA] md:font-bold md:p-4">
                                                {item.name}
                                            </td>
                                            <td className="border border-x-0   bg-white/70 md:p-2 text-center">
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#4A62AA] hover:underline"
                                                    >
                                                        Télécharger
                                                    </a>
                                                ) : (
                                                    'Non disponible'
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>



                        </div>     </div>)}


            </div>
        </div>



    );
}