
"use client";
import React, { useState } from "react";

type CountryData = {
  id: number;
  rank?: number;
  country: string;
  year2014: string;
  year2019: string;
  percentage2019: string;
  evolution: string;
  isTop5: boolean;
};

const StudentDestinationsTable = () => {

  const initialData: CountryData[] = [
    { id: 1, rank: 1, country: "Allemagne", year2014: "5 845", year2019: "7 214", percentage2019: "28%", evolution: "+23%", isTop5: true },
    { id: 2, rank: 2, country: "France", year2014: "ND", year2019: "4 773", percentage2019: "19%", evolution: "-", isTop5: true },
    { id: 3, rank: 3, country: "Belgique", year2014: "1 631", year2019: "1 633", percentage2019: "6%", evolution: "0%", isTop5: true },
    { id: 4, rank: 4, country: "Canada", year2014: "837", year2019: "1 257", percentage2019: "5%", evolution: "+50%", isTop5: true },
    { id: 5, rank: 5, country: "États-Unis", year2014: "1 222", year2019: "1 219", percentage2019: "5%", evolution: "0%", isTop5: true },
    { id: 6, rank: 6, country: "Italie", year2014: "2 767", year2019: "930", percentage2019: "6%", evolution: "-66%", isTop5: false },
    { id: 7, rank: 7, country: "Tunisie", year2014: "515", year2019: "697", percentage2019: "3%", evolution: "+35%", isTop5: false },
    { id: 8, rank: 8, country: "Afrique du sud", year2014: "726", year2019: "625", percentage2019: "2%", evolution: "-14%", isTop5: false },
    { id: 9, rank: 9, country: "Turquie", year2014: "143", year2019: "583", percentage2019: "2%", evolution: "+308%", isTop5: false },
    { id: 10, rank: 10, country: "Pologne", year2014: "57", year2019: "560", percentage2019: "2%", evolution: "+882%", isTop5: false },
    { id: 11, country: "Autres pays", year2014: "10 145", year2019: "6 091", percentage2019: "24%", evolution: "-40%", isTop5: false },
  ];

  const [data, setData] = useState<CountryData[]>(initialData);



  const totals = {
    year2014: data.reduce((sum, item) => sum + (item.year2014 === 'ND' ? 0 : parseInt(item.year2014.replace(/\s/g, ''))), 0),
    year2019: data.reduce((sum, item) => sum + (item.year2019 === 'ND' ? 0 : parseInt(item.year2019.replace(/\s/g, ''))), 0),
  };


  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };



  return (
    <div className="w-full px-2">
      <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#ebddc9]">
              <th className="border p-2 text-start">
                Rang
              </th>
              <th className="border p-2 text-start">
                Pays
              </th>
              <th className="border p-2 text-center">
                2019
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className={`hover:bg-gray-50 ${item.id % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}
              >
                <td className="border p-2">{item.rank}</td>
                <td className="border p-2">{item.country}</td>
                <td className="border p-2 text-center">{item.year2019}</td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-bold">
              <td className="border p-2" colSpan={2}>
                Total
              </td>
              <td className="border p-2 text-center">{formatNumber(totals.year2019)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <p>
          Source : Institut Statistique de l'UNESCO (ISU), septembre 2021. <i>
            <br />
            <a
              href="http://uis.unesco.org/fr/uis-student-flow"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://uis.unesco.org/fr/uis-student-flow
            </a> </i>
        </p>
      </div>


    </div>
  );
}
export default StudentDestinationsTable;