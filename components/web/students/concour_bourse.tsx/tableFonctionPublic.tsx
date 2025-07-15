import UseConcourService from '@/service/service_concours';
import React from 'react';

const FonctionPubliqueTable = () => {

    
          const {
                   concours,
    setConcours,
    errorMessage
          
              } = UseConcourService()
           
        
    return (
        <div className="w-full rounded-lg shadow-sm p-4">
            <div className="w-full overflow-x-auto">
                <table className="border-collapse w-full text-start">
                    <thead className="font-bold  bg-[#4A62AA] text-white">
                        <tr>
                            <th className="p-2 text-center">N°</th>
                         <th className="p-2 text-center  border border-x-0 border-[#9C824A] ">RÉFÉRENCES DU CONCOURS <i className='font-normal'> – EXAM’S REFERENCES  </i></th>
                            <th className="p-2 text-center border  border-x-0 border-[#9C824A] ">LIEN  <i className='font-normal'> – LINK</i></th>
                        </tr>
                    </thead>
                    <tbody>
                       {concours
                            .filter(item => item.category === "PUBLIC_SERVICE")
                            .map((item, index) => (
                            <tr
                                key={item.id}
                                className="text-black border-b-2 border-[#4A62AA]"
                            >
                                <td className="border border-x-0 text-center text-[#4A62AA] font-bold p-4">
  {index + 1} 
                                </td>
                                <td className="border border-x-0 bg-white/70 p-2">{item.title}  <i>{item.shortName} </i></td>
                                <td className="border border-x-0 bg-white/70 p-2 text-center">
                                    {item.fileId ? (
                                        <a
                                            href={item.fileId}
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
        </div>
    );
};

export default FonctionPubliqueTable;
