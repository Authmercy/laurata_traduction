import UseInstitutionService from '@/service/service_institut_sup';

import React from 'react';

const PublicSup = () => {
    const {
        institutionPublic,
        errorMessage,
        setErrorMessage,
        open,

    } = UseInstitutionService()

    return (
        <div className="w-full rounded-lg shadow-sm p-4">
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

                                <th className="p-2 border border-x-0 text-start border-[#4A62AA] ">INSTITUTION</th>
                                <th className="p-2  border border-x-0 text-start border-[#4A62AA] ">VILLE</th>
                            </tr>
                        </thead>
                            {institutionPublic.map((item, index) => (
                        <tbody>

                            <tr
                                key={item.id}
                                className={`text-black border-b-2   border-[#9C824A] `}
                            >

                                <td className="border border-x-0 text-black  p-4">
                                    {item.name}, {item.shortName}

                                </td>
                                <td>
                                    {item.city}
                                </td>

                            </tr>

                        </tbody>
                 
                ))}   </table>
            </div>
        </div>
    );
};

export default PublicSup;
