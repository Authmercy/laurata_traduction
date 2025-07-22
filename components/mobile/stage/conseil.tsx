"use client";


import { useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import fr from '@/i18/fr/student/conseil.json';
import en from '@/i18/en/student/conseil.json';
import { useRouter } from "next/router";
export default function ConseilStageMobile() {



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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div>
      <div className="min-h-screen   bg-[#4A62AA] text-black overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >

        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />
        <div className={`${isMobileMenuOpen ? "blur-sm " : ""
          } ${isMobileMenuOpen2 ? "blur-sm " : ""
          } `}>
          <div className="flex flex-col justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>    {t.internshipTips.title}</p>
          </div>


          <div

            className="bg-white/70  mt-8 p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >

            <p className="mt-2 text-center  text-black">
              {t.internshipTips.intro} </p>


          </div>






          <div className="mt-6 space-y-4">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(1)}
                >
                  <span className="uppercase">{t.internshipTips.before}  </span>

                  <span className="sm:ml-10">{open === 1 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 1 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full">
                    <div className="bg-white/60 p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">

                      <div className=" text-[#4A62AA]  font-bold   "> {t.internshipTips.blocks.general}</div>
                      <div className="max-w-4xl">
                        <p><span className="font-bold text-[#4A62AA]">1.</span> {t.internshipTips.tips["1"]}</p>
                        <p><span className="font-bold text-[#4A62AA]">2.</span> {t.internshipTips.tips["2"]}</p>
                        <p><span className="font-bold text-[#4A62AA]">3.</span> {t.internshipTips.tips["3"]}</p>
                        <p><span className="font-bold text-[#4A62AA]">4.</span> {t.internshipTips.tips["4"]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/60 p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">
                    <div className=" text-[#4A62AA] font-bold "> {t.internshipTips.blocks.dress}</div>
                    <div className="max-w-4xl">
                      <p><span className="font-bold text-[#4A62AA]">5.</span> {t.internshipTips.tips["5"]}</p>
                    </div>
                  </div>


                  <div className="bg-white/60 p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">
                    <div className=" text-[#4A62AA] font-bold "> {t.internshipTips.blocks.interview}</div>
                    <div className="max-w-4xl">
                      <p><span className="font-bold text-[#4A62AA]">6.</span> {t.internshipTips.tips["6"]}</p>
                      <p><span className="font-bold text-[#4A62AA]">7.</span> {t.internshipTips.tips["7"]}</p>
                      <p><span className="font-bold text-[#4A62AA]">8.</span> {t.internshipTips.tips["8"]}</p>
                      <p><span className="font-bold text-[#4A62AA]">9.</span> {t.internshipTips.tips["9"]}</p>
                    </div>
                  </div>

                </div>
              )}
            </div>

          </div>
          <div className="mt-2 space-y-4">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(2)}
                >
                  <span className="uppercase">{t.internshipTipsDuringStage.title} </span>

                  <span className="sm:ml-10">{open === 2 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 2 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full">
                    <div className="flex flex-col gap-1">
                      {blocks.map((block) => (
                        <div key={block.id} className="bg-white/60 p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4 sm:gap-8">

                          <div className="text-[#4A62AA] font-bold">
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
                </div>
              )}
            </div>
          </div>
          <div className="mt-2 space-y-4">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(3)}
                >
                  <span className="uppercase">{t.internshipTipsAfterStage.title}</span>

                  <span className="sm:ml-10">{open === 3 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 3 && (
                <div className="bg-white/60 ">
                   {block.map((block) => (
                      <div key={block.id}className="bg-white/60 p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4 sm:gap-8">

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
          
              )}
            </div>



          </div>

        </div>

      </div>
      <footer className="w-full bg-blue-900    text-white text-center">
        <FooterMobile />
      </footer>
    </div >

  );
}