import UseConcourService from '@/service/service_concours';
import React from 'react';

const InstitutionsTransnationaleTable = () => {
      const {
                   concours,
    setConcours,
    errorMessage
          
              } = UseConcourService()
   

    return (
        <div className="w-full rounded-lg shadow-sm p-4">
            <div className="w-full overflow-x-auto">
                <table className="border-collapse w-full text-start">
                    <thead className="font-bold">
                        <tr>
                            <th className="p-2 text-center border border-x-0 border-[#9C824A] ">INSTITUTION</th>
                       <th className="p-2 text-center  border border-x-0 border-[#9C824A] ">RÉFÉRENCES DU CONCOURS <i className='font-normal'> – EXAM’S REFERENCES  </i></th>
                            <th className="p-2 text-center border  border-x-0 border-[#9C824A] ">LIEN  <i className='font-normal'> – LINK</i></th>
                        </tr>
                    </thead>
                   <tbody>
    {concours.filter(item => item.category === "TRANSNATIONAL").length > 0 ? (
        concours
            .filter(item => item.category === "TRANSNATIONAL")
            .map((item, index) => (
                <tr
                    key={item.id}
                    className="text-black border-b-2 border-[#4A62AA]"
                >
                    <td className="border border-x-0 text-black p-4">
                        {item.title} <i>{item.shortName}</i>
                    </td>
                    <td className="border border-x-0 bg-white/70 p-2">
                        {item.examReference || '—'}
                    </td>
                    <td className="border border-x-0 bg-white/70 p-2">
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
            ))
    ) : (
        <tr>
            <td className="text-center col-span-3 p-4 text-gray-500">
                Aucun concours transnational disponible pour le moment.
                <br />
                No transnational exams available at the moment.
            </td>
        </tr>
    )}
</tbody>
                </table>
            </div>
        </div>
    );
};

export default InstitutionsTransnationaleTable;
