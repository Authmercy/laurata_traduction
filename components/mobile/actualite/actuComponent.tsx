"use client";
import {  useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
;
import UseActuService from "@/service/service_actu";
import en from '@/i18/en/misc/apropos.json';
import fr from '@/i18/fr/misc/apropos.json';



export default function ActuComponentMobile() {
  const router = useRouter();
   const { locale } = router;
    const t = locale === 'en' ? en : fr;
  const {

     newsfeed,

    errorMessage,
    selectedItem,
    clicked,
    setClicked,
    setSelectedItem,
    groupedByMonth,
    handleViewDetails,
    handleItemClick,
    
    setErrorMessage,
    getMonthName,


  } = UseActuService()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
 
  return (
    <div>
      <div className="min-h-screen   bg-[#34538C]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
        
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />
        <div className={`${isMobileMenuOpen ? "blur-sm " : ""
          } ${isMobileMenuOpen2 ? "blur-sm " : ""
          } `}>
          <div className="justify-center p-2 text-center  text-xl font-bold uppercase bg-[#c09111] text-white">
                     <p>     {locale === 'en' ? 'News' : 'Actualités'}</p>
          </div>

          <div className="w-full  py-6">
              {errorMessage && (
                            
                    <div className="text-red-600 text-center w-full py-4 mt-10 bg-red-100 border border-red-300 rounded relative">
                        <button
                            className="absolute top-1 right-2 text-red-600 font-bold"
                            onClick={() => setErrorMessage(null)}
                        >
                            ×
                        </button>
                        {errorMessage}
                    </div>
                )}
            {Object.entries(groupedByMonth)
              .sort(([aKey], [bKey]) => {
                const [aYear, aMonth] = aKey.split("-").map(Number);
                const [bYear, bMonth] = bKey.split("-").map(Number);
                return aYear !== bYear ? aYear - bYear : aMonth - bMonth;
              })
              .map(([monthKey, items]) => {
                const [year, month] = monthKey.split("-");


                return (
                  <div key={monthKey} className="bg-white shadow p-4">
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">
                      {`${getMonthName(parseInt(month))} ${year}`}
                    </h3>
                    <ul className="space-y-3">
                      {items.map((activity) => (
                        <li
                          key={activity.id}
                         
                           className={`border-l-2 pl-2 transition-transform  text-black border-black duration-200 
       
         '`}
                        >
                          <div     onClick={() => handleViewDetails(activity)} 
                                         className={` flex justify-between transition-transform  duration-200 
          ${clicked ? ' text-[#c09111] border-[#4A62AA]' : ' text-black border-black'}
         '`}
         >
                            <div>
                              <div className="font-bold">{`${activity.day}`}</div>
                              <span className="font-medium">{activity.title}</span>
                            </div>
                            <button
                              onClick={() => handleViewDetails(activity)}
                              className="text-2xl transform text-[#4A62AA] -rotate-90"
                            >
                              ▼
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>


        </div>
      </div>
      <footer className="w-full bg-blue-900    text-white text-center">
        <FooterMobile />
      </footer>
    </div>
  );
}
