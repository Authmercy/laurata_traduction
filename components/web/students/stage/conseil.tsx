"use client";


import { useState } from "react";
import fr from '@/i18/fr/student/conseil.json';
import en from '@/i18/en/student/conseil.json';
import { useRouter } from "next/router";
export default function ConseilStage() {

  const [open, setOpen] = useState(null);
  const handleToggle = (index: any) => {
    setOpen(open === index ? null : index);
  };
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;
  const blocks: {
    id: keyof typeof t.internshipTipsDuringStage.blocks;
    tips: Array<keyof typeof t.internshipTipsDuringStage.tips>;
  }[] = [
      { id: "punctuality", tips: ["10"] },
      { id: "appearance", tips: ["11", "12", "13"] },
      { id: "involvement", tips: ["14"] },
      { id: "company", tips: ["15"] },
      { id: "notCanteen", tips: ["16", "17"] },
      { id: "supervisor", tips: ["18"] },
      { id: "report", tips: ["19", "20", "21"] },
      { id: "issues", tips: ["22"] }
    ];
  const block: {
    id: keyof typeof t.internshipTipsAfterStage.blocks;
    tips: Array<keyof typeof t.internshipTipsAfterStage.tips>;
  }[] = [
      { id: "certificate", tips: ["23", "24"] },
      { id: "networking", tips: ["25"] },
      { id: "recruitment", tips: ["26"] },

      { id: "thanks", tips: ["27"] }

    ];


  return (
    <div className="flex flex-wrap pl-10 mt-2 pt-6">
      <div className="flex-grow md:w-2/3  text-black  p-8">
        <div className="  bg-[#A87A38] p-3 text-center  font-bold text-2xl
                 uppercase text-white ">
          {t.internshipTips.title}
        </div>

        <div

          className="bg-white/60   mt-2  p-2 px-6 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
        >

          <p>{t.internshipTips.intro}</p>


        </div>





        <div className="mt-6 space-y-4">
          <div>


            <button
              className="py-2 px-4 w-full text-white bg-[#4A62AA]/70     uppercase flex justify-between items-center"
              onClick={() => handleToggle(2)}
            >
              <span>{t.internshipTips.before}  </span>
              <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
            </button>


            {open === 2 && (
              <div className="bg-white/70 p-4 mt-2 ">
                <div className="w-full">


                  <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8">
                    <div className="text-[#4A62AA]">{t.internshipTips.blocks.general}</div>
                    <div className="max-w-4xl">
                      <p><span className="font-bold text-[#4A62AA]">1.</span> {t.internshipTips.tips["1"]}</p>
                      <p><span className="font-bold text-[#4A62AA]">2.</span> {t.internshipTips.tips["2"]}</p>
                      <p><span className="font-bold text-[#4A62AA]">3.</span> {t.internshipTips.tips["3"]}</p>
                      <p><span className="font-bold text-[#4A62AA]">4.</span> {t.internshipTips.tips["4"]}</p>
                    </div>
                  </div>


                  <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                    <div className="text-[#4A62AA]">{t.internshipTips.blocks.dress}</div>
                    <div className="max-w-4xl">
                      <p><span className="font-bold text-[#4A62AA]">5.</span> {t.internshipTips.tips["5"]}</p>
                    </div>
                  </div>


                  <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                    <div className="text-[#4A62AA]">{t.internshipTips.blocks.interview}</div>
                    <div className="max-w-4xl">
                      <p><span className="font-bold text-[#4A62AA]">6.</span> {t.internshipTips.tips["6"]}</p>
                      <p><span className="font-bold text-[#4A62AA]">7.</span> {t.internshipTips.tips["7"]}</p>
                      <p><span className="font-bold text-[#4A62AA]">8.</span> {t.internshipTips.tips["8"]}</p>
                      <p><span className="font-bold text-[#4A62AA]">9.</span> {t.internshipTips.tips["9"]}</p>
                    </div>
                  </div>

                </div>
              </div>)}


          </div>




        </div>
        <div className="mt-2">
          <div>
            <button
              className="py-2 px-4 w-full text-white bg-[#4A62AA]/70 flex uppercase justify-between items-center"
              onClick={() => handleToggle(1)}
            >
              <span>{t.internshipTipsDuringStage.title}</span>
              <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
            </button>

            {open === 1 && (
              <div className="bg-white/70 p-4 mt-2">
                <div className="w-full">
                  {blocks.map((block) => (
                    <div key={block.id} className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                      <div className="text-[#4A62AA]">
                        {t.internshipTipsDuringStage.blocks[block.id]}
                      </div>
                      <div className="max-w-4xl">
                        {block.tips.map((tipKey) => (
                          <p key={tipKey}>
                            <span className="font-bold text-[#4A62AA]">{tipKey}.</span>{" "}
                            {t.internshipTipsDuringStage.tips[tipKey]}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            )}
          </div>

          <div className="mt-2">
            <div>



              <button
                className="py-2 px-4 w-full text-white bg-[#4A62AA]/70   uppercase  flex justify-between items-center"
                onClick={() => handleToggle(3)}
              >
                <span>{t.internshipTipsAfterStage.title}</span>
                <span className="text-2xl">{open === 3 ? "▲" : "▼"}</span>
              </button>


              {open === 3 && (
                <div className="bg-white/70 p-4 mt-2">
                  <div className="w-full">
                    {block.map((block) => (
                      <div key={block.id} className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                        <div className="text-[#4A62AA]">
                          {t.internshipTipsAfterStage.blocks[block.id]}
                        </div>
                        <div className="max-w-4xl">
                          {block.tips.map((tipKey) => (
                            <p key={tipKey}>
                              <span className="font-bold text-[#4A62AA]">{tipKey}.</span>{" "}
                              {t.internshipTipsAfterStage.tips[tipKey]}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              )}


            </div>


          </div>
        </div>

      </div>
    </div >

  );
}