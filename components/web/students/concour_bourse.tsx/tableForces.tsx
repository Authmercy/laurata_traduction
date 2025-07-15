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
                            <th className="p-2 text-center">Communiqués d'ouvertures des concours - Examinations Opening </th>
                            <th className="p-2   text-center">LIEN – LINK</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {concours
                            .filter(item => item.category === "public_service")
                            .map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="text-black border-b-2 border-[#4A62AA]"
                                >
                                    <td className="border border-x-0 text-center text-[#4A62AA] font-bold p-4">
                                        {index + 1}
                                    </td>
                                    <td className="border border-x-0 text-black bg-white/70 p-2">
                                        {item.title} <i>{item.shortName}</i>
                                    </td>
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
                                            "Non disponible"
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
