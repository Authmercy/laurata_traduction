"use client";
import UseInstitutionService from '@/service/service_institut_sup';
import React from 'react';


const UnivPublique = () => {

    const {
         institutionsUnivPublic,
        errorMessage,
        setErrorMessage,
        open,

    } = UseInstitutionService()


 


    return (
     <div className="w-full rounded-lg shadow-sm ">
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
    {institutionsUnivPublic.map((item, index) => (
      <div
        key={index}
        className="text-black border-b-2 bg-white border-[#9b6e0f] my-4 p-2"
      >

        <div className="flex flex-col md:flex-row w-full justify-between gap-4">
          <div className="w-full md:w-1/4 text-center font-bold text-[#9b6e0f] flex items-center justify-center">
            <p>{item.name}</p>
          </div>

          <div className="w-full md:w-1/4 flex justify-center items-center">
            <img
              src=" "
              alt="Logo"
              className="h-24 w-auto object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 bg-white/70 p-4 text-sm">
            {item.addressEntries && (
              <div className="space-y-1">
                <div>
                  <span className="font-bold">Localisation :</span>
            <span className="ml-2">{item.city}</span>
                </div>
                <div>
                  <span className="font-bold">BP :</span>
                <span className="ml-2">
        {item.addressEntries.find(entry => entry.key === 'po_box')?.value}
      </span>
                </div>
                <div>
                  <span className="font-bold">Tél :</span>
          <span className="ml-2">
        {item.addressEntries.find(entry => entry.key === 'phone')?.value}
      </span>
                </div>
                <div>
                  <span className="font-bold">Email :</span>
                  <span className="ml-2">
        {item.addressEntries.find(entry => entry.key === 'email')?.value}
      </span>
                </div>
                <div>
                  <span className="font-bold">Site web :</span>
                  <span className="ml-2">
                    <a
                      href={item.website}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.website}
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

    
        <div className="space-y-4 mt-4">
          {item.faculties && item.faculties.length > 0 && (
            <div className="bg-[#e7ebf8] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
              <div className="font-bold p-2 bg-[#b2bee4] text-center md:text-end">Facultés</div>
              <div className="max-w-4xl p-2">
                {item.faculties.map((faculty, idx) => (
                  <p key={idx}>- {faculty}</p>
                ))}
              </div>
            </div>
          )}

          {item.schools && item.schools.length > 0 && (
            <div className="bg-[#e7ebf8] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
              <div className="font-bold p-2 bg-[#b2bee4] text-center md:text-end">Grandes écoles</div>
              <div className="max-w-4xl p-2">
                {item.schools.map((school, idx) => (
                  <p key={idx}>- {school}</p>
                ))}
              </div>
            </div>
          )}

          {item.institutions && item.institutions.length > 0 && (
            <div className="bg-[#e7ebf8] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
              <div className="font-bold p-2 bg-[#b2bee4] text-center md:text-end">Institutions</div>
              <div className="max-w-4xl p-2">
                {item.institutions.map((institute, idx) => (
                  <p key={idx}>- {institute}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>


    );
    
};

            export default UnivPublique;
