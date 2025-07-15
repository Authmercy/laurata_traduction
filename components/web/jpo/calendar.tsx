"use client";

import UseJPOService from "@/service/service_jpo";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import en from '../../../i18/en/student/jpo.json';
import fr from '../../../i18/fr/student/jpo.json';
export default function FormJPO() {


  const {

  handleSubmit,
  errorMessage,
  opendays,
  loading,
  setOpendays,
  setErrorMessage,
values,
message,
schoolName,
setValues,
setSchoolName,
  } = UseJPOService()



    const router = useRouter();

  const { locale } = router;
    const t = locale === 'en' ? en : fr;


  return (
 <div className="w-full">
  <div className="flex justify-center gap-8 w-full">

    <div className="max-w-md">
      <DatePicker
        range
        value={values}
        onChange={setValues}
        format={t.searchForm.dateFormat}
        placeholder={t.searchForm.datePlaceholder}
        className="w-full"
        inputClass="w-full border-2 border-[#7b92d6] placeholder-[#717172] p-2 px-8"
      />
    </div>


    <div className="max-w-md">
      <input
        type="text"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        placeholder={t.searchForm.institutionPlaceholder}
        className="w-full border-2 border-[#7b92d6] placeholder-[#717172] p-2 px-8"
      />
    </div>

   
    <button
      className="bg-[#4A62AA] hover:bg-[#A87A38] text-white p-2 px-6"
      onClick={handleSubmit}
    >
      {loading ? t.searchForm.loadingText : t.searchForm.submitButton}
    </button>
  </div>

  
  {message && (
    <p className="text-center mt-4 text-sm text-red-600">{message}</p>
  )}
</div>
  );
}
