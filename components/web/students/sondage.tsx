"use client";
import ButtonAccueil from "../buttons/buttonAccueil";
import UseSondageService from "@/service/service_sondage";


import en from '@/i18/en/student/sondage.json';
import fr from '@/i18/fr/student/sondage.json';
import { useRouter } from "next/router";


export default function SondageComponent() {
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





  return (
    <div className="p-2 md:pl-8 mt-24 text-black min-h-screen flex flex-col">
      <div className="flex flex-col flex-grow w-full">
        <div className="flex justify-center flex-col  w-full">
          <div className="space-y-8 ">
            <p className=" text-center">
         {t.intro}
             </p>

            <div className="b p-4 ">
              <div className=" text-[#4A62AA]  text-2xl  text-center font-bold">
                <p>
                {t.title}
                </p>
              </div>
              {errorMessage && (
                <div className="text-red-600 mt-10 text-center w-full py-4 bg-red-100 border border-red-300 rounded relative">
                  <button
                    className="absolute top-1 right-2 text-red-600 font-bold"
                    onClick={() => setErrorMessage(null)}
                  >
                    ×
                  </button>
                  {errorMessage}
                </div>
              )}
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

              <div>


              </div>  </div>



          </div>
          <div className="flex flex-col mt-20 justify-center gap-2 text-center">
            <div className="text-[#A38340] font-bold pt-8 text-xl ">  {t.share} </div>
            <div className="flex flex-row  justify-center gap-2">
              <img src="/icons/icons8-whatsapp-logo-64(1).png" alt="social" className=" mt-2 w-[52px] h-[52px]" />
              <img src="/icons/icons8-facebook-logo-64.png" alt="social" className="" />
              <img src="/icons/icons8-linkedin-logo-64.png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
              <img src="/icons/icons8-x-64(1).png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
            </div>
          </div>
          <div className="my-10 flex flex-row justify-center gap-4">
            <ButtonAccueil />
          </div>
        </div>
      </div>

    </div>
  );
}