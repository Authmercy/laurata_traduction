
"use client";
import en from '@/i18/en/student/sondage.json';
import fr from '@/i18/fr/student/sondage.json';
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import UseSondageService from "@/service/service_sondage";
import { Brand } from "@/service/Brand";



export default function SondageComponentMobile() {
  const router = useRouter();

  const { locale } = router;
  const t = locale === 'en' ? en : fr;
  const {
    setErrorMessage,
    handleSubmitQuestion,
    errorMessage,
    groupedQuestions,
    handleToggle,
    open,
    responses,
    handleResponseChange,
    validatedQuestions,
  } = UseSondageService();


  const [brand, setBrand] = useState<Brand[]>([]);
  useEffect(() => {
    const fetchsetBrand = async () => {
      const brand: Brand[] = [

        {
          id: 1,
          name: "Medicare",
          url: "",
          path: "/images/logo/medicare.png"
        },


      ];
      setBrand(brand);
    };

    fetchsetBrand();
  }, []);


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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>              {t.title}</p>
          </div>


          <div

            className="bg-white   mt-8   p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className=" text-center font-semibold text-[#4A62AA] text-lg">
              {t.intro}  </p>



          </div>
                <div className="w-full py-4">
                {Object.entries(groupedQuestions).map(([categoryId, group]) => (
                  <div key={categoryId}>
                    <div
                      className="py-2 px-8 mt-2 w-full text-[#bd6a32] bg-[#babcc0] font-bold flex justify-between items-center"
                      onClick={() => handleToggle(categoryId)}
                    >
                      <span className="text-xl">
                        {group.categoryName || 't.unavailable'}
                      </span>
                      <span className="text-xl">
                        {open === categoryId ? '▲' : '▼'}
                      </span>
                    </div>

                    {open === categoryId && (
                      <div className="bg-[#babcc0]">
                        <div className="w-full py-2 text-black">
                          <div className="space-y-4">
                            <div className="p-4 space-y-4">
                              {group.questions.map((q, index) => (
                                <div
                                  key={q.id}
                                  className="border bg-[#e0e2e6] p-4 rounded shadow-sm"
                                >
                                  <p className="font-semibold mb-2">
                                    {q.id ? `${q.id}.` : ''} {q.text || 'Question sans texte'}
                                  </p>

                                  {q.items && q.items.length > 0 ? (
                                    <div className="space-y-2">
                                      {q.items.map((item, idx) => {
                                        const inputType =
                                          q.type === 'SINGLE' ? 'radio' :
                                            q.type === 'MULTIPLE' && item.answerType === 'BOOLEAN' ? 'checkbox' :
                                              item.answerType === 'TEXT' ? 'text' : 'checkbox';

                                        return (
                                          <div key={item.id || idx} className="flex items-center space-x-2">
                                            {item.answerType === 'TEXT' ? (
                                              <input
                                                type="text"
                                                id={`q-${q.id}-item-${item.id}`}
                                                name={`q-${q.id}-item-${item.id}`}
                                                placeholder={item.text ?? ''}
                                                className="border p-2 rounded w-full"
                                                onChange={(e) => handleResponseChange(q.id, e.target.value)}
                                              />
                                            ) : (
                                              <>
                                                <input
                                                  type={inputType}
                                                  id={`q-${q.id}-item-${item.id}`}
                                                  name={`q-${q.id}${q.type === 'SINGLE' ? '' : `-item-${item.id}`}`}
                                                  value={item.id}
                                                  className="mr-2"
                                                  onChange={(e) => {
                                                    if (q.type === 'SINGLE') {
                                                      handleResponseChange(q.id, e.target.value);
                                                    } else {
                                                      const currentResponses = Array.isArray(responses[q.id]) ? responses[q.id] as string[] : [];
                                                      const newResponses = e.target.checked
                                                        ? [...currentResponses, e.target.value]
                                                        : currentResponses.filter(v => v !== e.target.value);
                                                      handleResponseChange(q.id, newResponses);
                                                    }
                                                  }}
                                                />
                                                <label htmlFor={`q-${q.id}-item-${item.id}`}>
                                                  {item.text || `${t.option} ${idx + 1}`}
                                                </label>
                                              </>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  ) : (
                                    <p className="text-gray-500 py-2">
                                   {t.noOptions}
                                    </p>
                                  )}

                                  <div className="flex justify-end">
                                  {validatedQuestions.includes(q.id) ? (
  <span className="text-green-600 font-semibold mt-3">    {t.validate} </span>
) : (
  <button
    className={`rounded p-2 font-bold ${!responses[q.id] ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#4A62AA] hover:bg-blue-500'} text-white mt-3`}
    onClick={() => handleSubmitQuestion(q.id)}
    disabled={
      !responses[q.id] ||
      (Array.isArray(responses[q.id]) && responses[q.id].length === 0)
    }
  >
    {t.validate}
  </button>
)}

                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>


        </div>
        <div className="flex  mt-36 bg-white items-center justify-center  ">
          {brand.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center "
            >
              <div className="flex  items-center   justify-center  ">


                <a href={item.path}>

                  <img
                    src={item.path}
                    alt={item.name}
                    width={200}
                    height={150}
                    className="flex  my-10 justify-center  "
                  /> </a>
              </div></div>
          ))}
        </div>
        <div className="flex flex-col bg-white/90 py-8 justify-center gap-2 text-center">
          <div className="text-[#A38340] font-bold text-xl "> {t.share} </div>
          <div className="flex flex-row  justify-center gap-2">
            <img src="/icons/icons8-whatsapp-logo-64(1).png" alt="social" className=" mt-2 w-[52px] h-[52px]" />
            <img src="/icons/icons8-facebook-logo-64.png" alt="social" className="" />
            <img src="/icons/icons8-linkedin-logo-64.png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
            <img src="/icons/icons8-x-64(1).png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
          </div>
        </div>
      </div>

      <footer className="w-full bg-blue-900   mt-auto  text-white text-center">
        <FooterMobile />
      </footer>
    </div>
  );

}