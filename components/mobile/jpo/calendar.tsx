"use client";
import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

export default function FormJPOMobile() {
  const [values, setValues] = useState<DateObject[]>([]);



  return (
    <div className="w-full px-4">


      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full">
     
        <div className="flex-1"> 
          <DatePicker
            range
            value={values}
            onChange={setValues}
            format="DD/MM/YYYY"
            placeholder="Sélectionner des dates"
            className="w-full"
            inputClass="w-full border-2 border-[#7b92d6] placeholder-[#717172] p-2 px-8"
          />
        </div>

     
        <div className="flex-1"> 
          <input
            type="text"
            placeholder="Rechercher Institution"
            className="w-full border-2 border-[#7b92d6] placeholder-[#717172] p-2 px-8"
          />
        </div>


        <div className="w-full md:w-auto">
          <button className="w-full md:w-auto bg-[#c5c6cc] font-bold hover:bg-[#A87A38] text-black p-2 px-6">
            Afficher
          </button>
        </div>
      </div>
    </div>
  );

}