"use client";
import UseInstitutionService from '@/service/service_institut_sup';
import { URLS } from '@/service/url';
import React, { useEffect, useState } from 'react';

type Institution = {
    id: number;
    name: string;
    shortName: string;
    faculties?: string[];
    schools?: string[];
    institutions?: string[];
    website?: string;
    addressEntries: Array<{ key: string; value: string }>
    city?: string;
};
const PublicSup = () => {

     const {
       institutionPublic,
          errorMessage,
          setErrorMessage,
          open,
      
        } = UseInstitutionService()
      

    return (
        <div className="w-full bg-white shadow-sm p-4">
            <div className="w-full overflow-x-auto">
                {errorMessage && (
                    <div className="text-red-600 text-center w-full py-4 bg-red-100 border border-red-300 rounded relative">
                        <button
                            className="absolute top-1 right-2 text-red-600 font-bold"
                            onClick={() => setErrorMessage(null)}
                        >
                            ×
                        </button>
                        {errorMessage}
                    </div>
                )}
              <table className="border-collapse w-full text-start">
                        <thead className="font-bold">
                            <tr>
                                <th className="p-2 text-center  border border-x-0 border-[#4A62AA] ">Institution</th>
                                <th className="p-2 text-center border border-x-0 border-[#4A62AA] ">Ville</th>
                            </tr>
                        </thead>
                           {institutionPublic.map((item, index) => (
                   
                        <tbody>

                            <tr
                                key={item.id}
                                className={`text-black border-b-2  text-center border-[#9C824A]    ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'
                                    }`}
                            >


                                <td className="border border-x-0 text-black  p-4">
                                    {item.name}, {item.shortName}

                                </td>
                                <td>
                                    {item.city}
                                </td>

                            </tr>

                        </tbody>
                  ))}  </table>
            </div>
        </div>
    );
};

export default PublicSup;
