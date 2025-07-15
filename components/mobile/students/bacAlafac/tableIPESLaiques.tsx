"use client";
import UseInstitutionService from '@/service/service_institut_sup';
import { URLS } from '@/service/url';
import React, { useEffect, useState } from 'react';


const IPESLaiques = () => {

  const {
    institutionsLaiques,
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
          <thead className="font-bold text-[#4A62AA]">
            <tr>
              <th className="p-2 text-center  border border-x-0 border-[#4A62AA] ">Institution</th>
              <th className="p-2 text-center border border-x-0 border-[#4A62AA] ">Ville</th>
            </tr>
          </thead>
          {institutionsLaiques.map((item, index) => (

            <tbody>

              <tr
                key={item.id}
                className={`text-black border-b-2  text-center border-[#4A62AA] ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'
                  }`}

              >

                <td className="border border-x-0 text-black p-4">
                  {item.name}, {item.shortName}


                </td>
                <td>
                  {item.city}
                </td>

              </tr>

            </tbody>

          ))}
        </table>
      </div>
    </div>
  );
};

export default IPESLaiques;
