import UseActuService from "@/service/service_actu";
import { URLS } from "@/service/url";
import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import ButtonAccueil from "../buttons/buttonAccueil";

export default function ActuComponent() {
    const router = useRouter();


    const handleClick = () => {
        router.push('/moreInfos/');
    };
    const handleClick1 = () => {
        router.push('/students/offresStage');
    };

    const {

        newsfeed,

        errorMessage,
        selectedItem,
        clicked,
        setClicked,
        setSelectedItem,
        groupedByMonth,
        handleViewDetails,
        handleItemClick,

        setErrorMessage,
        getMonthName,


    } = UseActuService()

    return (
        <div className="p-2 md:pl-8 text-black min-h-screen flex flex-col">
            <div className="flex flex-col flex-grow w-full">
                <div className="flex justify-center flex-col w-full">
                    <div className="border-2 mt-24 bg-[#e9e3d8] border-[#f3da94]">
                        <div className="border rounded shadow p-4 mx-auto">
                            <div className="bg-[#c09111] text-white font-bold px-3 py-1 inline-block mb-4">
                                {newsfeed.length > 0 ? newsfeed[0].year : ""}
                            </div>

                            <div className="flex flex-row">
                                <div className="w-6/12 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {errorMessage && (
                                        <div className="text-red-600 text-center w-full py-4 mt-10 bg-red-100 border border-red-300 rounded relative">
                                            <button
                                                className="absolute top-1 right-2 text-red-600 font-bold"
                                                onClick={() => setErrorMessage(null)}
                                            >
                                                ×
                                            </button>
                                            {errorMessage}
                                        </div>
                                    )}
                                    {Object.entries(groupedByMonth)
                                        .sort(([aKey], [bKey]) => {
                                            const [aYear, aMonth] = aKey.split("-").map(Number);
                                            const [bYear, bMonth] = bKey.split("-").map(Number);
                                            return aYear !== bYear ? bYear - aYear : bMonth - aMonth;
                                        })
                                        .map(([monthKey, items]) => {
                                            const [year, month] = monthKey.split("-");
                                            return (
                                                <div key={monthKey} className="bg-white shadow p-4">
                                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">
                                                        {`${getMonthName(parseInt(month))} ${year}`}
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {items.map((activity) => (
                                                            <li
                                                                key={activity.id}
                                                                onClick={() => handleItemClick(activity)}
                                                                className={`border-l-2 pl-2 hover:text-[#4A62AA] ${selectedItem?.id === activity.id ? 'text-[#4A62AA] font-bold' : 'text-black'} border-black`}
                                                            >
                                                                <div className="flex w-full items-center">
                                                                    <div>
                                                                        <div className="font-bold">{`${activity.day}`}</div>
                                                                        <span>{activity.title}</span>
                                                                    </div>
                                                                    <div className="text-2xl transform -rotate-90 ml-auto">
                                                                        ▼
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            );
                                        })}
                                </div>

                                <div className="bg-white ml-8 w-6/12 p-4">
                                    {selectedItem ? (
                                        <div>
                                            <h3 className="text-lg font-bold text-[#4A62AA]">{selectedItem.title}</h3>
                                            <p className="text-black">
                                                {`${selectedItem.day} ${getMonthName(selectedItem.month)} ${selectedItem.year}`}
                                            </p>
                                            <p className="text-base mt-8">{selectedItem.text}</p>
                                        </div>
                                    ) : (
                                        (() => {
                                            const mostRecentItem = Object.entries(groupedByMonth)
                                                .sort(([aKey], [bKey]) => {
                                                    const [aYear, aMonth] = aKey.split("-").map(Number);
                                                    const [bYear, bMonth] = bKey.split("-").map(Number);
                                                    return aYear !== bYear ? bYear - aYear : bMonth - aMonth;
                                                })[0]?.[1]?.[0];

                                            if (mostRecentItem) {
                                                return (
                                                    <div>
                                                        <h3 className="text-lg font-bold text-[#4A62AA]">{mostRecentItem.title}</h3>
                                                        <p className="text-black">
                                                            {`${mostRecentItem.day} ${getMonthName(mostRecentItem.month)} ${mostRecentItem.year}`}
                                                        </p>
                                                        <p className="text-base mt-8">{mostRecentItem.text}</p>
                                                    </div>
                                                );
                                            } else {
                                                return <p>Aucun contenu disponible</p>;
                                            }
                                        })()
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-10 flex flex-row justify-center gap-4">
 
             
                                  <ButtonAccueil />
                                
                     </div>
     
        </div>


    );
}